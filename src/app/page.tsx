import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { BigIdea } from "@/components/sections/BigIdea"
import { WhyWorkshop } from "@/components/sections/WhyWorkshop"
import { WhatYouWillLearn } from "@/components/sections/WhatYouWillLearn"
import { WhoShouldAttend } from "@/components/sections/WhoShouldAttend"
import { About } from "@/components/sections/About"
import { WhyThisMatters } from "@/components/sections/WhyThisMatters"
import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Hero />
      <Problem />
      <BigIdea />
      <WhyWorkshop />
      <WhatYouWillLearn />
      <WhoShouldAttend />
      <About />
      <WhyThisMatters />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
