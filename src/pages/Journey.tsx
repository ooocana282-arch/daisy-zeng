import { journey } from '../data/journey'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'

export default function Journey() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-mag">
        <Reveal>
          <SectionHeading eyebrow="Journey" title="人生关键节点" />
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            每一段经历都在塑造我看待问题的方式。以下是到目前为止对我影响较深的几个阶段。
          </p>
        </Reveal>

        <div className="mt-16 space-y-12">
          {journey.map((node, i) => (
            <Reveal key={node.id} delay={i * 60}>
              <TimelineItem node={node} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
