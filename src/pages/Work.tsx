import { projects } from '../data/projects'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

export default function Work() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-mag">
        <Reveal>
          <SectionHeading eyebrow="Work & Projects" title="项目与经历" />
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            这里收录我参与过的竞赛、实习与项目。点击卡片可查看结构化的详情，
            其中未核实的细节以占位字段标注，方便后续补充。
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
