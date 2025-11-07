"use client"

import Image from "next/image"

const chains = [
  { name: "Ethereum", logo: "/ethereum-logo.png" },
  { name: "Polkadot", logo: "/polkadot-logo.png" },
  { name: "Polygon", logo: "/polygon-logo.png" },
  { name: "Arbitrum", logo: "/arbitrum-logo-abstract.png" },
  { name: "Optimism", logo: "/optimism-logo-abstract.png" },
  { name: "Base", logo: "/base-blockchain-logo.png" },
  { name: "Avalanche", logo: "/avalanche-logo-abstract.png" },
  { name: "BNB Chain", logo: "/bnb-chain-logo.png" },
]

export function ChainsSection() {
  return (
    <section id="chains" className="border-b border-border/40 bg-background py-20 md:py-32">
      <div className="container mx-auto max-w-[1550px] px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Chains We Work With
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Supporting multiple blockchain networks for maximum flexibility
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="flex gap-16 animate-scroll-left">
            {/* First set */}
            {chains.map((chain, index) => (
              <div key={`chain-1-${index}`} className="flex min-w-[120px] flex-col items-center gap-3">
                <Image
                  src={chain.logo || "/placeholder.svg"}
                  alt={chain.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 transition-transform hover:scale-110"
                />
                <span className="text-sm font-medium text-foreground">{chain.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {chains.map((chain, index) => (
              <div key={`chain-2-${index}`} className="flex min-w-[120px] flex-col items-center gap-3">
                <Image
                  src={chain.logo || "/placeholder.svg"}
                  alt={chain.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 transition-transform hover:scale-110"
                />
                <span className="text-sm font-medium text-foreground">{chain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
