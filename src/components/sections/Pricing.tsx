import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function Pricing() {
  const includes = [
    "Live Interactive Session",
    "Practical Frameworks",
    "Real Brand Case Studies",
    "Actionable Communication Insights",
  ]

  return (
    <Section className="bg-[var(--color-muted)]/30 py-20" id="workshop">
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Your Investment
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="bg-white border-[var(--color-primary)]/30 shadow-premium overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[var(--color-border)]">
                  <h3 className="text-2xl font-bold mb-8 text-[var(--color-foreground)]">
                    The Psychology Behind Writing – Live Workshop
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0" />
                        <span className="font-medium text-lg text-[var(--color-foreground)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-2 p-8 md:p-12 bg-[var(--color-muted)]/20 flex flex-col justify-center items-center text-center">
                  <p className="text-xl font-bold uppercase text-[var(--color-muted-foreground)] mb-2">Today:</p>
                  <div className="flex items-start justify-center gap-1 mb-8">
                    <span className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-primary-hover)]">Only ₹99</span>
                  </div>
                  
                  <p className="text-lg text-[var(--color-muted-foreground)] mb-8 font-medium">
                    A small investment for an idea that can change the way your audience remembers your brand.
                  </p>

                  <Button asChild size="lg" className="w-full h-14 text-lg mb-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <Link href="/register">👉 Join Now at ₹99</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
