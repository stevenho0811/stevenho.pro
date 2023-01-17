export type SocialObjects = {
  active: boolean
  href: string
  linkTitle: string
  name: SocialMedia
}[]

export type SocialIcons = Record<SocialMedia, string>

export type SocialMedia =
  | 'Github'
  | 'Instagram'
  | 'Mail'
  | 'Twitter'
  | 'Telegram'
  | 'Mastodon'
