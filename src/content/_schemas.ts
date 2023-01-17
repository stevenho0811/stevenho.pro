import { z } from 'astro:content'

export const blogSchema = z
  .object({
    author: z.string().optional(),
    description: z.string(),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
    lang: z.string().default('en'),
    ogImage: z.string().optional(),
    postSlug: z.string().optional(),
    pubDatetime: z.date(),
    tags: z.array(z.string()).default(['others']),
    title: z.string(),
  })
  .strict()

export type BlogFrontmatter = z.infer<typeof blogSchema>
