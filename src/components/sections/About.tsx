import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"

export function About() {
  const stats = [
    { label: "Years Experience", value: "9+" },
    { label: "Businesses Scaled", value: "50+" },
    { label: "Students Taught", value: "10k+" },
  ]

  return (
    <Section className="bg-[var(--color-muted)]/30" id="mentor">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="relative">
            <div className="aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-[32px] overflow-hidden bg-white shadow-premium border relative">
              <Image 
                src="/images/mentor/mentor_bg.png" 
                alt="Puneet Kaur Saluja" 
                fill
                className="object-cover bg-white"
              />
            </div>
            
            <Card className="absolute -bottom-8 -right-4 md:right-8 lg:-right-12 w-64 p-4 shadow-premium-hover border bg-white/90 backdrop-blur-md hidden sm:block hover:-translate-y-2 transition-transform duration-500">
              <CardContent className="p-2 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center font-bold text-[var(--color-primary-hover)]">
                  9+
                </div>
                <div>
                  <div className="font-bold">Years of expertise</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">Communication Strategist</div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <StaggerReveal className="max-w-xl">
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Meet Your Mentor
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <div className="space-y-6 text-lg text-[var(--color-muted-foreground)] leading-relaxed mb-10">
                <p>
                  Hi, I'm <span className="text-[var(--color-foreground)] font-medium">Puneet Kaur Saluja</span>. For over 9 years, I've been helping founders, creators, and businesses use the power of words to scale their impact.
                </p>
                <p>
                  As a communication strategist and brand consultant, I realized early on that the difference between content that flops and content that converts isn't the algorithm—it's human psychology.
                </p>
                <p>
                  I created this masterclass to share the exact frameworks I use to help brands build undeniable trust, authority, and memory structure in the minds of their audience.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--color-border)]">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-[var(--color-foreground)] mb-1">{stat.value}</div>
                    <div className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </Container>
    </Section>
  )
}

