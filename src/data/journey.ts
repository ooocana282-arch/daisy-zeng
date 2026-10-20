import journeyData from '../../content/journey.json'

export interface JourneyNode {
  id: string
  period: string
  title: string
  body: string
  tags: string[]
  related?: string[]
  projectId?: string
}

// 从 content/journey.json 读取
export const journey = journeyData as JourneyNode[]
