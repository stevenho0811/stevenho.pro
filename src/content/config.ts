import { blogSchema } from './_schemas'

import { defineCollection } from 'astro:content'

const blog = defineCollection({
  schema: blogSchema,
})

export const collections = { blog }
