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
      question: "Is this for beginners?",
      answer: "Whether you're just starting out or you've been creating content for years, understanding human psychology is a fundamental skill. The frameworks taught apply to all levels of experience.",
    },
    {
      question: "Will this help my business?",
      answer: "Absolutely. If your business relies on communication—whether that's sales emails, landing pages, social media, or pitching clients—this workshop will give you an unfair advantage.",
    },
    {
      question: "Will examples be shared?",
      answer: "Yes. The workshop is highly practical and includes real-world case studies breaking down exactly why certain pieces of communication worked spectacularly well.",
    },
    {
      question: "Is this just about copywriting?",
      answer: "No. While it applies heavily to copywriting, the principles apply to any form of communication: speaking, video scripts, emails, and everyday business communication.",
    },
    {
      question: "Will a recording be available?",
      answer: "Yes, all attendees will receive lifetime access to the recording of the masterclass so you can revisit the frameworks whenever you need them.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section className="bg-white" id="faq">
      <Container>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          <FadeIn className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--color-muted-foreground)] mb-8">
              Everything you need to know about the masterclass. Can't find the answer you're looking for? Feel free to reach out.
            </p>
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
                          <div className="px-6 pb-6 text-[var(--color-muted-foreground)] leading-relaxed">
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
