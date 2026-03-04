# Portfolio Website

A modern, responsive portfolio website built with React and Vite that automatically fetches and displays your GitHub repositories.

## Features

- **Auto-fetch GitHub repos** - Displays your latest projects from GitHub automatically
- **Responsive design** - Looks great on desktop, tablet, and mobile
- **Modern UI** - Clean, minimal design with smooth animations
- **Contact form** - Integrated with Formspree for easy form handling
- **Smooth scrolling** - Single-page navigation with smooth scroll

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A GitHub account

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser

## Customization

### Update Your Information

Edit the following files to customize the portfolio:

1. **`src/App.jsx`** - Change `GITHUB_USERNAME` to your GitHub username
2. **`src/components/Hero.jsx`** - Update your name, title, and social links
3. **`src/components/About.jsx`** - Write your bio
4. **`src/components/Skills.jsx`** - Add/modify your skills (or let it auto-detect from GitHub)
5. **`src/components/Experience.jsx`** - Add your work experience
6. **`src/components/Contact.jsx`** - Update email and social links
7. **`src/components/Footer.jsx`** - Update footer links
8. **`index.html`** - Update the page title and meta description

### Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To enable it:

1. Create a free account at https://formspree.io
2. Create a new form
3. Replace `YOUR_FORM_ID` in `src/components/Contact.jsx` with your form ID

## Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up/log in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings - just click "Deploy"
6. Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run the deploy command:
   ```bash
   vercel
   ```

3. Follow the prompts to deploy

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool
- **CSS** - Styling (no external CSS framework)
- **GitHub API** - Fetch repositories

## License

MIT
