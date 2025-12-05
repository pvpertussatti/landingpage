"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 text-accent flex-shrink-0">
              <Logo />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-lg font-bold text-foreground tracking-tight leading-none group-hover:text-accent transition-colors">
                PROPV
              </span>
              <span className="text-[10px] text-muted-foreground leading-none tracking-wide">
                Tecnologia e Automação
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
             <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
              Sobre
            </Link>
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition">
              Serviços
            </Link>
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Soluções
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Contato
            </Link>
            <a
              href="https://wa.me/554891197994"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="#about" className="block text-sm text-muted-foreground hover:text-foreground">
              Sobre
            </Link>
            <Link href="#services" className="block text-sm text-muted-foreground hover:text-foreground">
              Serviços
            </Link>
            <Link href="#features" className="block text-sm text-muted-foreground hover:text-foreground">
              Soluções
            </Link>
            <Link href="#contact" className="block text-sm text-muted-foreground hover:text-foreground">
              Contato
            </Link>
            <a
              href="https://wa.me/554891197994"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium text-center hover:opacity-90 transition"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
