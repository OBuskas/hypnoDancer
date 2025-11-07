"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, Globe } from "lucide-react"

const translations = {
  en: {
    services: "Services",
    product: "Product",
    chains: "Chains",
    docs: "Documentation",
    contact: "Contact",
    faq: "FAQ",
    cta: "Speak to Ananá",
  },
  es: {
    services: "Servicios",
    product: "Producto",
    chains: "Cadenas",
    docs: "Documentación",
    contact: "Contacto",
    faq: "Preguntas",
    cta: "Hablar con Ananá",
  },
  pt: {
    services: "Serviços",
    product: "Produto",
    chains: "Cadeias",
    docs: "Documentação",
    contact: "Contato",
    faq: "Perguntas",
    cta: "Falar com Ananá",
  },
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "es" | "pt">("en")

  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <Image src="/images/pina-mascot.png" alt="Piña Mascot" width={50} height={50} className="h-12 w-12" />
          <span className="text-2xl font-bold text-foreground">Ananá Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#services"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {t.services}
          </Link>
          <Link
            href="#product"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {t.product}
          </Link>
          <Link
            href="#chains"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {t.chains}
          </Link>
          <Link href="#docs" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            {t.docs}
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {t.contact}
          </Link>
          <Link href="#faq" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            {t.faq}
          </Link>
        </nav>

        {/* CTA and Language Selector */}
        <div className="hidden items-center gap-4 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("es")}>Español</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("pt")}>Português</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contact">{t.cta}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <Link
              href="#services"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.services}
            </Link>
            <Link
              href="#product"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.product}
            </Link>
            <Link
              href="#chains"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.chains}
            </Link>
            <Link
              href="#docs"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.docs}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contact}
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.faq}
            </Link>
            <div className="flex items-center gap-4 pt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Globe className="mr-2 h-4 w-4" />
                    Language
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("es")}>Español</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("pt")}>Português</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  {t.cta}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
