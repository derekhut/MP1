export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Nancy Ge'
export const headline = 'Grade 11 Student at Shanghai Soong Ching Ling School.'
export const introduction =
  "Hi! I'm Nancy Ge, a Grade 11 student at Shanghai Soong Ching Ling School. I'm passionate about computer science and building things on the web."
export const email = ''
export const githubUsername = ''

// about page
export const aboutMeHeadline = 'About Me'
export const aboutParagraphs = [
  "Hi! I'm Nancy Ge, a Grade 11 student at Shanghai Soong Ching Ling School (上海宋庆龄学校).",
  "I'm interested in computer science, web development, and exploring how technology can solve real-world problems.",
  'This portfolio showcases my projects, learning journey, and the things I care about.',
]

// blog
export const blogHeadLine = "What I've been thinking about."
export const blogIntro =
  "Thoughts on programming, school projects, and things I'm learning along the way."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = []

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
