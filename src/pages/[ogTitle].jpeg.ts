import generateOgImage from '@utils/generateOgImage'
import { LRUCache } from 'lru-cache'

import type { APIRoute } from 'astro'

const options = {
  max: 500,
  maxSize: 1000,
  sizeCalculation: () => 1,
  ttl: 1000 * 60 * 60 * 24 * 10,
}
const cache = new LRUCache<string, Buffer>(options)

export const get: APIRoute = async ({ params }) => {
  const { ogTitle = '' } = params

  const cached = cache.get(ogTitle)

  if (cached) {
    return new Response(cached, {
      headers: {
        'Content-Type': 'image/jpeg;charset=utf-8',
      },
      status: 200,
    })
  } else {
    const image = await generateOgImage(ogTitle)
    cache.set(ogTitle, image)
    return new Response(image, {
      headers: {
        'Content-Type': 'image/jpeg;charset=utf-8',
      },
      status: 200,
    })
  }
}
