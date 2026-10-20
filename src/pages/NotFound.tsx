import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl italic text-sage-deep">404</p>
      <h1 className="mt-6 font-cn-serif text-2xl">页面走丢了</h1>
      <p className="mt-3 text-muted">你访问的页面不存在或已被移动。</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm text-ivory hover:bg-charcoal/90"
      >
        返回首页
      </Link>
    </section>
  )
}
