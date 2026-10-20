import { Mail, Linkedin, Phone, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const placeholder = (v: string) =>
  v.trim() === '' ? (
    <span className="rounded border border-dashed border-sand px-2 py-0.5 text-xs text-sand">
      待配置
    </span>
  ) : (
    v
  )

export default function Contact() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-mag max-w-2xl text-center">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Thanks for being here." align="center" />
          <p className="mx-auto mt-8 max-w-lg text-[15px] leading-relaxed text-muted">
            这里记录着我走过的路，也留着还没找到答案的问题。
            <br />
            如果你对我的经历或某个项目感兴趣，欢迎与我交流。
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 space-y-4 rounded-card border border-line bg-paper p-8 text-left md:p-10">
            <div className="flex items-center gap-4">
              <span className="font-display text-lg text-sage-deep">Name</span>
              <span className="text-charcoal">{profile.nameEn} · {profile.nameCn}</span>
            </div>
            <div className="hairline" />
            <div className="flex items-center gap-4">
              <MapPin size={16} className="text-sage-deep" />
              <span className="text-charcoal">{profile.university} · Class of 2027</span>
            </div>
            <div className="hairline" />
            <div className="flex items-center gap-4">
              <Phone size={16} className="text-sage-deep" />
              <span className="text-charcoal">{profile.phone}</span>
            </div>
            <div className="hairline" />
            <div className="flex items-center gap-4">
              <Mail size={16} className="text-sage-deep" />
              {profile.email ? (
                <a href={`mailto:${profile.email}`} className="link-underline text-charcoal">
                  {profile.email}
                </a>
              ) : (
                <span className="text-muted">{placeholder(profile.email)}</span>
              )}
            </div>
            <div className="hairline" />
            <div className="flex items-center gap-4">
              <Linkedin size={16} className="text-sage-deep" />
              {profile.linkedin ? (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-charcoal"
                >
                  LinkedIn / 公开主页
                </a>
              ) : (
                <span className="text-muted">{placeholder(profile.linkedin)}</span>
              )}
            </div>
          </div>
        </Reveal>

        <p className="mt-10 text-xs text-muted">
          在 <code className="rounded bg-ivory-deep px-1.5 py-0.5">src/data/profile.ts</code> 中填入邮箱与社交链接。
        </p>
      </div>
    </section>
  )
}
