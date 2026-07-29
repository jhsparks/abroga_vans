import { BuildProcess } from '@/components/build-process'
import { BuildSpecs } from '@/components/build-specs'
import { Hero } from '@/components/hero'
import { IntakeForm } from '@/components/intake-form'
import { PastBuilds } from '@/components/past-builds'
import { PricingTiers } from '@/components/pricing-tiers'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <BuildSpecs />
        <BuildProcess />
        <PricingTiers />
        <PastBuilds />
        <IntakeForm />
      </main>
      <SiteFooter />
    </div>
  )
}
