import { remarkReadingTime } from './src/utils/remark-reading-time'
import theme from './themes/shades-of-purple.json'

import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import prefetch from '@astrojs/prefetch'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import compress from 'astro-compress'
import criticalCSS from 'astro-critical-css'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'
import remarkCollapse from 'remark-collapse'
import remarkToc from 'remark-toc'

export default defineConfig({
  adapter: vercel(),
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
    compress(),
    prefetch(),
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
      remarkReadingTime,
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
  output: 'server',
  site: 'https://stevenho.pro/',
  vite: {
    optimizeDeps: {
      exclude: ['@napi-rs/canvas'],
    },
  },
})
