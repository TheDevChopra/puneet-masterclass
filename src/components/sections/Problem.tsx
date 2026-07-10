import { CheckCircle2 } from "lucide-react"
import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import { Button } from "../ui/button"

export function Problem() {
  const checklist = [
    "Posting consistently.",
    "Trying AI tools.",
    "Following content trends.",
    "Creating \"valuable\" content.",
  ]

  return (
    <Section className="bg-white border-t border-[var(--color-border)]/50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="max-w-xl">
            <h2 className="h2 mb-8">
              You're Doing Everything They Told You To Do...
            </h2>
            <div className="grid gap-4">
              {checklist.map((item, index) => (
                <Card key={item} className="bg-[var(--color-muted)]/30 border-none shadow-none rounded-[16px]">
                  <CardContent className="p-4 flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)]" />
                    <span className="text-lg font-medium text-[var(--color-foreground)]">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>

          <StaggerReveal className="lg:pl-12">
            <StaggerItem>
              <h3 className="h3 text-[var(--color-muted-foreground)] mb-4">
                Yet...
              </h3>
            </StaggerItem>
            <StaggerItem>
              <p className="body-large mb-4">
                People watch, scroll, and move on.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="body-large text-[var(--color-foreground)] mb-6">
                Very few remember your brand!
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <p className="body-large text-[var(--color-muted-foreground)] mb-8">
                And that's the real problem.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="body-large mb-4">
                Because businesses don't grow when people see them.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="body-large mb-10">
                They grow when people <span className="text-highlight">remember</span> them.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Join the Workshop at ₹99
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
