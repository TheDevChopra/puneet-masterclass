import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-bold text-xs tracking-tight text-foreground">Puneet Kaur Saluja</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
          <a href="#discover" className="hover:text-foreground transition-colors px-3 py-2 min-h-[44px] flex items-center">
            What You&apos;ll Learn
          </a>
          <span className="text-muted/40">·</span>
          <a href="#mentor" className="hover:text-foreground transition-colors px-3 py-2 min-h-[44px] flex items-center">
            About
          </a>
          <span className="text-muted/40">·</span>
          <a href="#faq" className="hover:text-foreground transition-colors px-3 py-2 min-h-[44px] flex items-center">
            FAQ
          </a>
          <span className="text-muted/40">·</span>
          <a href="#pricing" className="hover:text-foreground transition-colors px-3 py-2 min-h-[44px] flex items-center">
            Join ₹99
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] font-medium text-muted-foreground flex items-center justify-center gap-1 md:justify-start flex-wrap">
          © 2026 Puneet Kaur Saluja · 
          <Link href="/privacy-policy" className="hover:text-foreground hover:underline transition-all">Privacy Policy</Link> · 
          <Link href="/terms-conditions" className="hover:text-foreground hover:underline transition-all">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
}
