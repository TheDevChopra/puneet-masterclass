import { XCircle } from "lucide-react"
import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import { Button } from "../ui/button"

export function WhyWorkshop() {
  const notLearning = [
    "Viral hacks",
    "Instagram algorithm tricks",
    "AI prompts to generate endless content",
    "\"Post consistently and you'll grow\"",
  ]

  return (
    <Section className="bg-white py-20">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            This Isn't Another "Content Marketing" Webinar.
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)]">
            You're not going to learn:
          </p>
        </FadeIn>

        <StaggerReveal className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {notLearning.map((item) => (
            <StaggerItem key={item}>
              <Card className="border border-[var(--color-border)]/50 shadow-sm">
                <CardContent className="p-6 flex items-center gap-4">
                  <XCircle className="w-8 h-8 text-red-500 shrink-0" />
                  <span className="text-lg font-medium text-[var(--color-foreground)]">{item}</span>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <StaggerReveal className="max-w-3xl mx-auto text-center">
          <StaggerItem>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-4">
              Because those tactics change every few months.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-8 text-[var(--color-primary-hover)]">
              Human psychology doesn't.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-muted-foreground)] mb-12">
              Instead, you'll discover why some messages stay with people for years while others are forgotten within seconds.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link href="/register" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="w-full text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                👉 Reserve Your Seat for Just ₹99
              </Button>
            </Link>
          </StaggerItem>
        </StaggerReveal>
      </Container>
    </Section>
  )
}
