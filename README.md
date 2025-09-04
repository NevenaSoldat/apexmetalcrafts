# Apex Metal Crafts Website

A modern, responsive website for Apex Metal Crafts built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🏠 Homepage with hero section, about, services, and contact
- 🖼️ Gallery page showcasing metalwork projects
- 🔧 Dedicated services page with detailed offerings
- 📖 Comprehensive about page with company story
- 📞 Contact page with form and business information
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM
- **Icons**: Emoji-based for simplicity

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd apexmetalcrafts
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Deployment

This app can be easily deployed to several free platforms:

### Option 1: Netlify (Recommended - Easiest)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repo
   - Netlify auto-detects Vite settings
   - Click "Deploy site"
   - Your site will be live in minutes!

### Option 2: Vercel

1. Push to GitHub (same as above)
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Vercel auto-configures everything
5. Deploy!

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/apexmetalcrafts"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.tsx   # Main navigation
│   ├── Hero.tsx        # Homepage hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services grid
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── AboutPage.tsx   # About page
│   ├── ServicesPage.tsx # Services page
│   ├── Gallery.tsx     # Gallery page
│   └── ContactPage.tsx # Contact page
├── App.tsx             # Main app with routing
└── main.tsx           # Entry point
```

## Customization

- **Colors**: Edit Tailwind classes or the orange theme in components
- **Content**: Update text content in each component
- **Images**: Replace Unsplash URLs with your actual project images
- **Contact Info**: Update contact details in Contact.tsx and ContactPage.tsx

## Performance

- ⚡ Vite for fast development and building
- 📦 Code splitting with React Router
- 🖼️ Optimized images from Unsplash
- 🎨 Efficient CSS with Tailwind

---

## Original Vite Template Info

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
