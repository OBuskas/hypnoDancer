import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProductSection } from "@/components/product-section"
import { ChainsSection } from "@/components/chains-section"
import { FeaturesSection } from "@/components/features-section"
import { DocumentationSection } from "@/components/documentation-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1550px]">
        <Header />
      </div>
      <main>
        <HeroSection />
        <div className="mx-auto max-w-[1550px]">
          <ServicesSection />
          <ProductSection />
          <ChainsSection />
          <FeaturesSection />
          <DocumentationSection />
          <ContactSection />
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
