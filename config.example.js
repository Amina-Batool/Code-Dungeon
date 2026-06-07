// config.example.js
// ─────────────────────────────────────────────────────────────────────────────
// Template for live API configuration.
// Copy this file to config.js and add your real Groq API key.
//
//   cp config.example.js config.js        (Mac / Linux)
//   copy config.example.js config.js      (Windows)
//
// ⚠️  IMPORTANT: NEVER commit config.js to git!
//     config.js is already listed in .gitignore to prevent accidental leaks.
//
// Get a free API key at: https://console.groq.com/keys
// ─────────────────────────────────────────────────────────────────────────────

const LIVE_CONFIG = {
  DEMO_MODE: false,                                          // Set to false to use live AI
  API_KEY:   "your_groq_api_key_here",                       // Paste your gsk_... key here
  API_URL:   "https://api.groq.com/openai/v1/chat/completions",
  MODEL:     "llama-3.3-70b-versatile"                       // or "mixtral-8x7b-32768"
};
