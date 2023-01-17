import Datetime from './Datetime'

import type { BlogFrontmatter } from '@content/_schemas'

export interface Props {
  frontmatter: BlogFrontmatter
  href?: string
  secHeading?: boolean
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description, lang } = frontmatter
  const Heading = secHeading ? 'h2' : 'h3'
  return (
    <li className="my-6">
      <a
        href={href}
        className="flex items-center space-x-2 text-lg font-bold text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {
          <>
            <Heading className="text-lg font-medium decoration-dashed hover:underline">
              {title}
            </Heading>
            <span className="item-center flex w-6 justify-center rounded border border-skin-accent text-xs font-bold opacity-80">
              {lang || 'en'}
            </span>
          </>
        }
      </a>
      <Datetime datetime={pubDatetime} />
      <p>{description}</p>
    </li>
  )
}
