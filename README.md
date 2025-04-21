# Astro Template: Tailwind & DaisyUI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Version: 0.1.0

A minimal Astro starter template featuring Tailwind CSS and DaisyUI for rapid UI development.

## ✨ Key Features

- **Astro:** Fast sites, less JavaScript.
- **Tailwind CSS:** Utility-first CSS framework.
- **DaisyUI:** Tailwind CSS components.
- **MDX Support:** Markdown + JSX.
- **SEO Ready:** Automatic Sitemap & RSS generation.
- **Icons:** Astro Icon with Phosphor icon set.
- **Fonts:** Self-hosted open-source fonts via Fontsource.
- **Code Quality:** ESLint, Prettier, TypeScript (Strict).
- **Git Hooks:** Husky & Lint-Staged for pre-commit checks.
- **Performance:** Optimized Images (experimental), Prefetching.

## 🚀 Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321`

## 🎨 Customization

1.  **Favicon:** Replace `public/favicon.svg` with your icon.
2.  **Domain:** Search and replace `example.com` with your domain in:
    - `astro.config.mjs`
    - `public/robots.txt` (create if needed)
    - `public/_redirects` (if using Netlify/Cloudflare)
    - `src/consts.ts`

## 🔧 Configuration Highlights

- **TypeScript (`tsconfig.json`):** Extends Astro's strict config, includes path aliases (`@/*`).
- **Astro (`astro.config.mjs`):** Integrates Tailwind, MDX, Sitemap, Astro Icon, Playform Compress. Enables prefetching and experimental features like `responsiveImages` and `contentIntellisense`.
- **Legacy flags:** If using older content collections, enable legacy support in `astro.config.mjs`:
  ```js
  // astro.config.mjs
  export default defineConfig({
    // ... other config
    // for legacy support of old collections
    legacy: {
      collections: true
    }
  });
  ```
- **Husky & Lint-Staged (`package.json`, `.husky/`):** Enforces code formatting (Prettier) on staged files before committing.

## 📁 Project Structure

```
/
├── public/         # Static assets (favicon.svg, robots.txt)
├── src/
│   ├── components/   # Reusable UI components
│   ├── content/      # Content collections (e.g., blog posts)
│   ├── layouts/      # Page layouts
│   └── pages/        # Site pages/routes
│   └── consts.ts     # Site constants
│   └── env.d.ts      # TypeScript environment types
├── astro.config.mjs  # Astro configuration
├── package.json      # Project dependencies & scripts
└── tsconfig.json     # TypeScript configuration
```

## 🧞 Available Commands

| Command                | Action                                     |
| :--------------------- | :----------------------------------------- |
| `npm install`          | Installs dependencies                      |
| `npm run prepare`      | Installs Husky git hooks                   |
| `npm run sync`         | Syncs Astro content collections types      |
| `npm run check`        | Runs Astro type checking                   |
| `npm run dev`          | Starts local dev server (`localhost:4321`) |
| `npm run build`        | Builds the production site to `./dist/`    |
| `npm run preview`      | Previews the production build locally      |
| `npm run astro ...`    | Runs Astro CLI commands                    |
| `npm run lint`         | Runs ESLint checks                         |
| `npm run lint:fix`     | Runs ESLint checks and fixes issues        |
| `npm run format`       | Formats code with Prettier                 |
| `npm run format:check` | Checks code formatting with Prettier       |

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)

## 📄 License

MIT License (see LICENSE file if included).
