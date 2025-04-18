// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import playformCompress from '@playform/compress';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';
const site = 'https://example.com';

// https://astro.build/config
export default defineConfig({
    site: site, // Define site URL for generating links
    prefetch: {
      prefetchAll: true, // Prefetch all links for faster navigation
      defaultStrategy: 'viewport', // Prefetch when links enter viewport
    },
    experimental: {
      // Contains experimental features
    },
    vite: {
    plugins: [tailwindcss()], // Configure Vite with Tailwind plugin
  },
    integrations: [icon({
      include: {
        ph: ["*"] // Include all Phosphor icons
      },
    }),
		mdx({
      optimize: true, // Enable MDX optimization
    }),
    sitemap({
      filter: (page) => page !== `${site}/404`, // Exclude 404 page from sitemap
      xslURL: '/xsls/sitemap.xsl', // Custom XSL stylesheet for sitemap
      changefreq: 'weekly', // How often pages change
      priority: 0.9, // SEO priority (0.0 to 1.0)
      lastmod: new Date(), // Last modification date
    }),
    playformCompress() // Compress output for better performance
  ],
});
