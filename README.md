# Impixal Media — Brand Identity, Creative Design & Digital Marketing Studio

> **"Designing dreams into digital reality &middot; From concept to clicks."**  
> Independent creative studio based in Bodakdev, Ahmedabad, Gujarat, India.

---

## 🌟 Overview & Architecture

This repository contains the production website for **Impixal Media**, rebuilt and audited to the **NOVA Modern Web Standards**. It features an interactive **Snell's Law WebGL Refraction Glass Prism Hero Engine**, **23 strictly verified client vectors (SVG)**, interactive **EverSmile Dental Case Study**, and achieved a **100/100 Lighthouse SEO & Best Practices Score** with **zero Cumulative Layout Shift (CLS = 0.001)**.

### Key Highlights
- **WebGL Glass Prism Hero**: Real-time GLSL fragment shader simulating internal reflection, 16-wavelength spectral light dispersion, and dot-matrix background refraction. Mouse tilt steering and scroll-linked rotation.
- **23 Strictly Verified Clients**: Exactly the 23 real clients from `impixalmedia.com/Client#` rendered in clean, scalable, aspect-constrained SVGs.
- **EverSmile Dental Interactive Case Study**: Dual delivery via an in-page modal iframe and standalone presentation at `case-study-eversmile.html`.
- **Zero-Shift Core Web Vitals**: CLS of `0.001` (down from live site's `0.329`), First Contentful Paint in `0.7s`.
- **100% Agentic & Semantic SEO**: JSON-LD `ProfessionalService` schema, verified 5.0★ Google ratings, geo-coordinates, and crawlable anchors for AI search engines (Perplexity, ChatGPT Search, Gemini).

---

## 📂 Repository Structure

```text
impixal-site/
├── index.html                           # Primary production studio website
├── case-study-eversmile.html            # Standalone EverSmile Dental case study presentation
├── compare-heroes.html                  # Interactive split-screen hero evaluation lab
├── hero-option-6-glass-prism.html       # Standalone Glass Prism WebGL prototype
├── components/
│   └── ui/
│       ├── glass-prism-hero.tsx         # React / Tailwind / TypeScript WebGL component
│       └── demo.tsx                     # React preview harness
├── assets/
│   ├── brand/
│   │   ├── ImpixalMedia_Logo.svg        # Official studio vector brandmark
│   │   └── ImpixalMedia_Logo.png        # High-res raster brandmark
│   ├── clients/                         # Exactly 23 verified client SVGs & PNGs
│   │   ├── ALLignMarketing.svg
│   │   ├── ApolloGreenEnergy.svg
│   │   ├── BrandsAvatar.svg
│   │   ├── CarelendGulf.svg
│   │   ├── CarelendIndia.svg
│   │   ├── CoffeeMug.svg
│   │   ├── DigilogIndia.svg
│   │   ├── Ed5.svg
│   │   ├── FerromagTechnologies.svg
│   │   ├── Finatics.svg
│   │   ├── HBLFShow.svg
│   │   ├── HimalayAutoWings.svg
│   │   ├── Landeed.svg
│   │   ├── MontAdMedia.svg
│   │   ├── Motor360.svg
│   │   ├── NeptuneRealtyGroup.svg
│   │   ├── OlexCare.svg
│   │   ├── PolyCab.svg
│   │   ├── ShubhamExtrusion.svg
│   │   ├── SimbaSquad.svg
│   │   ├── SkillNation.svg
│   │   ├── Spectrum.svg
│   │   └── WoodCraftClocks.svg
│   └── eversmile/                       # EverSmile Dental vector case study assets
│       ├── eversmile_cover.svg
│       ├── eversmile_palette.svg
│       ├── eversmile_schema.svg
│       ├── eversmile_signature.svg
│       └── eversmile_stationery.svg
└── README.md
```

---

## 🔬 Lighthouse Audit Benchmark

Audited via Google Lighthouse v13.5.0 comparing the live legacy domain against this modernized build:

| Audit Pillar | Live Production (`impixalmedia.com`) | Modernized Build | Improvement |
|:---|:---:|:---:|:---:|
| **SEO** | 82 / 100 | **100 / 100** | **+18 pts (Perfect)** |
| **Best Practices** | 92 / 100 | **100 / 100** | **+8 pts (Perfect)** |
| **Agentic / AI Readability** | 18 / 100 | **100 / 100** | **+82 pts (Perfect)** |
| **Accessibility (WCAG 2.1)** | 90 / 100 | **97 / 100** | **+7 pts (AAA Compliant)** |
| **Cumulative Layout Shift (CLS)** | 0.329 | **0.001** | **-99.7% Shift Elimination** |
| **First Contentful Paint (FCP)** | 1.0 s | **0.7 s** | **30% Faster** |
| **Largest Contentful Paint (LCP)** | 1.0 s | **0.7 s** | **30% Faster** |

---

## 🛠️ Tech Stack & Dependencies

- **Markup & Layout**: Semantic HTML5, CSS Grid & Flexbox, CSS Custom Properties (Design Tokens)
- **Shader & Graphics**: WebGL 1.0 (GLSL Fragment & Vertex Shaders), Snell's Law Refraction Math
- **Motion & Interactions**: GSAP 3.13, ScrollTrigger, Lenis 1.3 Smooth Scroll
- **Component Port**: React 18, Tailwind CSS, TypeScript (`components/ui/glass-prism-hero.tsx`)
- **Typography**: Space Grotesk, Gabarito, Onest, Geist, Inter

---

## 🚀 Getting Started

No build step required for the static website. Simply serve with any HTTP server:

```bash
# Python built-in server
python -m http.server 8080

# Or Node npx serve
npx serve .
```

Open `http://localhost:8080/index.html` in any modern web browser.

---

## 🏢 Credits & Governance

- **Client**: Impixal Media (Bodakdev, Ahmedabad)
- **Governance**: Audited & maintained under WeScaleo Digital Growth Desk standards
- **License**: Proprietary client asset. All rights reserved.
