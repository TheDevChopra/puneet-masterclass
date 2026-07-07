import { Check, ShieldCheck, Zap, Clock, Star } from "lucide-react"
import { Container } from "@/components/layout/Layout"
import { RegisterForm } from "@/components/forms/RegisterForm"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function RegisterPage() {
  const includes = [
    "Live Interactive Session",
    "Practical Communication Frameworks",
    "Brand Psychology Concepts",
    "Real Case Studies",
    "Q&A Session",
    "Lifetime Learnings",
  ]

  return (
    <main className="min-h-screen bg-[var(--color-background)] py-12 md:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          {/* Left Column - Details */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary-hover)] text-sm font-medium w-max mb-6">
              Puneet Kaur Saluja
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              The Psychology Behind Writing
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold">₹99</span>
              <span className="text-sm font-medium px-2 py-1 bg-green-100 text-green-700 rounded-md">Live Online Masterclass</span>
            </div>

            <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed mb-10">
              Stop relying on templates and hacks. Learn the fundamental psychology of why certain messages work while others fall flat. Master the art of perception.
            </p>

            <div className="space-y-4 mb-12">
              <h3 className="font-semibold text-lg">What's included:</h3>
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[var(--color-primary-hover)]" />
                  </div>
                  <span className="font-medium text-[var(--color-muted-foreground)]">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] font-medium">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Secure Payment
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] font-medium">
                <Zap className="w-4 h-4 text-yellow-600" />
                WhatsApp Confirmation
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] font-medium">
                <Clock className="w-4 h-4 text-orange-600" />
                Limited Seats
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] font-medium">
                <Star className="w-4 h-4 text-blue-600" />
                Beginner Friendly
              </div>
            </div>

            <div className="mt-12 rounded-[24px] overflow-hidden border border-[var(--color-border)] shadow-sm">
              <Image 
                src="/images/payment/registration.png" 
                alt="Registration Illustration" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="relative">
            {/* Background blur effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-[var(--color-primary)]/5 blur-[100px] pointer-events-none" />
            
            <Card className="relative bg-white border border-[var(--color-border)] shadow-premium">
              <CardContent className="p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">Reserve Your Seat</h2>
                  <p className="text-[var(--color-muted-foreground)]">Fill in your details to proceed to secure checkout.</p>
                </div>
                
                <RegisterForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  )
}
