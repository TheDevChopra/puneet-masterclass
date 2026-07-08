import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import Image from "next/image"

export function About() {
  return (
    <Section className="bg-[var(--color-muted)]/30 py-20" id="mentor">
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
          </FadeIn>

          <StaggerReveal className="max-w-xl">
            <StaggerItem>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Meet Your Mentor
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <h3 className="text-3xl font-medium text-[var(--color-primary-hover)] mb-8">
                Puneet Kaur Saluja
              </h3>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-6 text-lg text-[var(--color-muted-foreground)] leading-relaxed mb-10">
                <p>
                  What started as a ₹500 freelance writing project became a nine-year journey into content, branding, advertising, and communication strategy.
                </p>
                <p>
                  While working with businesses across industries, one question kept appearing:
                </p>
                <div className="border-l-4 border-[var(--color-primary)] pl-4 py-1 italic font-medium text-[var(--color-foreground)]">
                  <p>
                    Why do some brands become unforgettable while others, despite creating good content, remain invisible?
                  </p>
                </div>
                <p>
                  That question led to years of studying consumer behaviour, communication psychology, and brand perception.
                </p>
                <p className="text-xl font-medium text-[var(--color-foreground)]">
                  Today, Puneet helps businesses move beyond creating content - and start creating communication that people actually remember.
                </p>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </Container>
    </Section>
  )
}

