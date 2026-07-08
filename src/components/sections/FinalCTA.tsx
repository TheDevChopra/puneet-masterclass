import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Button } from "../ui/button"
import Link from "next/link"

export function FinalCTA() {
  return (
    <Section className="bg-[var(--color-foreground)] text-white overflow-hidden relative py-32 md:py-48" dark>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Premium background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerReveal>
            <StaggerItem>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
                Your Audience Already Sees Content All Day.
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-2xl md:text-3xl text-white/70 mb-4 font-medium">
                The question is...
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-16">
                Will they remember yours?
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-xl md:text-2xl font-bold mb-2">
                Join The Psychology Behind Writing Masterclass
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-10">
                Only ₹99
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-16 px-12 text-lg font-bold bg-[var(--color-primary)] text-[var(--color-foreground)] hover:bg-[var(--color-primary-hover)] shadow-[0_0_40px_-10px_rgba(255,199,44,0.5)] transition-all hover:-translate-y-1">
                    Reserve Your Seat Today
                  </Button>
                </Link>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </Container>
    </Section>
  )
}
