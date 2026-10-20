import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="container-mag flex flex-col items-center justify-between gap-4 py-10 text-center sm:flex-row sm:text-left">
        <p className="font-display text-lg text-charcoal">{profile.nameEn}</p>
        <p className="text-sm text-muted">{profile.taglineEn}</p>
        <p className="text-sm text-muted">© {new Date().getFullYear()} {profile.nameEn}</p>
      </div>
      <div className="border-t border-line">
        <div className="container-mag flex justify-center gap-6 py-4">
          <Link to="/" className="link-underline text-xs text-muted hover:text-charcoal">Home</Link>
          <Link to="/about" className="link-underline text-xs text-muted hover:text-charcoal">About</Link>
          <Link to="/journey" className="link-underline text-xs text-muted hover:text-charcoal">Journey</Link>
          <Link to="/work" className="link-underline text-xs text-muted hover:text-charcoal">Work</Link>
          <Link to="/notes" className="link-underline text-xs text-muted hover:text-charcoal">Notes</Link>
          <Link to="/contact" className="link-underline text-xs text-muted hover:text-charcoal">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
