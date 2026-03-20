# Amp Marine Site — CLAUDE.md

## What this is
The **runnable** Vite + React project for the Amp Marine Electrical Solutions marketing website.

## Stack
- Vite 8
- React 19
- Framer Motion 12
- Tailwind CSS v4
- Lucide React

## Commands
```bash
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build
```

## File structure
```
amp-marine-site/
├── src/
│   └── App.jsx          ← entire site, single React component
├── public/
│   ├── logo.png         ← header nav logo
│   ├── preview.png
│   └── projects/        ← 5 curated portfolio images
│       ├── mikes-boat-wiring-final.png
│       ├── 20250305_112042.jpg
│       ├── IMG_0722.jpg
│       ├── 20240710_161402.jpg
│       └── 20241126_162015.jpg
├── index.html           ← entry point (add OG/meta tags here)
└── package.json
```

## Scratch / working directory
`/Users/zacharyschwartz/Documents/Amp Marine/Website/` is the working scratch directory.
After editing `amp_marine_website.jsx` or images there, sync to this project:
```bash
cp "/Users/zacharyschwartz/Documents/Amp Marine/Website/amp_marine_website.jsx" src/App.jsx
cp "/Users/zacharyschwartz/Documents/Amp Marine/Website/public/projects/"* public/projects/
```

## Component structure (App.jsx)
1. **Splash screen** — amber line + tagline, fades out ~3.3s (no logo)
2. **Sticky header** — logo in nav (`/logo.png`), nav links
3. **Hero** — tagline, headline, 3 CTAs; two sky-blue `motion.div` bolt glow layers (absolutely positioned, infinite pulse)
4. **Services grid** — 4 cards (Diagnostics, Electronics, Lithium/Charging, Rewires)
5. **Projects gallery** — 5 photos, `/projects/` prefix, 1/2/3-col responsive grid, title-only cards
6. **Contact section** — email, phone, website
7. **Footer**
8. **Fixed mobile call button** — bottom-right, hidden on `md+`

## Color palette
- Background: `#061c1c`
- Cards: `#0b2222`
- Accent: amber-300 / amber-500 gradient
- Text: white / slate-300 / slate-400 / slate-500

