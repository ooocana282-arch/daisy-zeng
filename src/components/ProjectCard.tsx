import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/work/${project.id}`}
      className={`group flex flex-col overflow-hidden rounded-card border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.cover}
          alt={`${project.title} 封面图`}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
            project.featured ? 'aspect-[16/8]' : 'aspect-[4/3]'
          }`}
        />
        <span className="absolute left-4 top-4 font-display text-sm text-ivory/90">
          /{project.no}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <span key={c} className="eyebrow !text-[10px] !text-sage-deep">
              {c}
            </span>
          ))}
        </div>
        <h3 className="font-cn-serif text-xl text-charcoal">{project.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm text-sage-deep">
          查看详情
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
