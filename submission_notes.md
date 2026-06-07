# Code Dungeon ⚔️ — Hackathon Submission

## Game Title
Code Dungeon

## Description
A single-file browser RPG where players defeat dragons by answering AI-generated quiz questions about a coding or math problem they paste in. No build step, no server, no accounts required.

## Core Features Implemented
- 4-tier dragon progression system with escalating HP and attack power
- AI-generated multiple-choice questions via Groq LLaMA 3.3 70B
- Demo Mode with pre-built question pools (no API key needed)
- XP system with level-up animations and milestone badges
- Streak combo multiplier (🔥) for consecutive correct answers
- Health bars with animated fills for player and dragon
- Floating damage numbers on all HP changes
- Screen shake on player hit, confetti canvas on victory
- Web Audio API sound effects (opt-in)
- Hint Tome modal with AI-powered hints
- Victory / Defeat modals with run stats
- localStorage persistence for dungeon clear count
- Mobile-first responsive layout (works at 375px)

## Kiro Features Used
- **Hooks**: Agent hooks for automated workflows (e.g., this hackathon-prep hook)
- **Steering Files**: Product, tech stack, structure, and code-dungeon guidelines in `.kiro/steering/`
- **Specs**: Feature specs in `.kiro/specs/` for structured development

## Technologies Used
| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | Tailwind CSS (CDN) |
| Logic | Vanilla JavaScript (ES2020+) |
| AI | Groq API — LLaMA 3.3 70B |
| Audio | Web Audio API |
| Animation | CSS keyframes + Canvas API |
| Persistence | localStorage |

## Demo Mode Instructions
1. Open `index.html` in any modern browser — no installation needed
2. `DEMO_MODE = true` is already set — no API key required
3. Paste any coding or math problem and pick a discipline
4. Click "Enter the Dungeon" to start battling!
5. To enable live AI: set `DEMO_MODE = false` and add a Groq API key (free at console.groq.com/keys)

## Estimated Build Time
~8–12 hours of focused development with Kiro AI assistance

## How to Run
- Open `index.html` in Chrome, Firefox, Edge, or Safari
- No build step, no dependencies to install
- Works fully offline in Demo Mode

## File Structure
```
code-dungeon/
├── index.html   # Entire game — single self-contained file
└── README.md    # Setup and feature reference
```
