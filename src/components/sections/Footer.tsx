import { Container } from "../layout/Layout"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-white/60 py-12 border-t border-white/10">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-2xl font-bold tracking-tight text-white mb-2">Puneet.</div>
            <p className="text-sm">Mastering the psychology of communication.</p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end text-sm">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="mailto:hello@puneetsaluja.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© {new Date().getFullYear()} Puneet Kaur Saluja. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
