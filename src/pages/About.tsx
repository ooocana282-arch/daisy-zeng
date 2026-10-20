import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const blocks = [
  {
    no: '01',
    title: '一个仍在建立自己的人',
    body: '我在不同的学习与工作场景中尝试理解世界：从学术研究中的问题分析，到商业实践中的具体执行，再到对个人选择与成长的持续思考。\n\n我还在寻找适合自己的方向，但希望不论身处什么环境，都能保有独立判断的能力，以及对自己选择负责的态度。',
  },
  {
    no: '02',
    title: '认真，也在学习更主动',
    body: '我重视细节、责任与任务的完整交付。面对复杂的事情，我倾向于先梳理信息、厘清问题，再寻找可执行的解决方法。\n\n我也在持续练习另一种能力：不只把分内的事做好，也更主动地沟通、提出问题，并推动事情向前。',
  },
  {
    no: '03',
    title: '独立、行动与长期成长',
    body: '我希望拥有独立做出选择的能力，也希望自己的工作能够带来实际的积累与价值。\n\n对我而言，成长不仅意味着获得新的经历，也意味着逐渐看清自己的偏好、局限与责任，并学会用行动代替反复犹豫。',
  },
]

export default function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-mag max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="About" title="关于我" />
        </Reveal>

        <div className="mt-16 space-y-20">
          {blocks.map((b, i) => (
            <Reveal key={b.no} delay={i * 80}>
              <article>
                <p className="eyebrow">Section {b.no}</p>
                <h2 className="mt-3 font-cn-serif text-2xl md:text-3xl">{b.title}</h2>
                <div className="mt-5 space-y-4 text-[15px] leading-loose text-charcoal/85">
                  {b.body.split('\n\n').map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 border-t border-line pt-16 text-center">
            <p className="font-display text-3xl italic text-charcoal md:text-5xl">
              “I am still becoming.”
            </p>
            <p className="mt-5 text-sm text-muted">
              我还在成长，也还在形成自己的答案。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
