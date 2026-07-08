import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"

export function WhyThisMatters() {
  return (
    <Section className="bg-white py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Why This Workshop Matters
            </h2>
          </FadeIn>

          <StaggerReveal className="space-y-8 text-center">
            <StaggerItem>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-[var(--color-muted-foreground)]">
                The internet has made creating content easier than ever.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-2xl md:text-3xl font-bold leading-relaxed text-[var(--color-primary-hover)]">
                Standing out has never been harder.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="h-px w-24 bg-[var(--color-border)] mx-auto my-12" />
            </StaggerItem>

            <StaggerItem>
              <p className="text-xl md:text-2xl leading-relaxed">
                The businesses that will win aren't necessarily the ones creating the most content.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl md:text-2xl leading-relaxed font-medium mb-12">
                They're the ones communicating with the most clarity, relevance, and emotional impact.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[var(--color-muted)]/30 rounded-3xl p-10 mt-12 border border-[var(--color-border)]/50 shadow-sm">
                <p className="text-2xl md:text-3xl font-medium text-[var(--color-muted-foreground)] mb-4">
                  If you understand that difference today...
                </p>
                <p className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
                  You'll market differently tomorrow.
                </p>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </Container>
    </Section>
  )
}
