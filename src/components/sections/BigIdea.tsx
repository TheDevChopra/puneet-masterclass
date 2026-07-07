import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"

export function BigIdea() {
  const highlights = [
    { title: "Emotion", desc: "How to trigger feelings that make messages stick." },
    { title: "Memory", desc: "The cognitive loops that ensure you're never forgotten." },
    { title: "Trust", desc: "The psychological signals that build instant credibility." },
    { title: "Perception", desc: "Controlling exactly how your brand is viewed." },
  ]

  return (
    <Section className="bg-[var(--color-muted)]/30">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <StaggerReveal className="max-w-2xl">
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                Marketing isn't content creation.
              </h2>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-primary-hover)] mb-12">
                Marketing is perception.
              </h2>
            </StaggerItem>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="border-l-2 border-[var(--color-primary)] pl-4">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-[var(--color-muted-foreground)] text-sm">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>

          <FadeIn direction="left" className="relative h-[600px] w-full lg:ml-auto max-w-lg">
            <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
              <div className="w-full h-full relative rounded-[32px] overflow-hidden border shadow-premium">
                <Image 
                  src="/images/illustrations/abstract.png" 
                  alt="Abstract Editorial Art" 
                  fill
                  className="object-cover bg-white hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}

