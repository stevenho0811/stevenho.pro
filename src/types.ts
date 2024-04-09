export type SocialObjects = {
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
  | 'LinkedIn'
  | 'Facebook'
