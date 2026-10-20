import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) return <NotFound />

  return (
    <article className="py-12 md:py-20">
      <div className="container-mag max-w-3xl">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-charcoal"
        >
          <ArrowLeft size={15} /> 返回项目列表
        </Link>

        <Reveal>
          <p className="eyebrow mt-10">/{project.no}</p>
          <h1 className="mt-4 font-cn-serif text-3xl md:text-4xl">{project.title}</h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.categories.map((c) => (
              <span key={c} className="eyebrow !text-sage-deep">{c}</span>
            ))}
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-charcoal/85">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-card border border-line">
            <img
              src={project.cover}
              alt={`${project.title} 封面图`}
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="mt-12 space-y-10">
          {project.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 40}>
              <section>
                <h2 className="flex items-center gap-3 font-cn-serif text-xl text-charcoal">
                  <span className="font-display text-sm text-sage-deep">0{i + 1}</span>
                  {s.heading}
                </h2>
                <p className="mt-3 pl-8 text-[15px] leading-loose text-charcoal/85">
                  {s.body}
                </p>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <Link to="/work" className="link-underline text-sm text-sage-deep">
            ← 查看其他项目
          </Link>
        </div>
      </div>
    </article>
  )
}
