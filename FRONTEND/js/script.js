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
    const selectBtn = document.querySelectorAll('.sidebar-btn')[4];
    selectBtn.textContent = language.toUpperCase();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const loginModal = document.getElementById('loginModal');
        const languageDropdown = document.getElementById('languageDropdown');
        
        if (event.target === loginModal) {
            closeLoginModal();
        }
        
        if (event.target === languageDropdown) {
            closeLanguageDropdown();
        }
    });
    
    // Upload area click handler
    document.querySelector('.upload-area').addEventListener('click', handleFileUpload);
    
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
    document.querySelector('.language-search').addEventListener('input', function(event) {
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
});

// Keyboard event handlers
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLoginModal();
        closeLanguageDropdown();
    }
});