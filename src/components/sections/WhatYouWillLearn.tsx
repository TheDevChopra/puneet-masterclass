import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { ArrowUpRight } from "lucide-react"

export function WhatYouWillLearn() {
  const modules = [
    {
      title: "Module 1: The Attention Hook",
      desc: "Stop the scroll with psychological triggers that demand attention without resorting to clickbait.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
      title: "Module 2: Emotional Resonance",
      desc: "Connect on a deeper level by speaking directly to hidden desires.",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Module 3: Trust Architecture",
      desc: "Build unwavering credibility through strategic vulnerability and proof.",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Module 4: Cognitive Ease",
      desc: "Structure your writing so it flows effortlessly into the reader's mind.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
      title: "Module 5: The Action Nudge",
      desc: "Convert attention into tangible results with frictionless calls to action.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
      title: "Module 6: Long-term Recall",
      desc: "Embed your brand in their memory for when they're finally ready to buy.",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    },
  ]

  return (
    <Section className="bg-[var(--color-background)]" id="curriculum">
      <Container>
        <FadeIn className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Inside The Curriculum
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)]">
            A comprehensive, psychology-first framework designed for immediate implementation.
          </p>
        </FadeIn>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <StaggerItem key={mod.title} className={mod.colSpan}>
              <Card className="h-full border border-[var(--color-border)]/50 bg-white group hover:shadow-premium-hover transition-all duration-500 overflow-hidden relative">
                <CardHeader className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-bold text-[var(--color-primary-hover)] tracking-wider">0{i + 1}</span>
                    <ArrowUpRight className="w-5 h-5 text-[var(--color-muted-foreground)] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{mod.title}</CardTitle>
                  <CardDescription className="text-base text-[var(--color-muted-foreground)] leading-relaxed">
                    {mod.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  )
}
