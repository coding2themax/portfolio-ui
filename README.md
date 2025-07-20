# Portfolio UI

A modern React TypeScript application built with Webpack and managed with pnpm.

## Features

- **React 18** with TypeScript support
- **Webpack 5** for bundling and development server
- **pnpm** for fast, efficient package management
- **ESLint** for code linting
- **CSS Loader** for styling
- Hot module replacement for development

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [pnpm](https://pnpm.io/) package manager (version 8 or higher)

> **Note**: This project uses pnpm as the package manager. The project is configured to use pnpm specifically through the `packageManager` field in package.json and `.npmrc` configuration.

## Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start the development server:**

   ```bash
   pnpm dev
   ```

   This will start the development server on `http://localhost:3000`

3. **Build for production:**
   ```bash
   pnpm build
   ```
   This creates an optimized production build in the `dist` folder

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Create production build
- `pnpm build:dev` - Create development build
- `pnpm clean` - Remove the dist folder
- `pnpm type-check` - Run TypeScript type checking
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint and fix issues automatically

## Project Structure

```
portfolio-ui/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.tsx             # Main App component
│   ├── App.css             # App styles
│   ├── index.tsx           # Application entry point
│   └── index.css           # Global styles
├── webpack.config.js       # Webpack configuration
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.js           # ESLint configuration
└── package.json           # Package configuration
```

## Development

- The development server runs on port 3000 with hot module replacement
- TypeScript files are automatically compiled
- ESLint runs to catch code quality issues
- CSS is processed and injected into the page

## Building

The build process creates optimized bundles with:

- Code splitting for better performance
- Content hashing for cache busting
- Minified JavaScript and CSS
- Source maps for debugging

## Contributing

1. Make your changes
2. Run `pnpm lint` to check for issues
3. Run `pnpm type-check` to verify TypeScript
4. Run `pnpm build` to ensure everything builds correctly
