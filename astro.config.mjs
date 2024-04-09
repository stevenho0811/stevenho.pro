import theme from './themes/shades-of-purple.json'

import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercelServerless from '@astrojs/vercel/serverless'
import criticalCSS from 'astro-critical-css'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'
import remarkCollapse from 'remark-collapse'
import remarkToc from 'remark-toc'

export default defineConfig({
  output: 'server',
  adapter: vercelServerless(),
  integrations: [
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    criticalCSS(),
    robotsTxt({
      sitemapBaseFileName: 'sitemap',
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [rehypeMinifyWhitespace],
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: 'Table of contents',
        },
      ],
    ],
    shikiConfig: {
      theme: theme,
      wrap: true,
    },
  },
  site: 'https://stevenho.pro/',
  vite: {
    optimizeDeps: {
      exclude: ['@napi-rs/canvas'],
    },
  },
})
