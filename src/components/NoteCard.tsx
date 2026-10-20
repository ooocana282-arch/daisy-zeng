import type { Note } from '../data/notes'

export default function NoteCard({ note }: { note: Note }) {
  return (
    <article className="group rounded-card border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="eyebrow mb-3">{note.date}</p>
      <h3 className="font-cn-serif text-lg text-charcoal">{note.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{note.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {note.tags.map((t) => (
          <span key={t} className="text-[11px] text-sage-deep">#{t}</span>
        ))}
      </div>
    </article>
  )
}
