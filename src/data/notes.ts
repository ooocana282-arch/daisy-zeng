import notesSettingsData from '../../content/notes-settings.json'
import notesData from '../../content/notes.json'

export interface NoteCategory {
  id: string
  title: string
  intro: string
}

export interface Note {
  id: string
  categoryId: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  cover?: string
}

export const noteCategories = (notesSettingsData as { categories: NoteCategory[] }).categories
export const formingAnswers = (notesSettingsData as { formingAnswers: string[] }).formingAnswers
export const notes = notesData as Note[]
