import rss from '@astrojs/rss'
import { SITE } from '@config'
import slugify from '@utils/slugify'
import { getCollection } from 'astro:content'

const posts = await getCollection('blog', ({ data }) => !data.draft)

export const get = () =>
  rss({
    description: SITE.desc,
    items: posts.map(({ data }) => ({
      description: data.description,
      link: `posts/${slugify(data)}`,
      pubDate: new Date(data.pubDatetime),
      title: data.title,
    })),
    site: SITE.website,
    title: SITE.title,
  })
