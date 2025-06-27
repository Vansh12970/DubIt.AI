# 🎧 Dubify – Real-Time AI-Powered Audio & Video Dubbing Web App

Dubify is a powerful web application that enables users to upload any audio or video file and instantly dub it into their desired language using Murf AI's voice technology. Built for creators, educators, and multilingual users, Dubify provides seamless real-time dubbing, voice synthesis, and preview/download features — all in one simple interface.

---

##  Features

Upload any **audio/video/movie file**  
Select **source and target languages**  
Transcribe, translate, and **generate AI voice** using Murf API  
**Text-to-Voice** conversion for content creators  
**Generate AI captions** for accessibility  
**Preview** and **download** dubbed content  
Clean, fast, and responsive UI

---

##  How It Works

1. **Upload**: Drop an audio or video file (MP3, MP4, etc.)
2. **Select Language**: Choose the desired dubbing output language
3. **Process**:
   - Extract audio (if video)
   - Transcribe speech using Whisper
   - Translate text to the target language
   - Generate voice using **Murf AI**
   - Replace original audio with dubbed audio
4. **Preview**: View the final dubbed result
5. **Download**: Get the final file (audio/video)

---

##  Tech Stack

| Layer       | Tools Used                         |
|-------------|------------------------------------|
| Frontend    | HTML, CSS, JS / React (optional)   |
| Backend     | Node.js / Flask / FastAPI          |
| AI Services | Murf AI API (TTS), OpenAI Whisper  |
| File Ops    | FFmpeg (audio/video merging)       |
| Auth        | Optional (JWT / Firebase)          |
| Deployment  | Vercel (Frontend), Render/Heroku   |

---

##  Supported Languages

Dubify supports over **25+ languages and voice accents** via Murf AI, including:
- English (US, UK, India, Australia)
- Hindi, Tamil, Bengali, Korean, Japanese, Mandarin
- French, Spanish, German, Italian, Dutch, Russian, Portuguese, etc.

Full list available at [murf.ai](https://murf.ai/)

---

##  Screenshots

> Upload Audio/Video →  
> Select Language →  
> Start Dubbing →  
> Preview & Download

---

##  Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/dubify.git
cd dubify
