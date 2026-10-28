import { defineConfig } from 'astro/config';

// BASE_PATH is set by the GitHub Pages workflow (site lives at /yangkhil.com/); local builds use /
export default defineConfig({ output: 'static', base: process.env.BASE_PATH || '/' });
