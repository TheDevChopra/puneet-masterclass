import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { X, Check } from "lucide-react"

export function WhyThisMatters() {
  const traditional = [
    "Focuses on arbitrary metrics (likes, views)",
    "Relies heavily on trending audio and formats",
    "Creates temporary transactional relationships",
    "Requires constant exhausting output",
    "Easily forgotten within 24 hours",
  ]

  const psychology = [
    "Focuses on deep emotional resonance",
    "Relies on timeless human behaviour",
    "Creates long-term brand loyalty",
    "Requires strategic, intentional input",
    "Builds permanent memory structures",
  ]

  return (
    <Section className="bg-white">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Paradigm Shift
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn direction="right" delay={0.1}>
            <Card className="h-full bg-[var(--color-muted)]/20 border-none shadow-none">
              <CardHeader className="pb-4">
                <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full w-max mb-4 uppercase tracking-wider">The Old Way</div>
                <CardTitle className="text-2xl text-[var(--color-muted-foreground)]">Traditional Content Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {traditional.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[var(--color-muted-foreground)]">
                      <X className="w-5 h-5 shrink-0 text-red-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <Card className="h-full border-[var(--color-primary)]/50 shadow-premium relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)]" />
              <CardHeader className="pb-4">
                <div className="inline-block px-3 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary-hover)] text-xs font-semibold rounded-full w-max mb-4 uppercase tracking-wider">The New Standard</div>
                <CardTitle className="text-2xl">Psychology-Based Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {psychology.map((item, i) => (
                    <li key={i} className="flex gap-3 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[var(--color-primary-hover)]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
