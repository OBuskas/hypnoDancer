import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Shield, Zap, Users, DollarSign } from "lucide-react"

export function ProductSection() {
  return (
    <section id="product" className="border-b border-border/40 bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Product Image/Visual */}
          <div className="relative">
            <Card className="overflow-hidden border-2 border-primary/20 bg-card p-8 shadow-xl">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/pina-mascot.png"
                  alt="Ananá Pay App"
                  width={400}
                  height={400}
                  className="drop-shadow-2xl"
                />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 rounded-lg bg-primary/10 p-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="font-medium text-foreground">Smart Contract Security</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-accent/10 p-4">
                  <Zap className="h-6 w-6 text-accent" />
                  <span className="font-medium text-foreground">Instant Payments</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-secondary/10 p-4">
                  <DollarSign className="h-6 w-6 text-secondary" />
                  <span className="font-medium text-foreground">Stablecoin Support</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Product Description */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-fit">
              Our Main Product
            </div>

            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Ananá Pay</h2>

            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Ananá Pay is a Web3 platform, in app format, that automates salary and financial flow payments using smart
              contracts on the blockchain. Designed for DAOs, startups, and small businesses, it enables continuous
              payments in stablecoins safely, transparently, and without intermediaries.
            </p>

            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              With a simple subscription model—a fixed monthly fee per employee or active flow—Ananá Pay ensures
              efficiency, predictability, and financial autonomy, making payroll management more modern and aligned with
              the new digital economy.
            </p>

            <div className="flex flex-col gap-4 md:flex-row">
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                <Download className="mr-2 h-5 w-5" />
                Download Ananá Pay
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#docs">View Documentation</Link>
              </Button>
            </div>

            <div className="grid gap-4 pt-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">For DAOs & Startups</div>
                  <div className="text-sm text-muted-foreground">Built for modern organizations</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Secure & Transparent</div>
                  <div className="text-sm text-muted-foreground">Blockchain-verified transactions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
