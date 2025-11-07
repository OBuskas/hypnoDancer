import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Users, Shield, CreditCard } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Automation",
    description:
      "Automate your entire payroll process with smart contracts. Set it once, and payments flow continuously without manual intervention.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "Built for DAOs and decentralized organizations. Empower your community with transparent, trustless payment systems.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Bank-grade security powered by blockchain technology. Every transaction is verified, immutable, and transparent.",
  },
  {
    icon: CreditCard,
    title: "Simple Subscriptions",
    description:
      "Predictable pricing with a fixed monthly fee per employee. No hidden costs, no surprises—just straightforward billing.",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-b border-border/40 bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Choose Ananá Pay
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to manage Web3 payments efficiently</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
