import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import SummaryDisplay from "./components/SummaryDisplay";

/**
 * Main App
 * Provides a clean, user-friendly layout.
 */
export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Conversa</h1>
        <p className="subtitle">From speech to insights - transcripts, highlights, and actions.</p>
      </header>

      <main className="app-main">
        <FileUpload onResult={(res) => setResult(res)} />
        {result && <SummaryDisplay result={result} />}
      </main>

      <footer className="app-footer">
        <small>Built with VOSK · React · Flask · MinIO</small>
      </footer>
    </div>
  );
}