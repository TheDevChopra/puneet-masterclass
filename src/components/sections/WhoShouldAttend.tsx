import { Briefcase, UserPlus, PenTool, Laptop, BarChart, GraduationCap, Building2 } from "lucide-react"
import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardHeader, CardTitle } from "../ui/card"

export function WhoShouldAttend() {
  const audiences = [
    { name: "Business Owners", icon: <Building2 className="w-5 h-5" /> },
    { name: "Founders", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Creators", icon: <PenTool className="w-5 h-5" /> },
    { name: "Freelancers", icon: <Laptop className="w-5 h-5" /> },
    { name: "Coaches", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Marketing Professionals", icon: <BarChart className="w-5 h-5" /> },
    { name: "Personal Brands", icon: <UserPlus className="w-5 h-5" /> },
  ]

  return (
    <Section className="bg-white border-t border-[var(--color-border)]/50">
      <Container>
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <FadeIn className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Who is this for?
            </h2>
            <p className="text-lg text-[var(--color-muted-foreground)]">
              Anyone who relies on words to grow their business, build an audience, or establish authority online.
            </p>
          </FadeIn>

          <StaggerReveal className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {audiences.map((item) => (
              <StaggerItem key={item.name}>
                <Card className="h-full border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors bg-[var(--color-muted)]/20 shadow-none">
                  <CardHeader className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--color-muted-foreground)] shadow-sm">
                      {item.icon}
                    </div>
                    <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </Container>
    </Section>
  )
}
