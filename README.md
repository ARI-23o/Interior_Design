# 🏛️ SOWAKAAH™ Interior Design Studio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> **A luxury, bespoke digital experience crafted for high-end residential & commercial interior architecture.**  
> Designed with meticulous attention to detail, editorial aesthetics, high-converting client qualification workflows, and automated multi-channel lead tracking.

Developed and maintained with precision by **[Makdeveloper](https://makdeveloper.co.in/)**.

---

## ✨ Key Features

- **🏆 Editorial Luxury Aesthetic**: Warm, earthy bespoke palettes (Terracotta, Desert Sand, Deep Espresso, and Gold Accents) engineered specifically for luxury architectural clients.
- **🔄 Interactive Before & After Visualizers**: Real-time interactive split-sliders showcasing spatial transformation journeys (Bedrooms, Offices, Living Spaces).
- **📂 Comprehensive Portfolio & Deep Case Studies**: Multi-category filtering (Residential, Penthouse, Duplex, Turnkey), architectural specs, material palettes, and 40+ high-definition project exhibits.
- **🎯 Multi-Step Lead Qualifier & Cost Estimator**: Interactive client intake form calculating estimated scope, square footage, budget tiers, and timelines.
- **⚡ Automated Multi-Channel Lead Synchronization**:
  - **Google Sheets Database Integration**: Direct secure submission to Google Apps Script webhook with daily structured logging.
  - **WhatsApp Direct Connect**: Automated pre-filled WhatsApp handoff with client project specifications.
  - **Offline Fallback Storage**: Resilient `localStorage` caching ensuring no lead is ever lost during network hiccups.
- **🔐 Protected Studio Admin Panel**:
  - Encrypted, rate-limited studio portal.
  - Daily lead filtering, analytics metrics, and instant CSV export capabilities.
  - Exponential backoff security to prevent unauthorized access.
- **📱 Ultra-Responsive & Performant**: Full mobile, tablet, and ultra-wide display optimization with sub-second page loads.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18 (TypeScript) | Declarative, component-driven UI |
| **Styling & Design** | Tailwind CSS + PostCSS | Custom luxury theme system & responsive layout |
| **Motion & Animation** | Framer Motion | Fluid micro-interactions, page reveals, and modal animations |
| **Icons** | Lucide React | Clean, lightweight SVG iconography |
| **Build & Bundler** | Vite 5 | Lightning-fast HMR and optimized production treeshaking |
| **Deployment & Host** | Hostinger Apache / GitHub Pages | Production SPA with custom `.htaccess` routing |

---

## 📁 Project Structure

```text
Interior_Designer/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions automated build & test pipeline
├── public/
│   ├── .htaccess              # Apache SPA routing, caching & compression rules
│   ├── favicon.png            # Studio favicon assets
│   └── images/                # Optimized project galleries & brand visual assets
│       ├── projects/          # High-res curated project photos
│       └── ...
├── src/
│   ├── assets/                # Static vector emblems and designer assets
│   ├── components/
│   │   ├── admin/             # Studio Lead Management & Analytics Dashboard
│   │   ├── common/            # Shared UI widgets (WhatsApp, Buttons, Sliders)
│   │   ├── home/              # Hero, Services, Featured, Before/After sections
│   │   ├── layout/            # Navbar, Sticky Header & Dynamic Footer
│   │   └── modals/            # Project Case Study & Lead Qualification Modals
│   ├── data/                  # Typed project portfolios, testimonials, and studio info
│   ├── services/              # Lead capture, Google Apps Script API & Security services
│   ├── types.ts               # Core TypeScript definitions & interfaces
│   ├── App.tsx                # Application root with dynamic routing & state
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles & Tailwind configuration
├── scripts/
│   └── package-zip.cjs        # Automated POSIX-compliant build packaging script
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** and **npm** installed on your system.

### 2. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/ARI-23o/Interior_Design.git
cd Interior_Design
npm install
```

### 3. Local Development
Launch the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement.

### 4. Production Build
Compile and bundle the project for production:
```bash
npm run build
```
The optimized output will be generated in the `dist/` directory.

### 5. Automated Hostinger Package
To generate a production-ready `.zip` archive formatted with standard POSIX directory separators for Linux / Hostinger:
```bash
npm run package
```
This produces `sowakaahdesigns_hostinger_build.zip` ready for instant upload.

---

## 🌐 Deployment Instructions

### Hostinger / cPanel (Apache)
1. Run `npm run build && npm run package`.
2. Open **Hostinger File Manager** and navigate to `public_html`.
3. Upload `sowakaahdesigns_hostinger_build.zip` and extract directly into `public_html`.
4. Ensure `.htaccess` is present in the root directory to handle client-side routing.

---

## 👨‍💻 Author & Credits

- **Designed & Developed by**: [Makdeveloper](https://makdeveloper.co.in/)
- **Client**: SOWAKAAH™ Interior Design Studio

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — see the LICENSE file for details.
