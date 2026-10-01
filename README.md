# Prodesk IT — Digital Experiences Website

> A modern, fully responsive marketing website for **Prodesk IT**, a digital agency offering Web Development, SEO, and Digital Marketing services.

---

## 🌐 Live Preview

Open `index.html` directly in any browser — no server required.

---

## 📁 Project Structure

```
prodesk-it-website/
├── index.html          # Main HTML — all sections and layout
├── style.css           # Compiled Tailwind CSS output (production-ready)
├── input.css           # Tailwind CSS source / entry file
├── tailwind.config.js  # Tailwind configuration (custom colors, fonts, dark mode)
├── script.js           # Vanilla JS — theme toggle, mobile nav, footer year
├── package.json        # Node scripts for building CSS
├── package-lock.json   # Locked dependency tree
└── .gitignore          # Git ignored files (node_modules, .env, etc.)
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌙 Dark / Light Mode | Toggle persisted to `localStorage`, instant — no flash on reload |
| 📱 Responsive Design | Mobile-first layout, works on all screen sizes |
| 🍔 Mobile Navigation | Hamburger drawer with outside-click & Escape-key close |
| ♿ Accessibility | ARIA labels, `aria-expanded`, semantic HTML5 elements |
| ⚡ Performance Optimized | Non-render-blocking fonts, inline critical CSS, CLS prevention |
| 🎨 Glassmorphism UI | Frosted glass header, backdrop blur cards, glow orbs |
| 🧭 Smooth Scrolling | CSS `scroll-behavior: smooth` + `scroll-padding-top` for fixed header |
| 🔢 Dynamic Footer Year | Auto-updated copyright year via JavaScript |
| 🎯 SEO Ready | Meta description, theme-color, semantic headings, single `<h1>` |

---

## 🗂️ Page Sections (Top to Bottom)

### 1. 🔝 Sticky Header / Navigation
- **File:** `index.html` — lines 62–103
- Glassmorphism sticky header with `backdrop-blur-xl`
- Brand logo with gradient `P` icon and hover scale animation
- Desktop nav links: **Home**, **About**, **Services**, **Contact**
- **Dark/Light mode toggle button** (moon/sun icon + label text)
- Mobile hamburger button — collapses into a dropdown drawer on `< md` screens

### 2. 🚀 Hero Section (`#home`)
- **File:** `index.html` — lines 108–232
- Full-screen section (`min-h-[760px]`) with two-column layout on desktop
- **Left column:**
  - Eyebrow label: `DIGITAL MARKETING • WEB • GROWTH`
  - Bold `<h1>` headline with `#65e4c2` (mint green) accent
  - Subtitle paragraph describing Prodesk IT's mission
  - Two CTA buttons: **Get Started** (primary, mint) → `#services` | **Explore More** (ghost) → `#about`
  - Trust badges: `100% Responsive`, `24/7 Digital Reach`, `3+ Core Services`
- **Right column — Growth Dashboard Card:**
  - Glassmorphism card with slight `rotate-[1.5deg]` that resets on hover
  - Live-looking bar chart (7 bars, Mon–Sun) with a glowing mint bar on Sunday
  - `+84.6%` online growth stat with `↗ 18.2%` badge
  - Two floating notification badges: **Campaign Live** & **Fast & Clean**
- **Background:** Two blurred color orbs (`#8b7cff` purple + `#65e4c2` mint) for ambient glow

### 3. ℹ️ About Section (`#about`)
- **File:** `index.html` — lines 234–284
- Two-column layout: heading on left, content on right
- Tagline: *"Simple technology. Real impact."*
- Three numbered principles (01, 02, 03) with divider lines:
  1. Responsive-first development
  2. Clean architecture (semantic HTML/CSS/JS)
  3. User-focused, business-goal-oriented design

### 4. 🛠️ Services Section (`#services`)
- **File:** `index.html` — lines 286–374
- 3-column card grid (stacks to 1 column on mobile)
- Each card has: icon, numbered label, heading, description, and a `Learn more →` link to `#contact`

| # | Service | Description |
|---|---|---|
| 01 | **SEO** | On-page optimization and content-focused search strategies |
| 02 | **Web Development** ⭐ | Fast, responsive, accessible websites — featured/highlighted card |
| 03 | **Marketing** | Digital campaigns connecting messages to the right audience |

- **Web Development** card is visually highlighted with a mint-tinted gradient background and colored border

### 5. 🔄 Process Section
- **File:** `index.html` — lines 376–421
- 4-column grid (collapses to 2 on tablet, 1 on mobile)
- Shows Prodesk IT's end-to-end workflow:

```
01 Discover → 02 Design → 03 Build → 04 Grow
```

- Hover state adds a subtle background highlight on each step cell

