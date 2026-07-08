import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import Image from "next/image"

export function BigIdea() {
  return (
    <Section className="bg-[var(--color-muted)]/30 py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <StaggerReveal className="max-w-2xl">
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Here's The Truth Nobody Talks About...
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4 text-[var(--color-muted-foreground)]">
                Most people believe marketing is about producing more content.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-[var(--color-primary-hover)]">
                In reality, marketing is about shaping perception.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Consider the brands that come to your mind instantly. They don’t stand out because they post more frequently than others. They stand out because they communicate with clarity, intention, and emotional impact.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                They understand what to say, how to say it, and most importantly, how to make people feel.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-2">
                <p className="text-xl md:text-2xl font-bold">
                  That is exactly what this workshop will help you master.
                </p>
              </div>
            </StaggerItem>
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

