import { useMemo, useState } from 'react'
import { BookOpen, Camera, BookMarked, CalendarDays } from 'lucide-react'
import { noteCategories, formingAnswers, notes } from '../data/notes'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import NoteCard from '../components/NoteCard'

const iconMap: Record<string, typeof BookOpen> = {
  personal: BookOpen,
  frames: Camera,
  reading: BookMarked,
  review: CalendarDays,
}

export default function Notes() {
  const [active, setActive] = useState<string>('all')

  const filtered = useMemo(() => {
    if (active === 'all') return notes
    return notes.filter((n) => n.categoryId === active)
  }, [active])

  return (
    <section className="py-16 md:py-24">
      <div className="container-mag">
        <Reveal>
          <SectionHeading eyebrow="Notes & Life" title="笔记与生活" />
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            职业经历之外的个人空间。这里有我对工作与成长的思考，也有生活里值得收藏的片段。
          </p>
        </Reveal>

        {/* 分类入口 */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {noteCategories.map((c, i) => {
            const Icon = iconMap[c.id] ?? BookOpen
            return (
              <Reveal key={c.id} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setActive(active === c.id ? 'all' : c.id)}
                  className={`group h-full w-full rounded-card border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                    active === c.id
                      ? 'border-sage bg-ivory-deep'
                      : 'border-line bg-paper hover:shadow-md'
                  }`}
                >
                  <Icon size={22} className="text-sage-deep" />
                  <h3 className="mt-4 font-cn-serif text-lg">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.intro}</p>
                </button>
              </Reveal>
            )
          })}
        </div>

        {/* 文章列表 */}
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <p className="eyebrow">
              {active === 'all' ? 'All Notes' : noteCategories.find((c) => c.id === active)?.title}
            </p>
            {active !== 'all' && (
              <button
                type="button"
                onClick={() => setActive('all')}
                className="text-sm text-sage-deep link-underline"
              >
                显示全部
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((n, i) => (
                <Reveal key={n.id} delay={i * 50}>
                  <NoteCard note={n} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-8 flex flex-col items-center justify-center rounded-card border border-dashed border-sand bg-ivory-deep/40 py-20 text-center">
                <span className="font-display text-5xl italic text-sand">·</span>
                <p className="mt-4 text-sm text-muted">
                  这里还没有文章。内容正在慢慢积累中。
                </p>
                <p className="mt-1 text-xs text-muted">
                  在 <code className="rounded bg-ivory px-1.5 py-0.5">src/data/notes.ts</code> 中追加即可发布。
                </p>
              </div>
            </Reveal>
          )}
        </div>

        {/* 正在形成的答案 */}
        <div className="mt-24">
          <Reveal>
            <div className="rounded-card border border-line bg-paper p-8 md:p-12">
              <p className="eyebrow">Featured Column</p>
              <h2 className="mt-3 font-cn-serif text-2xl md:text-3xl">《正在形成的答案》</h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                有些问题不需要马上回答。我想记录自己如何思考它们，以及这些答案如何随着经历而改变。
              </p>
              <ul className="mt-8 space-y-4">
                {formingAnswers.map((q, i) => (
                  <li
                    key={q}
                    className="flex items-start gap-4 border-t border-line pt-4 first:border-0 first:pt-0"
                  >
                    <span className="font-display text-sm text-sage-deep">0{i + 1}</span>
                    <span className="text-[15px] text-charcoal/85">{q}</span>
                    <span className="ml-auto rounded-full border border-line px-2 py-0.5 text-[10px] tracking-wider text-muted">
                      DRAFT
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
