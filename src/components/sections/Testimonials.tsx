"use client"

import { Container, Section } from "../layout/Layout"
import { FadeIn } from "../animations/Reveal"
import { Card, CardContent } from "../ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      text: "This completely changed how I write emails. My open rates have doubled, and people are actually replying.",
      author: "Sarah J.",
      role: "E-commerce Founder",
    },
    {
      text: "I used to spend hours thinking about what to post. Now I understand the psychology, writing takes minutes and gets better results.",
      author: "David M.",
      role: "Business Coach",
    },
    {
      text: "The module on Trust Architecture alone was worth 10x the price of this workshop.",
      author: "Priya K.",
      role: "Freelance Designer",
    },
    {
      text: "Finally, a framework that doesn't feel gross or manipulative, just deeply human and empathetic.",
      author: "James L.",
      role: "Marketing Director",
    },
    {
      text: "I applied one principle from this masterclass to my landing page and saw a 40% increase in conversions.",
      author: "Elena R.",
      role: "SaaS Founder",
    },
  ]

  // Duplicating for seamless infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials]

  return (
    <Section className="bg-[var(--color-background)] overflow-hidden">
      <Container className="mb-12">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Words That Work.
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)]">
            Join thousands of others who have transformed their communication.
          </p>
        </FadeIn>
      </Container>

      <div className="relative w-full overflow-hidden flex pt-8 pb-12">
        <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10" />
        <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 px-6 group/scroll hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {extendedTestimonials.map((testimonial, i) => (
            <Card key={i} className="w-[400px] shrink-0 border-[var(--color-border)]/50 shadow-sm bg-white hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--color-muted)]/50 rotate-180" />
                <p className="text-lg font-medium leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-muted)] flex items-center justify-center font-bold text-[var(--color-muted-foreground)]">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
