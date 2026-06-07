# 🔐 Code Dungeon — Live API Setup

## For Hackathon Judges (Demo Mode)

The game works **immediately** in Demo Mode — no setup required.
Just open `index.html` in any modern browser and start playing.

---

## For Live API (Real AI-Generated Questions)

### Step 1: Get a Free API Key

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up (no credit card required)
3. Navigate to the **API Keys** section
4. Click **Create API Key**
5. Copy your key — it starts with `gsk_`

### Step 2: Configure the Game

1. Copy `config.example.js` to `config.js`:
   ```bash
   # Mac / Linux
   cp config.example.js config.js

   # Windows
   copy config.example.js config.js
   ```
2. Open `config.js` in any text editor
3. Replace `your_groq_api_key_here` with your actual key
4. Confirm `DEMO_MODE` is set to `false`

### Step 3: Load the Config in Your Browser

Because `config.js` is loaded as a plain `<script>` tag, you need to serve
the files through a local server (browsers block local `file://` script
loading for security). Any of these work:

```bash
# Python 3
python -m http.server 8080

# Node (npx)
npx serve .

# VS Code — use the Live Server extension
```

Then open `http://localhost:8080` in your browser.

### Step 4: Play!

The game auto-detects `config.js` and switches to live AI mode.
You'll see **"✅ Live API mode enabled"** in the browser console.

---

## ⚠️ Security Reminders

- **Never** commit `config.js` to git — it is already in `.gitignore`
- **Never** share your API key publicly
- Your key only lives on your local machine
- If a key is ever accidentally exposed, revoke it immediately at [console.groq.com](https://console.groq.com/keys)

---

## File Structure

```
code-dungeon/
├── index.html           # Main game (no hardcoded keys)
├── config.example.js    # Template — safe to commit ✅
├── config.js            # YOUR config — gitignored 🔒 (create locally)
├── .gitignore           # Prevents key leakage
├── INSTALL.md           # This file
└── README.md            # General setup and feature reference
```
