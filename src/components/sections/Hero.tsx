"use client"

import { Check } from "lucide-react"
import { Container, Section } from "../layout/Layout"
import { Button } from "../ui/button"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  const handleExplore = () => {
    const el = document.getElementById("workshop")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Section className="min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <StaggerReveal className="max-w-2xl">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary-hover)] text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-hover)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary-hover)]"></span>
                </span>
                A Live Online Masterclass by Puneet Kaur Saluja
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-foreground)] leading-[1.1] mb-6">
                Your Content Is Being <span className="relative inline-block px-2 bg-[var(--color-primary)]/20 rounded-lg">Ignored.</span>
                <br />
                <span className="text-[var(--color-muted-foreground)]">And It’s Not Because It’s Bad.</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg md:text-xl text-[var(--color-muted-foreground)] leading-relaxed mb-8 max-w-[600px]">
                Discover the psychology behind communication that makes people remember your brand, trust your message, and choose you over everyone else.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    🎟️ Join Now at just ₹99
                  </Button>
                </Link>
              </div>
            </StaggerItem>

          </StaggerReveal>

          <FadeIn direction="left" delay={0.3} className="relative hidden lg:block h-[600px] w-full rounded-[32px] bg-gradient-to-br from-[var(--color-muted)] to-[var(--color-background)] border shadow-premium overflow-hidden">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center p-8 z-10"
            >
              <div className="w-full h-full relative rounded-[24px] overflow-hidden border border-white/50 shadow-lg">
                <Image 
                  src="/images/hero/hero.png" 
                  alt="Hero Illustration" 
                  fill
                  className="object-cover bg-white"
                />
              </div>
            </motion.div>
            
            {/* Abstract decorative elements */}
            <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-[var(--color-primary)]/10 blur-2xl" />
            <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
