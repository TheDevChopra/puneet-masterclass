import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import Image from "next/image"

export function About() {
  return (
    <Section className="bg-[var(--color-muted)]/30" id="mentor">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right" className="relative lg:col-span-5">
            <div className="aspect-[4/5] w-full max-w-sm mx-auto lg:mr-0 lg:ml-auto rounded-[var(--radius-lg)] overflow-hidden bg-white shadow-premium border border-[var(--color-border)] relative">
              <Image 
                src="/images/mentor/puneet-new2.png" 
                alt="Puneet Kaur Saluja" 
                fill
                className="object-cover bg-white"
              />
            </div>
          </FadeIn>

          <StaggerReveal className="lg:col-span-7 max-w-2xl">
            <StaggerItem>
              <h2 className="h2 mb-2">
                Meet Your Mentor
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <h3 className="h3 text-[var(--color-primary-hover)] mb-8">
                Puneet Kaur Saluja
              </h3>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-6 body-regular text-[var(--color-muted-foreground)] mb-10">
                <p>
                  What started as a ₹500 freelance writing project became a nine-year journey into content, branding, advertising, and communication strategy.
                </p>
                <p>
                  While working with businesses across industries, one question kept appearing:
                </p>
                <div className="border-l-4 border-[var(--color-primary)] pl-6 py-2 italic font-medium text-[var(--color-foreground)] bg-[var(--color-background)] rounded-r-lg">
                  <p>
                    Why do some brands become unforgettable while others, despite creating good content, remain invisible?
                  </p>
                </div>
                <p>
                  That question led to years of studying consumer behaviour, communication psychology, and brand perception.
                </p>
                <p className="body-large font-bold text-[var(--color-foreground)]">
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

