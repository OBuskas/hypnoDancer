'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const chains = [
  { name: 'Ethereum', logo: '/ethereum-logo.png' },
  { name: 'Polkadot', logo: '/polkadot-logo.png' },
  { name: 'Polygon', logo: '/polygon-logo.png' },
  { name: 'Arbitrum', logo: '/arbitrum-logo-abstract.png' },
  { name: 'Optimism', logo: '/optimism-logo-abstract.png' },
  { name: 'Base', logo: '/base-blockchain-logo.png' },
  { name: 'Avalanche', logo: '/avalanche-logo-abstract.png' },
  { name: 'BNB Chain', logo: '/bnb-chain-logo.png' },
];

export function ChainsSection() {
  return (
    <section
      id="chains"
      className="relative border-b border-border/40 bg-background py-20 md:py-32"
    >
      <div className="container mx-auto max-w-[1550px] px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Chains We Work With
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Supporting multiple blockchain networks for maximum flexibility
          </p>
        </div>

        <Carousel
          opts={{
            loop: true,
            duration: 15000,
          }}
          plugins={[
            Autoplay({
              delay: 0,
            }),
          ]}
          className="w-full pointer-events-none mt-12 lg:mt-20"
        >
          <div className="h-full w-40 bg-linear-to-r from-background via-background/50 to-transparent z-20 absolute left-0 top-0 " />
          <div className="h-full w-40 bg-linear-to-l from-background via-background/50 to-transparent z-20 absolute right-0 top-0" />
          <CarouselContent className="-ml-20 md:ml-0">
            {chains.map((chain) => (
              <CarouselItem key={chain.name} className="basis-1/4 md:basis-1/6 pl-20 md:pl-0">
                <div className="relative lg:w-36 w-20 aspect-square rounded-full overflow-hidden">
                  <Image
                    src={chain.logo}
                    alt={chain.name}
                    fill
                    className="object-cover"
                    unoptimized={chain.logo.includes('.gif')}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

