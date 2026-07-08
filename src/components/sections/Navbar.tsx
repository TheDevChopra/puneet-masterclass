"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-[var(--color-border)]/50 shadow-sm py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-xl md:text-2xl tracking-tight text-[var(--color-foreground)] hover:opacity-80 transition-opacity"
        >
          Masterclass
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-muted-foreground)]">
            <button onClick={() => document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[var(--color-foreground)] transition-colors">
              Curriculum
            </button>
            <button onClick={() => document.getElementById('mentor')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[var(--color-foreground)] transition-colors">
              Mentor
            </button>
            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[var(--color-foreground)] transition-colors">
              FAQ
            </button>
          </div>
          
          <Link href="/register">
            <Button size="sm" className="shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              Reserve Your Seat Today
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
