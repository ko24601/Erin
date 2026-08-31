# A Special Question for Erin ❤️💍

A custom, cute, romantic, mobile-first single-page web experience crafted by **Kyle** to ask **Erin** to be his girlfriend.

---

## ✨ Features

- 📱 **Mobile-First Experience**: Tailored and tested for phone viewports (320px, 375px, 390px, 414px, 430px) and desktops with zero horizontal scrolling.
- 💌 **Interactive Question Journey**:
  1. **Step 1 — Name Verification**: Validates Erin's name (case-insensitive & trimmed) with cute feedback on wrong entries (`Nuh uh, wrong answer 😤❤️`).
  2. **Step 2 — First Promise**: Playfully prompts to always stay together through thick and thin (`Yes ❤️` proceeds, `No 💔` prompts `Try again ❤️`).
  3. **Step 3 — Second Promise**: Romantic confirmation of taking on the world together.
  4. **Step 4 — The Proposal**: Beautiful climax asking *"Erin, will you be my girlfriend? ❤️"* with two working `YES ❤️` buttons.
  5. **Step 5 — Celebration**: Grand heart & confetti explosion revealing the commemorative couple card (*"Kyle ❤️ Erin"*).
- 💖 **Ambient Floating Hearts**: Canvas-powered smooth floating background hearts with varied sizes, speeds, and sways (non-intrusive `pointer-events: none`).
- 🎶 **Native Sound Synthesizer**: Zero-dependency romantic harp & sparkle chimes powered by Web Audio API, with a floating sound toggle.
- ⚡ **Zero-Build & Lightweight**: Pure HTML5, CSS3, and modern vanilla JavaScript with instant loading and 100% offline compatibility.
- ♿ **Accessible**: WCAG compliant contrast, touch targets ≥ 48px, keyboard navigation, and `prefers-reduced-motion` support.

---

## 🚀 How to Run Locally

Because this project uses vanilla HTML/CSS/JavaScript with zero build step dependencies, you can run it immediately:

### Option 1: Direct Browser Launch
Simply double-click [`index.html`](index.html) or open it directly in any web browser (Chrome, Safari, Firefox, Edge).

### Option 2: Using Any Local Static Server
If you prefer running a local development server:

#### Using Node / `npx serve`:
```bash
npx -y serve .
```

#### Using Python:
```bash
python -m http.server 8000
```

#### Using VS Code Live Server:
Right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 Publishing Live with GitHub Pages (Step-by-Step)

Publishing this website for Erin as a live URL via GitHub Pages takes under 2 minutes:

### 1. Initialize & Push to GitHub

If you haven't pushed the repo yet:

```bash
# 1. Navigate to the project directory
cd /path/to/for-erin

# 2. Initialize git repository
git init
git add .
git commit -m "feat: initial release of Erin romantic proposal website ❤️"

# 3. Create repository on GitHub & push (using GitHub CLI)
gh repo create for-erin --public --source=. --remote=origin --push

# Or push to an existing remote repository:
# git remote add origin https://github.com/YOUR_USERNAME/for-erin.git
# git branch -M main
# git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/for-erin`
2. Click on **Settings** (tab at the top).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` (or `master`) and folder `/ (root)`
5. Click **Save**.

Within 30–60 seconds, GitHub Pages will generate your live public link:
```
https://YOUR_USERNAME.github.io/for-erin/
```

Send that link to Erin for the romantic surprise! ❤️

---

## 🛠️ Project Structure

```
for-erin/
├── index.html       # Semantic HTML5 markup, meta tags, and accessibility hooks
├── styles.css       # Romantic CSS design system, glassmorphism, responsive tokens & animations
├── app.js           # Interactive state machine, audio synthesizer, and particle physics engines
├── .gitignore       # Standard git ignore rules
└── README.md        # Documentation and deployment instructions
```

---

## 💖 Credits

Made with endless love by Kyle for Erin ❤️
