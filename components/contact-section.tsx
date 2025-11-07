"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Mail, Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="border-b border-border/40 bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let's Build Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to revolutionize your payment system? Get in touch with our team
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">Type of Project</Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dao">DAO</SelectItem>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-foreground">Connect With Us</h3>
              <div className="space-y-4">
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent/10"
                >
                  <MessageSquare className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-medium text-foreground">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">Chat with us directly</div>
                  </div>
                </Link>

                <Link
                  href="mailto:contact@ananalabs.com"
                  className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-primary/10"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">contact@ananalabs.com</div>
                  </div>
                </Link>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-foreground">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/ananalabs"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-border transition-colors hover:bg-foreground hover:text-background"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com/ananalabs"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-border transition-colors hover:bg-foreground hover:text-background"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/company/ananalabs"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-border transition-colors hover:bg-foreground hover:text-background"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
