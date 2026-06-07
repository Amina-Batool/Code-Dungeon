# Code Dungeon ⚔️

A single-file browser RPG where you defeat dragons by answering AI-generated quiz questions about a coding or math problem you paste in. No accounts, no installs, no build step — just open `index.html` and fight.

---

## How to Play

1. **Choose your quest** — paste any coding or math problem into the text area and select a discipline (Coding or Math).
2. **Enter the Dungeon** — the AI generates 5 multiple-choice questions based on your problem.
3. **Answer to attack** — correct answers deal damage to the dragon; wrong answers let the dragon hit back.
4. **Use spells** — spend mana on Fireball, Heal, Health Potion, or the Hint Tome between questions.
5. **Defeat all 4 dragon tiers** to complete the dungeon, earn XP, and level up your hero.

---

## Dragon Tiers

Each dragon is progressively tougher and has its own taunts. At 50% HP, every dragon enters an **Enraged** phase with boosted attack power.

| Tier | Name | HP | Attack | Theme |
|------|------|-----|--------|-------|
| 1 | 🐉 **Emberfang** | 120 | 15 | Problem analysis, decomposition, testing basics |
| 2 | 🦎 **Shadowbyte** | 150 | 20 | Edge cases, time complexity, bounds checking |
| 3 | 🐲 **NullReaper** | 180 | 25 | Data structures, recursion, null safety |
| 4 | 🔥 **StackBreakor** | 220 | 30 | Recursion, dynamic programming, Big-O |

Dragon HP and attack scale with your hero level, so higher-level runs stay challenging.

---

## Hero Stats & Leveling

| Stat | Starting value | Gain on level-up |
|------|---------------|-----------------|
| ❤️ HP | 100 | +20 (fully restored) |
| ✨ Mana | 50 | +15 (fully restored) |
| Level | 1 | Every 100 XP |

XP is awarded on every dragon kill (50–80 base + bonus from dragon max HP). Leveling up also boosts correct-answer damage and Fireball damage.

---

## Spells

| Spell | Mana cost | Effect |
|-------|-----------|--------|
| 📖 Hint Tome | 5 | Opens the Ancient Tome modal with 3 AI-generated conceptual hints for your problem |
| 🔥 Fireball | 20 | Deals 35–55 damage (scales with level) to the current dragon |
| 💚 Heal | 15 | Restores 25–40 HP (no-op if already at full health) |
| 🧪 Potion | 20 | Restores 30–50 HP |

---

## Streak Combos

Answer **3 or more questions correctly in a row** to trigger a streak bonus — 🔥 combo multiplier deals extra damage on top of each correct answer. The streak badge appears above your hero and resets on any wrong answer.

---

## Milestone Badges

Persistent dungeon clears are stored in `localStorage` and trigger animated badges at:

| Count | Badge |
|-------|-------|
| 3 | ⭐ 3 Dungeons Cleared! |
| 5 | 🌟 5 Dungeons — Hero Rising! |
| 10 | 🔥 10 Dungeons — Legendary! |
| 25 | 🏆 25 Dungeons — Grand Master! |

---

## Demo Mode

Demo Mode is **on by default** — no API key required. The game uses a built-in pool of conceptual questions, one unique set per dragon tier, shuffled on every run. Different problems and subjects hint the question selection so repeated runs feel varied.

Toggle Demo Mode from the quest screen at any time.

---

## Live AI Mode (Groq API)

For AI-generated questions tailored to your exact problem:

1. Get a free API key at [console.groq.com/keys](https://console.groq.com/keys).
2. Copy `config.example.js` to `config.js` (this file is gitignored and will never be committed).
3. Open `config.js` and paste your key as the `API_KEY` value.
4. Serve the folder via a local HTTP server — see [INSTALL.md](INSTALL.md) for one-line options.

The game auto-detects `config.js` on load. If the key is valid, the quest screen shows a green **Live AI mode** banner. If `config.js` is missing or the key is a placeholder, it falls back to Demo Mode silently.

Rate-limit responses (HTTP 429) are retried up to 3 times with exponential backoff. All LLM calls have a 30-second timeout and fall back to demo questions on unrecoverable errors.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 |
| Styling | Tailwind CSS (CDN) + custom CSS keyframes |
| Logic | Vanilla JavaScript (ES2020+) |
| AI | Groq API — LLaMA 3.3 70B (`llama-3.3-70b-versatile`) |
| Audio | Web Audio API (no external audio files) |
| Animation | CSS keyframes + Canvas API (confetti) |
| Persistence | `localStorage` (`cd_dungeons_cleared`) |

The entire game is a **single `index.html` file** — no build tools, no bundlers, no package managers, no server required.

---

## Setup (Quick Start)

```bash
# Just open the file — no install needed for Demo Mode
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

For Live AI mode, serve over HTTP (required for `config.js` to load correctly in some browsers):

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .

# VS Code: use the Live Server extension
```

Then open `http://localhost:8080` and set up `config.js` as described above.

---

## Browser Requirements

Any modern evergreen browser with support for ES2020, CSS custom properties, Web Audio API, Canvas API, `localStorage`, and `fetch`.
