import { Brain, Heart, ShieldCheck, Zap, MessageSquare, Lightbulb } from "lucide-react"
import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"

export function WhyWorkshop() {
  const reasons = [
    {
      title: "Communication Psychology",
      desc: "Understand how the human brain processes and retains information.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Brand Recall",
      desc: "Frameworks to make your brand impossible to ignore.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Trust Building",
      desc: "The subtle art of establishing authority without bragging.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Consumer Behaviour",
      desc: "Why people click, share, and ultimately buy from you.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Message Framing",
      desc: "Structuring your copy to align with user expectations.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "Decision Psychology",
      desc: "Nudging audiences towards the right action effortlessly.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
  ]

  return (
    <Section className="bg-white">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Why This Workshop?
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)]">
            Move beyond generic templates. Learn the fundamental psychology of why certain messages work while others fall flat.
          </p>
        </FadeIn>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <Card className="h-full border border-[var(--color-border)]/50 group hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary-hover)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-primary-foreground)] transition-colors duration-300">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[var(--color-muted-foreground)]">
                    {reason.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  )
}
