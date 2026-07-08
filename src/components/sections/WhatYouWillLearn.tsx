import { CheckCircle2 } from "lucide-react"
import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardContent } from "../ui/card"

export function WhatYouWillLearn() {
  const discoveries = [
    "Why some brands become unforgettable while others disappear after one scroll.",
    "The psychological reason people trust certain businesses almost instantly.",
    "Why creating more content often doesn't create more impact.",
    "The communication mistakes that silently weaken your brand.",
    "How successful brands build trust long before they make an offer.",
    "A practical way to think about communication that you can apply to every post, campaign, presentation, or sales conversation."
  ]

  return (
    <Section className="bg-[var(--color-background)] py-20" id="discover">
      <Container>
        <FadeIn className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            What You'll Discover
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)] mb-4">
            By the end of this session, you'll look at marketing completely differently.
          </p>
          <p className="text-xl text-[var(--color-muted-foreground)]">
            You'll discover:
          </p>
        </FadeIn>

        <StaggerReveal className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {discoveries.map((item, i) => (
            <StaggerItem key={i}>
              <Card className="h-full border border-[var(--color-border)]/50 bg-white group hover:shadow-premium-hover transition-all duration-500 overflow-hidden relative">
                <CardContent className="p-8 flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-[var(--color-primary)] shrink-0 mt-1" />
                  <p className="text-lg text-[var(--color-foreground)] leading-relaxed">
                    {item}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  )
}
