# Photo Gallery

A modern, responsive photo gallery built with React, TypeScript, and Vite. Browse images from [Lorem Picsum](https://picsum.photos/), search by photographer name, and save your favorites locally.

## Features

- **Browse Photos**: View a curated collection of images fetched from the Picsum Photos API
- **Search Functionality**: Filter photos by photographer/author name
- **Favorites**: Mark photos as favorites with a heart icon, persisted in localStorage
- **Responsive Design**: Optimized grid layout that adapts across mobile, tablet, and desktop devices
- **Clean UI**: Built with Tailwind CSS for a modern, polished look

## Tech Stack

- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [React Router](https://reactrouter.com/) - Client-side routing
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [Axios](https://axios-http.com/) - HTTP client
- [Lucide React](https://lucide.dev/) - Icon library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd whatever
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

Create a production build:
```bash
npm run build
```

The built files will be output to the `dist/` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Gallary.tsx # Photo grid display
│   ├── ImageCard.tsx
│   ├── Loader.tsx
│   └── Navbar.tsx  # Navigation and search
├── hooks/          # Custom React hooks
│   ├── useFavorites.ts    # Favorites state management with localStorage
│   └── useFetchPhotos.ts  # Photo fetching logic
├── pages/          # Page components
│   └── HomePage.tsx
├── services/       # API services
│   └── FetchImage.ts      # Picsum API integration
├── App.tsx         # App routing configuration
└── main.tsx        # Application entry point
```

## API

This project uses the [Picsum Photos API](https://picsum.photos/) to fetch placeholder images. Photos are fetched from `https://picsum.photos/v2/list?limit=30`.
