# 🧠 Prodesk IT — AI Prompt Reference

> A collection of structured prompts for building, debugging, and optimizing the **Prodesk IT** website using an AI coding assistant.

---

## 📑 Table of Contents

1. [Website Creation Prompt](#-website-creation-prompt)
2. [Root Cause Analysis — Before Any Fix](#-root-cause-analysis-prompt-before-any-fix)
3. [Performance Fix Prompts](#-performance-fix-prompts)
   - [Fix 1 — Render-Blocking CSS (Critical Path / LCP)](#fix-1--render-blocking-css-critical-path--lcp)
   - [Fix 2 — Cumulative Layout Shift (CLS)](#fix-2--cumulative-layout-shift-cls)
   - [Fix 3 — Critical Request Chain Depth](#fix-3--critical-request-chain-depth)
   - [Fix 4 — Document Latency & Text Compression](#fix-4--document-latency--text-compression)
4. [General Debugging Prompts](#-general-debugging-prompts)

---

## 🏗️ Website Creation Prompt

Use this prompt to recreate the Prodesk IT website from scratch with an AI assistant.

---

```
Create a complete, production-quality single-page marketing website for a digital agency called "Prodesk IT".

### Brand & Identity
- Company name: Prodesk IT
- Tagline: "We Build Digital Experiences That Move Brands Forward."
- Services: Web Development, SEO, Digital Marketing
- Contact email: hello@prodeskit.example
- Social links: LinkedIn, Instagram, GitHub (placeholder hrefs for now)

### Color Palette (use exactly these)
- Primary accent (mint green): #65e4c2
- Secondary accent (purple): #8b7cff
- Dark background: #07101f
- Dark surface: #0d1729
- Dark surface-2: #111e33
- Dark muted text: #aab6ca
- Light background: #f6f8fc

### Tech Stack
- HTML5 (semantic elements — header, nav, main, section, article, footer)
- Tailwind CSS v3 (compiled, NOT the CDN Play script) with darkMode: 'class'
- Vanilla JavaScript (no frameworks)
- Google Font: Inter (weights 400–900), loaded asynchronously to avoid render-blocking

### Dark / Light Mode
- Default: dark mode
- Toggle button in the navbar with moon/sun icon and label text
- Persist preference in localStorage under key "theme"
- Add an inline <script> in <head> to read localStorage BEFORE CSS loads to prevent FOUC

### Pages / Sections (single scrolling page)
Build these sections in order, each with a unique id for anchor nav:

1. Sticky Glass Header (#top)
   - Glassmorphism style: backdrop-blur-xl, semi-transparent background
   - Brand logo: gradient "P" icon + "Prodesk IT" text with mint "IT"
   - Desktop nav links: Home, About, Services, Contact
   - Mobile hamburger button with aria-expanded toggle
   - Dark/Light mode toggle button (rightmost)

2. Hero Section (#home)
   - Two-column layout on desktop, single column on mobile
   - Left: eyebrow label, h1 headline with mint accent, subtitle, two CTA buttons
     - Primary CTA: "Get Started →" → scrolls to #services
     - Secondary CTA: "Explore More" → scrolls to #about
   - Trust badges below CTAs: "100% Responsive", "24/7 Digital Reach", "3+ Core Services"
   - Right: a glassmorphism "Growth Dashboard" card showing:
     - "+84.6%" online growth stat with a "↗ 18.2%" pill badge
     - A bar chart (7 bars Mon–Sun) — last bar (Sunday) is mint green with glow, others are purple/muted
     - The card should be slightly rotated (1.5deg) and straighten on hover
   - Two floating notification badges overlaid on the card: "Campaign Live" and "Fast & Clean"
   - Two blurred glow orbs in the background (mint bottom-left, purple top-right)

3. About Section (#about)
   - Two-column layout: heading on left, content + numbered list on right
   - Headline: "Simple technology. Real impact."
   - Three numbered principles (01, 02, 03) separated by divider lines

4. Services Section (#services)
   - 3-column grid of cards (1 column on mobile)
   - Service 01: SEO — icon ⌁
   - Service 02: Web Development — icon ⌘ — HIGHLIGHTED card (mint tinted background + border)
   - Service 03: Marketing — icon ↗
   - Each card: hover lifts (-translate-y-2), icon scales up, "Learn more →" link to #contact

5. Process Section (no anchor needed)
   - 4-column grid: 01 Discover, 02 Design, 03 Build, 04 Grow
   - Subtle hover background highlight on each column
   - Centered heading: "From idea to impact."

6. Contact / CTA Section (#contact)
   - Full-width gradient card (mint + purple gradient)
   - Headline: "Ready to build something better?"
   - Single CTA button: "Contact Us →" → mailto:hello@prodeskit.example

7. Footer
   - Brand logo (links back to #top)
   - Copyright text with dynamic year rendered by JavaScript
   - Social icon links: LinkedIn (in), Instagram (ig), GitHub (gh)

### JavaScript (script.js) — Three responsibilities only
1. Dark/Light theme toggle (toggle .dark on <html>, update icon + label, save to localStorage)
2. Mobile nav drawer (hamburger toggle, close on link click, close on outside click, close on Escape key)
3. Dynamic copyright year: document.getElementById('year').textContent = new Date().getFullYear()

### Performance Requirements
- DO NOT use the Tailwind CDN Play script — use compiled style.css only
- Load Google Fonts asynchronously: use media="print" onload="this.media='all'" trick
- Add a font-face fallback (Inter Fallback) with adjusted ascent-override, descent-override, size-adjust to prevent CLS
- Add inline critical CSS in <head> for background-color, color, font-family, and hero card min-height
- Add scroll-padding-top: 90px to <html> to compensate for the fixed header on anchor jumps
- Add contain: layout style to the hero dashboard card to isolate layout

### File Structure
prodesk-it-website/
├── index.html
├── style.css          (compiled Tailwind output — minified)
├── input.css          (Tailwind @tailwind base/components/utilities entry)
├── tailwind.config.js (custom colors, Inter font, darkMode: 'class')
├── script.js
├── package.json       (scripts: dev:css and build:css)
└── .gitignore

### package.json scripts
"dev:css":   "tailwindcss -i ./input.css -o ./style.css --watch"
"build:css": "tailwindcss -i ./input.css -o ./style.css --minify"
```

---

## 🔍 Root Cause Analysis Prompt (Before Any Fix)

Use this prompt whenever you encounter an error or warning and want to understand it **before any changes are made**.

---

```
Is there any fix available for the following error/warning?

DO NOT apply any fix yet. First, explain:
1. What is the root cause of this issue?
2. Which file, line, or configuration is responsible?
3. What impact does it have (performance, accessibility, SEO, etc.)?
4. What are the possible solutions (list all options)?
5. Which solution do you recommend and why?

Only after I confirm, apply the fix.

--- ERROR / WARNING BELOW ---

[PASTE YOUR ERROR OR LIGHTHOUSE WARNING HERE]
```

---

## ⚡ Performance Fix Prompts

### Fix 1 — Render-Blocking CSS (Critical Path / LCP)

**Lighthouse Warning:**
> Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.
> `/3.4.17` (cdn.tailwindcss.com) — 123.8 KiB, 260 ms

---

```
There is a website with HTML, JS and CSS. I want you to fix the following performance issue.

First, create an implementation plan covering all the steps needed. DO NOT write any code until I approve the plan.

--- ISSUE ---
Requests are blocking the page's initial render, which may delay LCP (Largest Contentful Paint).
Deferring or inlining these network requests can move them out of the critical path.

Offending resource:
  - https://cdn.tailwindcss.com/3.4.17
  - Size: 123.8 KiB | Latency: ~260 ms

--- CONTEXT ---
- The site currently loads Tailwind CSS via the CDN Play script tag in <head>
- This is a synchronous, render-blocking request
- The site is static HTML + vanilla JS

--- WHAT I WANT ---
1. Replace the CDN Tailwind script with a locally compiled style.css
2. Set up Tailwind CLI (npm) to compile input.css → style.css
3. Load the compiled style.css with <link rel="stylesheet"> (non-blocking where possible)
4. Ensure no functionality is lost (dark mode class strategy, all custom colors/fonts)
5. Add inline critical CSS in <head> for above-the-fold styles to prevent FOUC during stylesheet load

--- DELIVERABLES ---
- Updated index.html
- input.css (Tailwind entry file)
- tailwind.config.js (with darkMode: 'class', custom colors, Inter font)
- package.json with dev:css and build:css scripts
- Instructions to run the build
```

---

### Fix 2 — Cumulative Layout Shift (CLS)

**Lighthouse Warning:**
> Layout shifts occur when elements move absent any user interaction. Investigate the causes of layout shifts, such as elements being added, removed, or their fonts changing as the page loads.
>
> Affected element: `div.w-full.max-w-[460px].p-6.sm:p-7.rounded-[25px].border.border-slate-900/10.dark`

---

```
There is a website with HTML, JS and CSS. I want you to fix the following performance issue.

First, create an implementation plan covering all the steps needed. DO NOT write any code until I approve the plan.

--- ISSUE ---
Cumulative Layout Shift (CLS): Elements are shifting during page load without any user interaction.

Affected element:
  div.w-full.max-w-[460px].p-6.sm:p-7.rounded-[25px].border.border-slate-900/10.dark
  (This is the hero section's "Growth Dashboard" card on the right column)

--- LIKELY ROOT CAUSES (investigate all) ---
1. Web font loading (Inter from Google Fonts) causes text to reflow when it swaps from the fallback font
2. The hero card has no reserved minimum height, so it shifts as child content renders
3. Images or icons loading asynchronously could push content down

--- WHAT I WANT ---
1. Add a custom @font-face fallback named "Inter Fallback" using local Arial/Helvetica
   with adjusted metrics (ascent-override, descent-override, size-adjust) to match Inter's dimensions
2. Add min-height to the hero dashboard card in inline critical CSS to reserve layout space
3. Add contain: layout style to the card element to isolate its layout from the rest of the page
4. Load Google Fonts asynchronously using: media="print" onload="this.media='all'"
5. Add <link rel="preconnect"> to fonts.googleapis.com and fonts.gstatic.com

--- DELIVERABLES ---
- Updated index.html (inline critical CSS + font loading changes)
- No changes to style.css or script.js unless absolutely required
```

---

### Fix 3 — Critical Request Chain Depth

**Lighthouse Warning:**
> Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.
>
> Maximum critical path latency: **1,630 ms** (or 50 ms per chain link)
>
> Chain example:
> - Initial Navigation → `http://localhost:3000` (44 ms, 6 KiB)
>   - → `/style.css` (50 ms, 5.74 KiB)

---

```
There is a website with HTML, JS and CSS. I want you to fix the following Lighthouse issue.

First, create an implementation plan covering all the steps needed. DO NOT write any code until I approve the plan.

--- ISSUE ---
Critical Request Chains are too deep, causing high cumulative latency before the page renders.

Current chain (worst case, 1,630 ms):
  HTML → style.css → [any further chained resources]

Current minimal chain (50 ms):
  HTML (localhost:3000, 44ms) → /style.css (50ms, 5.74 KiB)

--- WHAT I WANT ---
Reduce the critical rendering path depth by:

1. Inlining the most critical CSS directly into <head> as a <style> block
   (above-the-fold: background color, font-family, hero section heights, header styles)
2. Adding <link rel="preload" as="style"> for style.css so the browser fetches it earlier
3. Loading non-critical CSS (e.g. below-the-fold section styles) with media="print" onload trick
4. Adding defer to all <script> tags so JS does not block HTML parsing
5. Adding <link rel="preconnect"> for any third-party origins (Google Fonts, etc.)
6. Ensuring style.css is minified to reduce download time

--- DELIVERABLES ---
- Updated index.html with preload hints, deferred scripts, and inlined critical CSS
- Confirmation that style.css is minified (npm run build:css with --minify flag)
- List of what was moved to inline CSS and what remains in style.css
```

---

### Fix 4 — Document Latency & Text Compression

**Lighthouse Warning:**
> Your first network request is the most important. Reduce its latency by avoiding redirects, ensuring a fast server response, and enabling text compression.
>
> - No compression applied
> - Estimated savings: 18 KiB

---

```
There is a website with HTML, JS and CSS. I want you to fix the following Lighthouse issue.

First, create an implementation plan covering all the steps needed. DO NOT write any code until I approve the plan.

--- ISSUE ---
Document request latency is high. The initial HTML document is not compressed.

Details:
  - No text compression (Gzip or Brotli) is applied to the HTTP response
  - Estimated savings: 18 KiB
  - This affects Time to First Byte (TTFB) and overall page load speed

--- CONTEXT ---
The site is currently served via a local dev server (e.g. http://localhost:3000).
In production it will be deployed as a static site.

--- WHAT I WANT ---
1. Diagnose: Confirm which server is being used (e.g. live-server, VS Code Live Server, http-server, nginx, etc.)
2. Enable Gzip or Brotli compression on the server serving the HTML/CSS/JS files:
   - If using http-server (npm): show the correct flags to enable gzip
   - If using nginx: provide the gzip config block
   - If deploying to Netlify / Vercel / GitHub Pages: confirm compression is automatic
3. Minify index.html to reduce raw document size (remove comments and whitespace)
4. Ensure style.css and script.js are also served compressed
5. Add the following HTTP response headers where possible:
   Content-Encoding: gzip
   Cache-Control: public, max-age=31536000, immutable  (for style.css and script.js)
   Cache-Control: no-cache  (for index.html)

--- DELIVERABLES ---
- Server configuration or startup command with compression enabled
- Optionally: an HTML minification step added to the build pipeline
- Explanation of which headers are set automatically by the hosting platform vs. manually
```

---

## 🐛 General Debugging Prompts

### Ask for Root Cause Without Applying Fix

```
I have the following error/warning in my web project. 

DO NOT make any changes yet.

Tell me:
- What is the root cause?
- Which file or line is responsible?
- What are my options to fix it?

Error:
[PASTE ERROR HERE]
```

---

### Ask for Fix After Root Cause is Confirmed

```
Now that we've identified the root cause, please apply the fix.

Requirements:
- Make the minimal change necessary
- Do not refactor unrelated code
- Explain each change you make and why
- Show me a diff or summary of what changed
```

---

### Ask for an Implementation Plan Before Any Coding

```
I want to fix the following issue in my website (HTML + CSS + JS):

[DESCRIBE THE ISSUE]

Before writing any code:
1. List all the files that need to change
2. Describe what change is needed in each file
3. Estimate the risk / side effects of each change
4. Confirm with me before proceeding

Only start coding after I say "Proceed".
```

---

### Ask to Explain Code Before Changing It

```
Before making any changes, explain what the following code does:

[PASTE CODE BLOCK]

Specifically:
- What is its purpose?
- Are there any known issues or anti-patterns in it?
- Is there a better modern approach?
```

---

### Validate Fix Without Breaking Existing Behavior

```
After applying the fix, please:
1. Confirm what changed and what stayed the same
2. List any edge cases that might be affected
3. Tell me how to manually verify the fix works (what to look for in the browser or DevTools)
4. Check if the fix introduces any new Lighthouse warnings or performance regressions
```

---

*This prompt file is part of the Prodesk IT project. Keep it updated as new fixes and patterns are discovered.*
