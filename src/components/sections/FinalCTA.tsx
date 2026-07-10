import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Button } from "../ui/button"
import Link from "next/link"
import { Ticket } from "lucide-react"

export function FinalCTA() {
  return (
    <Section className="bg-[var(--color-foreground)] text-white overflow-hidden relative" dark>
      {/* Blend gradient from previous section */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-white to-transparent opacity-20 pointer-events-none" />
      
      {/* Premium background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerReveal>
            <StaggerItem>
              <h2 className="h2 mb-4 leading-tight text-white">
                Your Audience Already Sees Content All Day.
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="body-large text-white/70 mb-4 font-medium">
                The question is...
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <p className="h2 text-[var(--color-primary)] mb-16">
                Will they remember yours?
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <p className="body-large font-bold mb-2">
                Join The Psychology Behind Writing Masterclass
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <p className="body-large font-bold text-[var(--color-primary)] mb-10">
                Only ₹99
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="flex justify-center">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full text-lg shadow-[var(--shadow-glow)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden flex items-center justify-center gap-2">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    <Ticket className="w-5 h-5 shrink-0" />
                    Reserve Your Seat for Just ₹99
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
