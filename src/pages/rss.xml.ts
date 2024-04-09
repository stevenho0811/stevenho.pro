import rss from '@astrojs/rss'
import { SITE } from '@config'
import getSortedPosts from '@utils/getSortedPosts'
import slugify from '@utils/slugify'
import { getCollection } from 'astro:content'

const posts = await getCollection('blog', ({ data }) => !data.draft)
const sortedPosts = getSortedPosts(posts)

export const GET = () =>
  rss({
    description: SITE.desc,
    items: sortedPosts.map(({ data }) => ({
      description: data.description,
      link: `posts/${slugify(data)}`,
      pubDate: new Date(data.pubDatetime),
      title: data.title,
    })),
    site: SITE.website,
    title: SITE.title,
  })
