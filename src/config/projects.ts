// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and extracurricular achievements."

export const awards: Array<ActivityItemType> = []

// Research & Projects
export const projectHeadLine = "Projects"
export const projectIntro = "School projects and personal work I'm proud of."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Personal Portfolio Website',
    description: 'This website — built with Next.js and Tailwind CSS as part of AI Camp.',
    link: { href: '#', label: 'View Project' },
    tags: ['Website', 'Next.js', 'TailwindCSS', 'Portfolio']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Activities"
export const activitiesIntro = "Things I enjoy outside of class."

export const activities: Array<ActivityItemType> = []
