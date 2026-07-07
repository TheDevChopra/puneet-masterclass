import { CheckCircle2 } from "lucide-react"
import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardContent } from "../ui/card"

export function Problem() {
  const checklist = [
    "Posting consistently",
    "Using AI tools",
    "Following trends",
    "Creating valuable content",
  ]

  return (
    <Section className="bg-white border-t border-[var(--color-border)]/50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              You're Doing Everything They Told You To Do...
            </h2>
            <div className="grid gap-4">
              {checklist.map((item, index) => (
                <Card key={item} className="bg-[var(--color-muted)]/30 border-none shadow-none rounded-[16px]">
                  <CardContent className="p-4 flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-muted-foreground)]" />
                    <span className="text-lg font-medium text-[var(--color-muted-foreground)] strike-through decoration-1">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>

          <StaggerReveal className="lg:pl-12">
            <StaggerItem>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-muted-foreground)] mb-4">
                People scroll.
              </h3>
            </StaggerItem>
            <StaggerItem>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-muted-foreground)] mb-12">
                People forget.
              </h3>
            </StaggerItem>
            
            <StaggerItem>
              <div className="h-px w-24 bg-[var(--color-border)] mb-12" />
            </StaggerItem>

            <StaggerItem>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-4">
                Businesses don't grow when people <span className="text-[var(--color-muted-foreground)]">see</span> them.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                Businesses grow when people <span className="text-[var(--color-foreground)] bg-[var(--color-primary)]/20 px-2 rounded-lg">remember</span> them.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </Container>
    </Section>
  )
}
