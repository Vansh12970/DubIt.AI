// Global variables
let selectedMode = '';
let selectedLanguage = '';

// Modal functions
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function openLanguageDropdown() {
    document.getElementById('languageDropdown').style.display = 'block';
}

function closeLanguageDropdown() {
    document.getElementById('languageDropdown').style.display = 'none';
}

// Text to Voice functions
function openTextToVoice() {
    document.querySelector('.main-background').style.display = 'none';
    document.getElementById('textToVoiceScreen').style.display = 'block';
    console.log('Text to Voice screen opened');
}

function goHome() {
    document.querySelector('.main-background').style.display = 'block';
    document.getElementById('textToVoiceScreen').style.display = 'none';
    console.log('Returned to home screen');
}

function createAudio() {
    const textInput = document.getElementById('textInput');
    const text = textInput.value.trim();
    
    if (!text) {
        alert('Please enter some text to convert to voice');
        return;
    }
    
    if (!selectedLanguage) {
        alert('Please select a language first');
        return;
    }
    
    console.log('Creating audio...');
    console.log('Text:', text);
    console.log('Language:', selectedLanguage);
    
    // Here you would implement the actual text-to-voice logic
    alert(`Creating audio in ${selectedLanguage} language for: "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}"`);
}

// Preview Modal functions
function openPreviewModal() {
    document.getElementById('previewModal').style.display = 'block';
    console.log('Preview modal opened');
}

function closePreviewModal() {
    document.getElementById('previewModal').style.display = 'none';
    console.log('Preview modal closed');
}

// Mode selection functions
function selectDubAudio() {
    selectedMode = 'audio';
    updateButtonStates();
    console.log('Audio dubbing mode selected');
}

function selectDubVideo() {
    selectedMode = 'video';
    updateButtonStates();
    console.log('Video dubbing mode selected');
}

function updateButtonStates() {
    const buttons = document.querySelectorAll('.sidebar-btn');
    buttons.forEach(btn => {
        btn.style.backgroundColor = '#B4D000';
    });
    
    if (selectedMode === 'audio') {
        buttons[0].style.backgroundColor = '#9BC000';
    } else if (selectedMode === 'video') {
        buttons[1].style.backgroundColor = '#9BC000';
    }
}

// File upload function
function handleFileUpload() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
}

// Start dubbing function
function startDubbing() {
    if (!selectedMode) {
        alert('Please select either DUB AI AUDIO or DUB AI VIDEO first');
        return;
    }
    
    if (!selectedLanguage) {
        alert('Please select a language first');
        return;
    }
    
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files.length) {
        alert('Please upload an audio or video file first');
        return;
    }
    
    console.log('Starting dubbing process...');
    console.log('Mode:', selectedMode);
    console.log('Language:', selectedLanguage);
    console.log('File:', fileInput.files[0].name);
    
    // Here you would implement the actual dubbing logic
    alert(`Starting ${selectedMode} dubbing in ${selectedLanguage} language`);
}

// Language selection
function selectLanguage(language) {
    selectedLanguage = language;
    closeLanguageDropdown();
    console.log('Selected language:', language);
    
    // Update the SELECT LANGUAGE button text
    const selectBtns = document.querySelectorAll('.sidebar-btn, .action-btn');
    selectBtns.forEach(btn => {
        if (btn.textContent === 'SELECT LANGUAGE') {
            btn.textContent = language.toUpperCase();
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const loginModal = document.getElementById('loginModal');
        const languageDropdown = document.getElementById('languageDropdown');
        const previewModal = document.getElementById('previewModal');
        
        if (event.target === loginModal) {
            closeLoginModal();
        }
        
        if (event.target === languageDropdown) {
            closeLanguageDropdown();
        }
        
        if (event.target === previewModal) {
            closePreviewModal();
        }
    });
    
    // Upload area click handler
    const uploadArea = document.querySelector('.upload-area');
    if (uploadArea) {
        uploadArea.addEventListener('click', handleFileUpload);
    }
    
    // File input change handler
    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            console.log('File selected:', file.name);
            document.querySelector('.upload-text').textContent = `SELECTED: ${file.name.toUpperCase()}`;
        }
    });
    
    // Language button click handlers
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectLanguage(this.textContent);
        });
    });
    
    // Language search functionality
    const languageSearch = document.querySelector('.language-search');
    if (languageSearch) {
        languageSearch.addEventListener('input', function(event) {
            const searchTerm = event.target.value.toLowerCase();
            const languageButtons = document.querySelectorAll('.language-btn');
            
            languageButtons.forEach(btn => {
                const language = btn.textContent.toLowerCase();
                if (language.includes(searchTerm)) {
                    btn.style.display = 'block';
                } else {
                    btn.style.display = 'none';
                }
            });
        });
    }
    
    // Text input placeholder behavior
    const textInput = document.getElementById('textInput');
    if (textInput) {
        textInput.addEventListener('focus', function() {
            if (this.value === '') {
                this.style.textAlign = 'left';
            }
        });
        
        textInput.addEventListener('blur', function() {
            if (this.value === '') {
                this.style.textAlign = 'center';
            }
        });
        
        textInput.addEventListener('input', function() {
            this.style.textAlign = 'left';
        });
    }
});

// Keyboard event handlers
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLoginModal();
        closeLanguageDropdown();
        closePreviewModal();
    }
});