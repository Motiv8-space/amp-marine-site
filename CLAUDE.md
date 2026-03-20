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