## Bolt glow pattern
Two stacked `motion.div` overlays in the hero `<section>`:
- **Outer**: `left-[17%] top-[22%] h-32 w-32 blur-3xl`, sky-blue radial gradient, 2.2s pulse
- **Inner**: `left-[17.5%] top-[22.5%] h-16 w-16 blur-xl`, brighter core, 1.6s pulse
- Uses inline `style` for radial-gradient (Tailwind can't express arbitrary rgba radial gradients)

## Open items
- `index.html` needs OG/meta/twitter tags added
- `public/projects/` contains legacy images beyond the 5 in use — safe to ignore or clean up

## Session log
### 2026-03-19 (session 1)
- Synced `amp_marine_website.jsx` → `src/App.jsx`
- Created `public/projects/` and copied 5 curated images
- Created CLAUDE.md

### 2026-03-20 (session 21)
- Navbar inner div: removed `mx-auto max-w-7xl` → `flex w-full` so "Amp Marine" is flush left
- Bolt glow: outer `left-[27%] top-[15%]`, inner `left-[27.5%] top-[15.5%]`

### 2026-03-20 (session 20)
- Restored `<img>` tag hero approach: `h-[72vh] object-cover object-center block`
- Splash screen: backgroundImage preview.jpg retained
- Navbar: "Amp Marine" amber text link (tel:) on left, nav links on right including phone number
- Bolt glow: outer `left-[25%] top-[18%]`, inner `left-[25.5%] top-[18.5%]`
- Hero structure: img on top → CTA buttons (`-mt-6`) → text block below
- Image container: `relative w-full overflow-hidden`, no rounded corners

### 2026-03-20 (session 19)
- Restored splash screen `backgroundImage: url('/preview.jpg')` style
- Reverted hero from `<img>` tag approach back to CSS background image on `<section>`:
  - `<section className="relative min-h-[60vh] sm:min-h-[68vh]">`
  - Background div: `absolute inset-0 bg-cover bg-center` with inline backgroundImage style
  - Overlay div: `absolute inset-0 bg-black/35`
  - Text + CTAs overlaid via `relative` content div (py-24)
- Bolt glow restored to `left-[17%] top-[22%]` (outer) and `left-[17.5%] top-[22.5%]` (inner)
- No rounded corners on hero section

### 2026-03-20 (session 18)
- Hero image height: `h-[62vh]` → `h-[72vh]`
- Confirmed no `rounded-*` on hero section, image wrapper div, or img

### 2026-03-20 (session 17)
- Confirmed no `rounded-*` on hero section, image wrapper div, or img — already clean
- Hero image height: `h-[55vh]` → `h-[62vh]`
- Bolt glow: `top-[8%]` → `top-[12%]` on both layers

### 2026-03-19 (session 16)
- Discovered `public/preview.jpg` (1200×800) had baked-in white/light borders: 29px left, 120px top, 38px right, 112px bottom (edge pixels ~RGB 241,241,241)
- Auto-cropped borders using PIL with threshold=220; new size 1133×568
- This was the root cause of white side strips in the hero image

### 2026-03-19 (session 15)
- Gallery cards: confirmed no `whileHover` on `motion.div` wrappers — hover is CSS-only (`group-hover:scale-110` on `<img>`)
- System Plan card (`mikes-boat-wiring-final.png`): added `brightness-110 contrast-125` via conditional className using `p.src.includes('mikes-boat')`

### 2026-03-19 (session 14)
- Added `overflow-y: scroll` and `scrollbar-gutter: stable` to `html` rule — fixes white side strips caused by scrollbar appearing/disappearing
- Hero image: added `object-top` so the top of the landscape image shows correctly instead of being cropped from center

### 2026-03-19 (session 13)
- Added `margin: 0; padding: 0;` to the `html` rule in index.css
- Tailwind base: uses `@import "tailwindcss"` (v4 syntax) which includes preflight — no separate `@tailwind base` directive needed

### 2026-03-19 (session 12)
- Splash screen: removed `backgroundImage: preview.jpg` style (was causing white-edged card look), changed bg from `#041616` to `#061c1c` to match site background, kept `fixed inset-0 z-50`
- Navbar logo: no logo.svg exists — replaced `<img>` with `"Amp Marine"` text styled `font-semibold tracking-wide text-amber-300 hover:text-white`
- Navbar logo link already pointed to `tel:+1-949-777-5102` — confirmed correct

### 2026-03-19 (session 11)
- Added `*, *::before, *::after { box-sizing: border-box }` to index.css
- Body rule already had `margin: 0; padding: 0; overflow-x: hidden` — confirmed no changes needed there
- Navbar logo link: changed from `href="https://www.ampmarine.net"` (external) to `href="tel:+1-949-777-5102"` (call); removed `target="_blank"` and `rel="noreferrer"`

### 2026-03-19 (session 10)
- `index.html`: confirmed bare `<div id="root">` — no wrapper padding
- `index.css` body rule: added `padding: 0` and `overflow-x: hidden`
- App.jsx outermost div: changed to `w-screen min-h-screen overflow-x-hidden`
- Hero `<section>` and image container: both already `w-full` with no margin — confirmed clean

### 2026-03-19 (session 9)
- No logo.svg exists in public/ — kept logo.png in navbar, added `style={{ filter: 'brightness(0) invert(1)' }}` to render it white on the dark nav

### 2026-03-19 (session 8)
- Added `*.save` and `*.jsx.save` to `.gitignore`
- Removed `src/App.jsx.save` from git index and disk (`git rm --cached`)
- Hero image: added `block` to `<img>` className, added `w-full` to `<section>` and image container `<div>` to eliminate side gaps
- Navbar: replaced `ampmarine.net` text link with `<img src="/logo.png" className="h-8 w-auto" />` wrapped in the same anchor

### 2026-03-19 (session 7)
- Bolt glow moved up: both layers now `top-[8%]` (was `top-[14%]`)

### 2026-03-19 (session 6)
- Bolt glow moved up: both layers now `top-[14%]` (was `top-[22%]`/`top-[22.5%]`)
- Fixed CTA button clipping: moved buttons out of `overflow-hidden` image div into a sibling `motion.div` with `-mt-6 z-10` for visual overlap without clipping
- Text block padding adjusted to `pt-10` (was `pt-16`) since buttons no longer need as much clearance

### 2026-03-19 (session 5)
- Bolt glow moved to left-[28%] (outer) / left-[28.5%] (inner)
- Tagline trimmed: removed "for discerning vessel owners." — now ends at "uncompromising reliability."
- Confirmed no JSX text overlaid on hero image (image container has only: img, overlay div, bolt glows, CTA buttons)

### 2026-03-19 (session 4)
- Restructured hero section: image-on-top / text-below layout
  - `preview.jpg` renders as `w-full h-[55vh] object-cover` inside a `relative overflow-hidden` div
  - `bg-black/20` overlay (subtle)
  - 3 CTA buttons absolutely positioned at `bottom-[-22px]` of the image container, bridging image and text
  - Secondary buttons have `bg-[#061c1c]/80 backdrop-blur-sm` for legibility over the image edge
  - Label, h1, tagline moved below image into a `pt-16 pb-20` text block
- Moved bolt glow layers right: `left-[17%]` → `left-[38%]` (outer), `left-[17.5%]` → `left-[38.5%]` (inner)

### 2026-03-19 (session 3)
- Added `backgroundImage: "url('/preview.jpg')"` (+ `backgroundSize: cover`, `backgroundPosition: center`) to both the splash screen `motion.div` and the hero `<section>`
- `preview.jpg` is 153KB, lives at `public/preview.jpg` — valid

### 2026-03-19 (session 2)
- Confirmed `public/preview.jpg` already present (also `preview.png`)
- Removed logo `<picture>`/`<img>` from navbar/header — nav links retained
- Updated project card image hover: `transition-transform duration-300 group-hover:scale-110` (card has `overflow-hidden` to clip zoom, only image scales not card)
- Note: also synced these changes back to scratch `Website/amp_marine_website.jsx` is NOT yet updated — scratch and runnable are now out of sync on these two changes
