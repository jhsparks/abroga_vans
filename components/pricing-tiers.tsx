import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'The Weekender',
    price: '$20,000',
    note: 'Minimalists, weekend warriors & climbers',
    featured: false,
    features: [
      '100% bespoke layout design',
      '250Ah lithium battery bank',
      'Solar array & shore power hookup',
      'Premium four-season insulation',
      'Roof ventilation fan',
      'Custom kitchen galley block',
      '12V chest or upright fridge',
      'Hand-crafted cabinet storage',
    ],
    cta: 'Request Quote',
  },
  {
    name: 'The Explorer',
    price: '$25,000',
    note: 'Off-grid campers wanting self-sufficiency',
    featured: true,
    features: [
      'Everything in The Weekender, plus:',
      'Upgrade to 500Ah battery bank',
      'Integrated plumbing: cold water sink with fresh & gray tanks',
      'Single burner induction cooktop',
      'Mass-loaded sound deadening',
      'DC-DC alternator charging',
    ],
    cta: 'Start Your Build',
  },
  {
    name: 'The Basecamp',
    price: '$35,000',
    note: 'Full-timers & luxury travelers',
    featured: false,
    features: [
      'Everything in The Explorer, plus:',
      'Upgrade to 750Ah battery bank',
      'Hot water system routed to sink & shower',
      'Custom indoor wet bath/shower',
      'Webasto/Espar cabin heater',
    ],
    cta: 'Talk to a Builder',
  },
]

export function PricingTiers() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-border py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Build Tiers
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Transparent build estimates.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            Estimates reflect typical scope on a 144&quot; wheelbase chassis.
            Final pricing is locked after the CAD layout phase.
          </p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                'flex flex-col gap-6 rounded-xl border border-border bg-card p-6',
                tier.featured &&
                  'border-primary/60 bg-card shadow-[0_0_0_1px_var(--primary)] lg:-mt-4 lg:pb-8',
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {tier.name}
                </h3>
                {tier.featured && (
                  <span className="rounded-full bg-primary px-2.5 py-1 font-mono text-[0.65rem] font-bold tracking-[0.15em] text-primary-foreground uppercase">
                    Most Built
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-display text-3xl font-extrabold tracking-tight text-balance">
                  {tier.price}
                </span>
                <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {tier.note}
                </span>
              </div>

              <ul className="flex flex-col gap-3 border-t border-border pt-5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                render={<a href="#intake" />}
                nativeButton={false}
                variant={tier.featured ? 'default' : 'outline'}
                className="mt-auto h-11 w-full font-display text-sm font-bold tracking-wide"
              >
                {tier.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
