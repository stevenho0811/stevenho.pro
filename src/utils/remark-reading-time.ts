import { toString } from 'mdast-util-to-string'
import getReadingTime from 'reading-time'

import type { Plugin } from 'unified'

export function remarkReadingTime(): Plugin {
  return function (tree, { data }) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    data.astro.frontmatter.minutesRead = readingTime.text
  }
}
