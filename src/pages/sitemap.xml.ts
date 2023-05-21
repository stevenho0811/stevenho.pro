import { SITE } from '@config'
import slugify from '@utils/slugify'
import { getCollection } from 'astro:content'

const posts = await getCollection('blog', ({ data }) => !data.draft)

const { website } = SITE

export const get = () => {
  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${website}/</loc></url>
  <url><loc>${website}/blog</loc></url>
  <url><loc>${website}/posts</loc></url>
  <url><loc>${website}/tags</loc></url>
  <url><loc>${website}/search</loc></url>
    ${posts
      .map(
        ({ data }) => `<url>
    <loc>${website}/posts/${slugify(data)}</loc>
  </url>`
      )
      .join('')}
  </urlset>`,
  }
}
