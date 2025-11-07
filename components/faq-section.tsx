import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Ananá Pay?",
    answer:
      "Ananá Pay is a Web3 platform that automates salary and financial flow payments using smart contracts on the blockchain. It enables continuous payments in stablecoins safely, transparently, and without intermediaries.",
  },
  {
    question: "Which blockchains does Ananá Pay support?",
    answer:
      "Ananá Pay supports multiple blockchain networks including Ethereum, Polkadot, Polygon, Arbitrum, Optimism, Base, Avalanche, and BNB Chain, giving you flexibility in choosing the right network for your needs.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "Ananá Pay uses a simple subscription model with a fixed monthly fee per employee or active payment flow. This ensures predictability and transparency with no hidden costs.",
  },
  {
    question: "Is Ananá Pay secure?",
    answer:
      "Yes, Ananá Pay is built on blockchain technology with smart contracts that ensure every transaction is verified, immutable, and transparent. We prioritize security at every level of our platform.",
  },
  {
    question: "Who is Ananá Pay designed for?",
    answer:
      "Ananá Pay is designed for DAOs, startups, and small businesses that want to modernize their payroll management with Web3 technology and stablecoin payments.",
  },
  {
    question: "Do I need technical knowledge to use Ananá Pay?",
    answer:
      "No, Ananá Pay is designed to be user-friendly and accessible. While it leverages advanced blockchain technology, the interface is intuitive and easy to use for anyone.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="border-b border-border/40 bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Everything you need to know about Ananá Pay</p>
          </div>

          <Accordion type="single" collapsible className="mt-12 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
