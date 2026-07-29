import { Droplets, Ruler, Zap } from 'lucide-react'

const specs = [
  {
    icon: Zap,
    title: 'Marine-Grade Electrical',
    body: 'Victron Energy 3,000W inverters, smart lithium battery banks, and custom pre-loomed wiring harnesses built for continuous off-grid load.',
    points: ['Victron 3kVA inverter/charger', 'Smart lithium banks', 'Pre-loomed harnesses'],
  },
  {
    icon: Ruler,
    title: 'Precision Woodwork',
    body: 'Professional cabinetry, lightweight structural framing, and durable hardware that stays tight after a hundred thousand miles of vibration.',
    points: ['Furniture-grade cabinetry', 'Weight-optimized framing', 'Commercial hardware'],
  },
  {
    icon: Droplets,
    title: 'Off-Grid Climate & Water',
    body: 'Sealed diesel heaters, filtered water manifolds, and winterized plumbing systems engineered for four-season travel.',
    points: ['Sealed diesel heat', 'Filtered water manifold', 'Winterized plumbing'],
  },
]

export function BuildSpecs() {
  return (
    <section id="build-specs" className="scroll-mt-20 border-t border-border py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Engineering Highlights
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Built like equipment, not furniture.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            Every system is specified, documented, and load-tested before the
            keys go back in your hand.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {specs.map((spec) => (
            <article
              key={spec.title}
              className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <spec.icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-bold tracking-tight text-card-foreground">
                  {spec.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {spec.body}
                </p>
              </div>
              <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                {spec.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground uppercase"
                  >
                    <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
