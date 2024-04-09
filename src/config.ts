import type { SocialObjects } from './types'

const website = import.meta.env.DEV
  ? 'http://localhost:4321'
  : 'https://stevenho.pro'

export const SITE = {
  author: 'Steven Ho',
  desc: "👋🏻 Steven Ho's Portfolio and Blog",
  ogImage: '/cover.jpg',
  postPerPage: 10,
  title: 'Steven Ho',
  website,
}

export const SOCIALS: SocialObjects = [
  {
    href: 'mailto:hi@stevenho.pro',
    linkTitle: `Send an email to ${SITE.author}`,
    name: 'Mail',
  },
  {
    href: 'https://www.linkedin.com/in/stevenho0811/',
    linkTitle: `${SITE.title} on LinkedIn`,
    name: 'LinkedIn',
  },
  {
    href: 'https://github.com/stevenho0811',
    linkTitle: ` ${SITE.author} on Github`,
    name: 'Github',
  },
  {
    href: 'https://twitter.com/stevenho0811',
    linkTitle: `${SITE.author} on Twitter`,
    name: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/stevenho0811/',
    linkTitle: `${SITE.author} on Instagram`,
    name: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/stevenho0811',
    linkTitle: `${SITE.title} on Facebook`,
    name: 'Facebook',
  },
]

export const LOCALE = ['zh-TW']
