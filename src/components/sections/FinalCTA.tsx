import { Container, Section } from "../layout/Layout"
import { FadeIn } from "../animations/Reveal"
import { Button } from "../ui/button"
import Link from "next/link"

export function FinalCTA() {
  return (
    <Section className="bg-[var(--color-foreground)] text-white overflow-hidden relative py-32 md:py-48" dark>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Premium background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none" />
      
      <Container className="relative z-10">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Your audience already sees content all day.
            <br />
            <span className="text-white/50 block mt-4 text-3xl md:text-5xl lg:text-6xl">The question is...</span>
            <span className="text-[var(--color-primary)] block mt-4">Will they remember yours?</span>
          </h2>
          
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-16 px-12 text-lg font-bold bg-[var(--color-primary)] text-[var(--color-foreground)] hover:bg-[var(--color-primary-hover)] shadow-[0_0_40px_-10px_rgba(255,199,44,0.5)] transition-all hover:-translate-y-1">
                Reserve Your Seat — ₹99
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
