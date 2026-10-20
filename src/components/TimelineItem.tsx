import { Link } from 'react-router-dom'
import type { JourneyNode } from '../data/journey'

export default function TimelineItem({ node }: { node: JourneyNode }) {
  return (
    <div className="relative grid gap-6 pl-12 md:grid-cols-[140px_1fr] md:gap-12 md:pl-0">
      {/* 时间/阶段（桌面左侧） */}
      <div className="md:pt-1 md:text-right">
        <p className="font-display text-lg text-sage-deep">{node.period}</p>
      </div>

      {/* 节点圆点 */}
      <span className="absolute left-[5px] top-2 h-3 w-3 rounded-full border-2 border-sage bg-ivory md:left-[135px]" />

      {/* 事件内容 */}
      <div className="rounded-card border border-line bg-paper p-6 md:p-8">
        <h3 className="font-cn-serif text-xl text-charcoal">{node.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-charcoal/85">{node.body}</p>

        {node.related && node.related.length > 0 && (
          <ul className="mt-4 space-y-1">
            {node.related.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-sand" />
                {r}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {node.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-1 text-[11px] tracking-wide text-muted"
            >
              {t}
            </span>
          ))}
          {node.projectId && (
            <Link
              to={`/work/${node.projectId}`}
              className="ml-auto text-sm text-sage-deep link-underline"
            >
              相关项目 →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
