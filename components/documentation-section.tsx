import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Code, FileText, Video } from "lucide-react"

export function DocumentationSection() {
  return (
    <section id="docs" className="border-b border-border/40 bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Developer Resources
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to integrate Ananá Pay into your organization
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="flex flex-col items-center gap-4 p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Getting Started</h3>
            <p className="text-sm text-muted-foreground">Quick start guide for new users</p>
          </Card>

          <Card className="flex flex-col items-center gap-4 p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Code className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground">API Reference</h3>
            <p className="text-sm text-muted-foreground">Complete API documentation</p>
          </Card>

          <Card className="flex flex-col items-center gap-4 p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <FileText className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground">Smart Contracts</h3>
            <p className="text-sm text-muted-foreground">Contract documentation</p>
          </Card>

          <Card className="flex flex-col items-center gap-4 p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Video Tutorials</h3>
            <p className="text-sm text-muted-foreground">Step-by-step video guides</p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#" target="_blank">
              Access Full Documentation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
