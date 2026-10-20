import profileData from '../../content/profile.json'

// 类型定义
export interface Profile {
  nameEn: string
  nameCn: string
  nickname: string
  university: string
  major: string
  graduation: string
  taglineEn: string
  taglineCn: string
  keywords: string[]
  email: string
  linkedin: string
  phone: string
}

// 从 content/profile.json 读取（可通过 Decap CMS 编辑）
export const profile = profileData as Profile
