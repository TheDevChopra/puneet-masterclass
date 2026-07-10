import { XCircle } from "lucide-react"
import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import { Button } from "../ui/button"
import { Ticket } from "lucide-react"

export function WhyWorkshop() {
  const notLearning = [
    "Viral hacks",
    "Instagram algorithm tricks",
    "AI prompts to generate endless content",
    "\"Post consistently and you'll grow\"",
  ]

  return (
    <Section className="bg-white">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-6">
            This Isn't Another "Content Marketing" Webinar.
          </h2>
          <p className="body-regular text-[var(--color-muted-foreground)]">
            You're not going to learn:
          </p>
        </FadeIn>

        <StaggerReveal className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {notLearning.map((item) => (
            <StaggerItem key={item}>
              <Card className="border border-[var(--color-border)] shadow-sm">
                <CardContent className="flex items-center gap-4 pt-8">
                  <XCircle className="w-8 h-8 text-red-500 shrink-0" />
                  <span className="body-regular font-medium text-[var(--color-foreground)]">{item}</span>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <StaggerReveal className="max-w-3xl mx-auto text-center">
          <StaggerItem>
            <p className="body-large mb-4">
              Because those tactics change every few months.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="body-large font-bold mb-4 text-[var(--color-primary-hover)]">
              Human psychology doesn't.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="body-large text-[var(--color-muted-foreground)] mb-8">
              Instead, you'll discover why some messages stay with people for years while others are forgotten within seconds.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex justify-center">
              <Link href="/register" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden flex items-center justify-center gap-2">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  <Ticket className="w-5 h-5 shrink-0" />
                  Reserve Your Seat for Just ₹99
                </Button>
              </Link>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </Container>
    </Section>
  )
}
