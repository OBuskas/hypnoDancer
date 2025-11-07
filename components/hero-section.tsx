import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-background py-20 md:pt-0">
      <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse-soft"></div>
      <div className="absolute right-1/4 bottom-20 delay-200 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-pulse-soft"></div>

      <div className="container relative mx-auto max-w-[1550px] px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Web3 Payment Automation
            </div>

            <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Automate Your Web3 Payments
            </h1>

            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Smart contract-based payroll solutions for DAOs, startups, and businesses. Pay your
              team in stablecoins with transparency, security, and zero intermediaries.
            </p>

            <div className="flex flex-col gap-4 md:flex-row">
              <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700">
                <Link href="#contact">
                  Speak to Ananá
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#product">Learn More</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Transparent</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Automated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">0</div>
                <div className="text-sm text-muted-foreground">Intermediaries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mascot */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 top-[50%] -z-10 h-1/3 rounded-[50%] bg-gradient-to-b from-transparent via-yellow-900/40 to-yellow-900/60 blur-2xl"></div>
              <Image
                src="/images/pina-mascot.png"
                alt="Piña - Ananá Labs Mascot"
                width={500}
                height={500}
                className="relative z-10 drop-shadow-[0_25px_25px_rgba(139,69,19,0.4)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

