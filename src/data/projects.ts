import projectsData from '../../content/projects.json'

export interface ProjectSection {
  heading: string
  body: string
}

export interface Project {
  id: string
  no: string
  title: string
  categories: string[]
  summary: string
  cover: string
  featured?: boolean
  sections: ProjectSection[]
}

// 从 content/projects.json 读取
export const projects = projectsData as Project[]
