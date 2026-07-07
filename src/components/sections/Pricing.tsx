import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function Pricing() {
  const includes = [
    "90-Minute Live Interactive Session",
    "Real-world Case Studies Breakdown",
    "The Psychology-First Writing Framework",
    "Live Q&A with Puneet",
    "Actionable Exercises to implement immediately",
  ]

  return (
    <Section className="bg-[var(--color-muted)]/30" id="workshop">
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Reserve Your Seat
            </h2>
            <p className="text-xl text-[var(--color-muted-foreground)]">
              Everything you need to transform how you write and communicate online.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="bg-white border-[var(--color-primary)]/30 shadow-premium overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[var(--color-border)]">
                  <h3 className="text-2xl font-bold mb-2">The Psychology Behind Writing</h3>
                  <p className="text-[var(--color-muted-foreground)] mb-8">Live Online Masterclass</p>
                  
                  <div className="space-y-4 mb-8">
                    {includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[var(--color-primary-hover)]" />
                        </div>
                        <span className="font-medium text-[var(--color-foreground)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-2 p-8 md:p-12 bg-[var(--color-muted)]/20 flex flex-col justify-center items-center text-center">
                  <p className="text-sm font-bold tracking-widest uppercase text-[var(--color-muted-foreground)] mb-2">One-time payment</p>
                  <div className="flex items-start justify-center gap-1 mb-6">
                    <span className="text-3xl font-bold mt-1">₹</span>
                    <span className="text-7xl font-bold tracking-tighter">99</span>
                  </div>
                  
                  <Button asChild size="lg" className="w-full h-14 text-lg mb-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <Link href="/register">Reserve Seat Now</Link>
                  </Button>
                  
                  <p className="text-xs text-[var(--color-muted-foreground)]">
                    Secure checkout. Limited seats available for the live session.
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
