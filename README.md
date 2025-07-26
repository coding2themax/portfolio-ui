# Portfolio UI

A modern, responsive portfolio website built with React TypeScript, Webpack, and pnpm. Features a comprehensive layout with sections for showcasing skills, experience, projects, and contact information.

## Features

- **React 18** with TypeScript support
- **Webpack 5** for bundling and development server
- **pnpm** for fast, efficient package management
- **ESLint** for code linting
- **CSS Loader** for styling
- Hot module replacement for development
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Modern Portfolio Layout** with multiple sections:
  - Hero/Header section with personal information
  - About section
  - Skills showcase with categorized technologies
  - Experience timeline
  - Projects grid with links and technologies
  - Contact section
  - Professional footer

## Portfolio Components

### Portfolio Component

The main `Portfolio` component (`src/components/Portfolio.tsx`) provides a complete portfolio layout with the following props:

```typescript
interface PortfolioProps {
  name: string; // Your full name
  title: string; // Your professional title
  email: string; // Contact email
  phone?: string; // Phone number (optional)
  location?: string; // Your location (optional)
  github?: string; // GitHub profile URL (optional)
  linkedin?: string; // LinkedIn profile URL (optional)
  website?: string; // Personal website URL (optional)
}
```

### Customization

The portfolio includes sample data for projects, skills, and experience that can be easily customized by editing the arrays in the Portfolio component:

- `projects` - Array of your projects with titles, descriptions, technologies, and links
- `skills` - Categorized list of your technical skills
- `experiences` - Your work experience with company details and descriptions

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
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── App.tsx             # Main App component
│   │   ├── App.css             # App styles
│   │   ├── Portfolio.tsx       # Portfolio layout component
│   │   └── Portfolio.css       # Portfolio component styles
│   ├── assets/
│   │   └── images/             # Image assets
│   ├── index.tsx               # Application entry point
│   └── index.css               # Global styles
├── webpack.config.js           # Webpack configuration
├── tsconfig.json              # TypeScript configuration
├── .eslintrc.js               # ESLint configuration
└── package.json               # Package configuration
```

## Usage

To customize the portfolio with your information:

1. Edit the props passed to the `Portfolio` component in `src/components/App.tsx`
2. Update the sample data arrays in `src/components/Portfolio.tsx`:
   - `projects` - Your projects and work samples
   - `skills` - Your technical skills organized by category
   - `experiences` - Your work history and achievements
3. Replace the sample images in `src/assets/images/` with your own
4. Customize the styling in `src/components/Portfolio.css` to match your personal brand

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
