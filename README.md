# Conversa

**Conversa**  is an AI-powered meeting summarizer that transcribes meeting audio using VOSK or Whisper and generates concise summaries and task lists using an LLM. The application features real-time progress tracking in React, MinIO-based file storage, PDF export, and optional email delivery.

## Key Features

- **Automatic Transcription:** Converts meeting audio into text using VOSK or Whisper.

- **AI-Powered Summaries:** Uses a language model to generate summaries and action items.

- **Interactive User Interface:** Real-time progress tracking with a modern React frontend.

- **File Storage:** Stores uploaded audio and generated PDFs using MinIO.

- **Export & Notifications:** Supports PDF export and optional email delivery of meeting summaries.

## Requirements

- Node.js (recommended version: 16.x or higher)
- MinIO
- Python (for backend transcription and processing)
- Ollama

## 🚀 Local Deployment

### 1. Clone the repository

```bash
git git clone https://github.com/SakshiSharan1912/Conversa.git
cd Conversa
```

### 2. Set up the environment

#### Backend
- Go to the backend directory:
```bash
cd backend
```
- Install Python dependencies: 
```bash
pip install -r requirements.txt
```
- Configure required environment variables in a .env file(Flask settings, MinIO settings, email settings, Ollama config)

#### Frontend
- Go to the frontend directory:
```bash
cd ../frontend
```
-Install Node.js dependencies:
```bash
npm install
```

### 3. Install and set up Ollama
- Install Ollama
```bash
curl -fsSL https://ollama.com/install.sh | sh
```
- Download model
```bash
ollama pull llama3
```
### 4. Start MinIO
- Download MinIO and set it up
```bash
wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
sudo mv minio /usr/local/bin/
mkdir -p ~/minio-data
```
- Run MinIO
```bash
minio server ~/minio-data --console-address ":9001"
```
- Run it in the browser, open http://localhost:9001
- Create the bucket from the browser, use default credentials. User: minioadmin, password: minioadmin. After this go to create bucket called meeting-audio.


### 5. Start the application
#### Backend
- Go to the backend directory:
```bash
cd backend
```
- Run the backend server: 
```bash
python app.py
```
#### Frontend
- Go to the frontend directory:
```bash
cd ../frontend
```
-Run the frontend directory:
```bash
npm start
```