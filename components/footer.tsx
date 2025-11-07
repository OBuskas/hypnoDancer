import Link from "next/link"
import Image from "next/image"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/pina-mascot.png" alt="Piña Mascot" width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-bold">Ananá Labs</span>
            </Link>
            <p className="text-sm text-background/80">
              Building the future of Web3 payments with blockchain technology.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#product" className="text-background/80 transition-colors hover:text-background">
                  Ananá Pay
                </Link>
              </li>
              <li>
                <Link href="#chains" className="text-background/80 transition-colors hover:text-background">
                  Supported Chains
                </Link>
              </li>
              <li>
                <Link href="#docs" className="text-background/80 transition-colors hover:text-background">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-background/80 transition-colors hover:text-background">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/80 transition-colors hover:text-background">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-background/80 transition-colors hover:text-background">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com/ananalabs"
                target="_blank"
                className="text-background/80 transition-colors hover:text-background"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/ananalabs"
                target="_blank"
                className="text-background/80 transition-colors hover:text-background"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/ananalabs"
                target="_blank"
                className="text-background/80 transition-colors hover:text-background"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <a href="mailto:contact@ananalabs.com" className="text-background/80 hover:text-background">
                contact@ananalabs.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Ananá Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
