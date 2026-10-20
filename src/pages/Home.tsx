import { Link } from 'react-router-dom'
import { ArrowRight, Award, Briefcase, BarChart3 } from 'lucide-react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

const selected = [
  {
    icon: Award,
    title: 'National Student Data Modeling Competition',
    sub: 'First Prize',
    to: '/work/data-modeling',
  },
  {
    icon: Briefcase,
    title: 'Business Practice',
    sub: 'JD.com',
    to: '/work/jd-merchandising',
  },
  {
    icon: BarChart3,
    title: 'Operations Practice',
    sub: 'ByteDance',
    to: '/work/bytedance-sop',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-mag grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{profile.taglineEn}</p>
            <h1 className="mt-5 font-cn-serif text-4xl leading-tight md:text-6xl">
              在实践中探索，
              <br />
              <span className="text-sage-deep">在思考中成长。</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
              你好，我是曾梓娟，也可以叫我 Daisy。
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/85">
              目前就读于吉林大学国家安全学专业，预计于 2027 年毕业。
              我的经历横跨学术研究、数据建模与商业实践。从带队参加全国大学生数据建模竞赛，
              到在京东接触电商采销业务，再到在字节跳动参与运营支持与流程梳理，
              我一直在尝试理解问题、寻找解决方案，并把想法落实到行动中。
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/85">
              我认真对待每一项任务，也在不断学习如何更主动地沟通、协作和推动事情向前发展。
              这里记录我做过的事、思考过的问题，以及一路走来的变化。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {profile.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-line px-4 py-1.5 text-xs tracking-widest text-muted"
                >
                  {k}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/journey"
                className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-sage-deep"
              >
                探索我的经历 <ArrowRight size={16} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
              >
                查看项目案例
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-card">
              <img
                src="/images/hero.jpg"
                alt="自然光下的书桌与笔记本"
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-xs italic text-muted">
              “I am still becoming.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* SELECTED EXPERIENCES */}
      <section className="py-20">
        <div className="container-mag">
          <Reveal>
            <SectionHeading eyebrow="Selected Experiences" title="代表性经历" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {selected.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link
                  to={s.to}
                  className="group flex h-full flex-col rounded-card border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <s.icon size={26} className="text-sage-deep" />
                  <h3 className="mt-5 font-cn-serif text-lg text-charcoal">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.sub}</p>
                  <span className="mt-auto pt-6 text-sm text-sage-deep opacity-0 transition-opacity group-hover:opacity-100">
                    了解更多 →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20">
        <div className="container-mag">
          <Reveal>
            <div className="flex items-end justify-between">
              <SectionHeading eyebrow="Work & Projects" title="项目与经历" />
              <Link to="/work" className="link-underline hidden text-sm text-sage-deep sm:inline">
                查看全部 →
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-mag">
          <Reveal>
            <div className="rounded-card bg-ivory-deep px-8 py-16 text-center md:px-16">
              <h2 className="font-display text-3xl italic text-charcoal md:text-5xl">
                Thanks for being here.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-muted">
                这里记录着我走过的路，也留着还没找到答案的问题。
                <br />
                如果你对我的经历或某个项目感兴趣，欢迎与我交流。
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3 text-sm text-ivory hover:bg-charcoal/90"
              >
                联系我 <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
