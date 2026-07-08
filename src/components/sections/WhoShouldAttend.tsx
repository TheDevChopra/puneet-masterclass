import { Briefcase, UserPlus, PenTool, Laptop, BarChart, GraduationCap, Building2 } from "lucide-react"
import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardHeader, CardTitle } from "../ui/card"

export function WhoShouldAttend() {
  const audiences = [
    { name: "Business Owners", icon: <Building2 className="w-5 h-5" /> },
    { name: "Coaches & Consultants", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Founders", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Freelancers", icon: <Laptop className="w-5 h-5" /> },
    { name: "Content Creators", icon: <PenTool className="w-5 h-5" /> },
    { name: "Personal Brands", icon: <UserPlus className="w-5 h-5" /> },
    { name: "Marketing Professionals", icon: <BarChart className="w-5 h-5" /> },
  ]

  return (
    <Section className="bg-white border-t border-[var(--color-border)]/50 py-20">
      <Container>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <FadeIn className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Who Should Attend?
            </h2>
            <p className="text-xl text-[var(--color-muted-foreground)]">
              It's perfect for:
            </p>
          </FadeIn>

          <StaggerReveal className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {audiences.map((item) => (
              <StaggerItem key={item.name}>
                <Card className="h-full border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors bg-[var(--color-muted)]/20 shadow-none">
                  <CardHeader className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm">
                      {item.icon}
                    </div>
                    <CardTitle className="text-sm font-medium leading-snug">{item.name}</CardTitle>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        <FadeIn className="max-w-3xl mx-auto text-center mt-24">
          <p className="text-2xl font-medium text-[var(--color-muted-foreground)] mb-6">
            If you've ever felt...
          </p>
          <div className="bg-[var(--color-muted)]/50 border-l-4 border-[var(--color-primary)] p-8 rounded-r-2xl mb-8">
            <p className="text-2xl md:text-3xl font-bold italic leading-relaxed text-[var(--color-foreground)]">
              "I'm putting in the effort, but my audience still doesn't remember me."
            </p>
          </div>
          <p className="text-2xl font-bold text-[var(--color-primary-hover)]">
            You're exactly who this workshop is for.
          </p>
        </FadeIn>
      </Container>
    </Section>
  )
}
