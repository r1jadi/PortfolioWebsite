# Rijad Halili — Portfolio Website

A modern, responsive personal portfolio built with **React**, **Vite**, and **TailwindCSS**.  
Features dark/light mode, smooth animations, scroll spy navigation, and a contact form.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss)

---

## ✨ Features

- **Dark / Light Mode** with persistent preference
- **Typing Animation** hero with dynamic titles
- **Scroll Spy** navbar with smooth scrolling
- **Project Cards** with tech stack tags and links
- **Timeline Experience** section
- **Animated Skill Bars** with categorized skills
- **Contact Form** via Formspree
- **Fully Responsive** mobile-first design
- **SEO Optimized** with meta tags and Open Graph
- **Framer Motion** scroll-triggered animations

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation with scroll spy
│   ├── Hero.jsx          # Hero section with typing effect
│   ├── About.jsx         # About me & education
│   ├── Projects.jsx      # Project cards grid
│   ├── Experience.jsx    # Work timeline
│   ├── Skills.jsx        # Categorized skills
│   ├── Contact.jsx       # Contact form (Formspree)
│   ├── Footer.jsx        # Footer with links
│   └── ScrollToTop.jsx   # Scroll-to-top button
├── context/
│   └── DarkModeContext.jsx
├── data/
│   └── portfolioData.js  # ← All your CV data here
├── hooks/
│   └── useSectionInView.js
├── utils/
│   └── scrollUtils.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📝 Customization

All personal data is in **`src/data/portfolioData.js`**.  
Edit this single file to update your:

- Name, title, socials
- About / bio text
- Education
- Work experience
- Projects
- Skills & levels
- Formspree form ID

---

## 📬 Contact Form Setup

1. Go to [formspree.io](https://formspree.io/) and create a free account
2. Create a new form and copy the form ID (e.g., `xrbgnkwd`)
3. Update `contactData.formspreeId` in `src/data/portfolioData.js`

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"New Project"** → Import your repository
4. Framework Preset: **Vite**
5. Click **Deploy** — done!

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub
3. Click **"Add new site"** → **"Import from Git"**
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click **Deploy**

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to gh-pages branch
npx gh-pages -d dist
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite 6 | Build tool |
| TailwindCSS 3 | Styling |
| Framer Motion | Animations |
| React Icons | Icon library |
| Formspree | Contact form backend |

---

## 📄 License

MIT © Rijad Halili
