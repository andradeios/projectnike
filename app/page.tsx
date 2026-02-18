import { AnimatedBanner } from "@/components/animated-banner"
import { VslSection } from "@/components/vsl-section"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { PurchaseNotifications } from "@/components/purchase-notifications"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBanner />
      <PurchaseNotifications />
      <VslSection />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
