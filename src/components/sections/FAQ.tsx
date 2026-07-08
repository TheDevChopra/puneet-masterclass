"use client"

import { useState } from "react"
import { Container, Section } from "../layout/Layout"
import { FadeIn, StaggerReveal, StaggerItem } from "../animations/Reveal"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function FAQ() {
  const faqs = [
    {
      question: "Is this only for writers?",
      answer: "Not at all. If your work involves communicating with customers, clients, or an audience, this workshop is for you.",
    },
    {
      question: "Will this be useful if I'm just starting out?",
      answer: "Absolutely. Whether you're building a personal brand or scaling a business, the principles you'll learn apply at every stage.",
    },
    {
      question: "Is this about copywriting?",
      answer: "No. This goes beyond writing. It's about understanding the psychology behind communication—so every piece of content, every campaign, and every conversation creates a stronger impact.",
    },
    {
      question: "Will there be practical examples?",
      answer: "Yes. The session includes real brand examples and practical insights that you can apply immediately.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section className="bg-white py-20" id="faq">
      <Container>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          <FadeIn className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <StaggerReveal className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <div 
                    className={cn(
                      "border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300",
                      openIndex === i ? "bg-[var(--color-muted)]/30 border-[var(--color-primary)]/30 shadow-sm" : "bg-white hover:border-[var(--color-border)]/80"
                    )}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-lg">{faq.question}</span>
                      <ChevronDown 
                        className={cn(
                          "w-5 h-5 text-[var(--color-muted-foreground)] transition-transform duration-300",
                          openIndex === i ? "rotate-180 text-[var(--color-primary-hover)]" : ""
                        )} 
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-[var(--color-muted-foreground)] leading-relaxed text-lg">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </Container>
    </Section>
  )
}
