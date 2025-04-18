/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  useTabs: true,
  tabWidth: 2,
  trailingComma: "none",
  singleQuote: true,
  bracketSameLine: true,
  htmlWhitespaceSensitivity: "ignore",
  semi: true,
  arrowParens: "avoid",
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  // singleAttributePerLine: true,
  // cssEnable: ["css", "less", "sass"],
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-css-order",
    "prettier-plugin-astro-organize-imports",
  ],
  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
    {
      files: ["*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
  ],
};