### 6. 📬 Contact / CTA Section (`#contact`)
- **File:** `index.html` — lines 423–456
- Full-width gradient banner card (mint + purple gradient background)
- Headline: *"Ready to build something better?"*
- Primary CTA button: **Contact Us →** links to `mailto:hello@prodeskit.example`

### 7. 🦶 Footer
- **File:** `index.html` — lines 460–485
- Brand logo (links back to `#top`)
- Dynamic copyright year — rendered by `script.js`
- Social icon links: **LinkedIn** (`in`), **Instagram** (`ig`), **GitHub** (`gh`)

---

## ⚙️ How It Works — JavaScript (`script.js`)

The entire JS is wrapped in `DOMContentLoaded` to run after the DOM is ready. It handles three responsibilities:

### 1. Dark / Light Theme Toggle
```
User clicks button → toggle .dark class on <html> → save to localStorage
```
- On page load, an **inline `<script>` in `<head>`** reads `localStorage` immediately (before CSS renders) to prevent the white flash (FOUC) in dark mode.
- `updateThemeUI()` swaps the icon (`☾` / `☀`) and label text (`Dark` / `Light`).

### 2. Mobile Navigation Drawer
- Hamburger button (`#menuToggle`) toggles `hidden`/`flex` classes on `#primaryNav`
- Updates `aria-expanded` attribute for screen reader accessibility
- **Three ways to close the drawer:**
  1. Click any nav link (on mobile only)
  2. Click anywhere outside the menu
  3. Press the `Escape` key (also returns focus to the hamburger button)

### 3. Dynamic Footer Year
```js
document.getElementById('year').textContent = new Date().getFullYear();
```
- Automatically keeps the copyright year current — no manual updates needed.

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `brand.accent` | `#65e4c2` | Primary mint green — CTAs, highlights, icons |
| `brand.purple` | `#8b7cff` | Purple — chart bars, glow orbs |
| `brand.bg` | `#07101f` | Dark mode page background |
| `brand.surface` | `#0d1729` | Dark mode card/section background |
| `brand.surface-2` | `#111e33` | Dark mode icon container backgrounds |
| `brand.muted` | `#aab6ca` | Dark mode secondary text |
| `brand.lightBg` | `#f6f8fc` | Light mode page background |

### Typography
- **Font:** [Inter](https://fonts.google.com/specimen/Inter) (weights: 400, 500, 600, 700, 800, 900)
- Loaded asynchronously via `media="print"` + `onload` trick to avoid render-blocking
- Custom `Inter Fallback` font-face with adjusted `ascent-override` / `size-adjust` metrics to prevent **Cumulative Layout Shift (CLS)**

### Dark Mode
- Implemented via Tailwind's **class strategy** (`darkMode: 'class'` in `tailwind.config.js`)
- `dark:` variants applied throughout HTML
- Preference stored in `localStorage` under key `"theme"`

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/prodesk-it-website.git
cd prodesk-it-website

# 2. Install dependencies
npm install
```

### Running Locally

Since this is a static HTML site, simply open `index.html` in your browser.

To edit styles, run Tailwind in **watch mode** — it will auto-recompile `style.css` on every change:

```bash
npm run dev:css
```

### Building CSS for Production

Compiles and **minifies** Tailwind CSS into `style.css`:

```bash
npm run build:css
```

---

## 🛠️ Tech Stack

| Technology | Version | Role |
|---|---|---|
| HTML5 | — | Semantic page structure |
| CSS3 | — | Animations, transitions, glassmorphism |
| [Tailwind CSS](https://tailwindcss.com/) | `^3.4.19` | Utility-first styling + dark mode |
| Vanilla JavaScript | ES2020 | Theme toggle, nav, dynamic year |
| [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | — | Typography |

---

## 📦 NPM Scripts

| Command | Description |
|---|---|
| `npm run dev:css` | Watch `input.css` and recompile `style.css` on changes |
| `npm run build:css` | Compile and minify `style.css` for production |

---

## 📋 SEO & Performance Details

- **Meta description** set in `<head>` for search engines
- **`theme-color`** meta tag for browser chrome on mobile
- **Single `<h1>`** per page — correct heading hierarchy (`h1 → h2 → h3`)
- **Inline critical CSS** for above-the-fold styles — eliminates render-blocking
- **Font preloading** with `<link rel="preload">` and async load via `media="print"`
- **`scroll-padding-top: 90px`** prevents the sticky header from covering anchor targets
- **`contain: layout style`** on the dashboard card to isolate layout calculations
- **`selection:bg-[#65e4c2]`** — custom text selection highlight color

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add: your feature description"`
4. Push the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License** — see `package.json` for details.

---

## 📬 Contact

**Prodesk IT**
✉️ [hello@prodeskit.example](mailto:hello@prodeskit.example)

---

<p align="center">Made with ❤️ by the Prodesk IT team</p>
