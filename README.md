# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌙 Dark/Light theme support
- ⚡ Fast performance with Vite
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Vite project
6. Click "Deploy"

### Method 3: Using Git Integration

1. Connect your GitHub repository to Vercel
2. Every push to main branch will automatically deploy

## Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── data/               # Static data files
├── contexts/           # React contexts
└── assets/             # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is open source and available under the [MIT License](LICENSE).