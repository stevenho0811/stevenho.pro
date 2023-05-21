import type { SocialObjects } from './types'

const website = import.meta.env.DEV
  ? 'http://localhost:3000'
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
    active: true,
    href: 'mailto:hi@stevenho.pro',
    linkTitle: `Send an email to ${SITE.author}`,
    name: 'Mail',
  },
  {
    active: true,
    href: 'https://github.com/stevenho0811',
    linkTitle: ` ${SITE.author} on Github`,
    name: 'Github',
  },
  {
    active: true,
    href: 'https://twitter.com/stevenho0811',
    linkTitle: `${SITE.author} on Twitter`,
    name: 'Twitter',
  },
  {
    active: true,
    href: 'https://www.instagram.com/stevenho0811/',
    linkTitle: `${SITE.author} on Instagram`,
    name: 'Instagram',
  },
  {
    active: true,
    href: 'https://t.me/stevenho0811',
    linkTitle: `${SITE.author} on Telegram`,
    name: 'Telegram',
  },
  {
    active: true,
    href: 'https://mstdn.social/@stevenho0811',
    linkTitle: `${SITE.author} on Mastodon`,
    name: 'Mastodon',
  },
]

export const LOCALE = ['zh-TW']
