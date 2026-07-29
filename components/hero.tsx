import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <div className="flex max-w-3xl flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[0.7rem] tracking-[0.18em] text-primary uppercase">
            Sprinter · Transit · Promaster
          </span>
          <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Custom Off-Grid Vans, Engineered for the Long Haul.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Bespoke Sprinter conversions built with marine-grade 12V electrical
            systems, professional cabinetry, and uncompromising precision.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              render={<a href="#intake" />}
              nativeButton={false}
              className="h-12 px-7 font-display text-base font-bold tracking-wide"
            >
              Get a Build Quote
            </Button>
            <Button
              render={<a href="#past-builds" />}
              nativeButton={false}
              variant="outline"
              className="h-12 px-7 font-display text-base font-bold tracking-wide"
            >
              View Past Conversions
            </Button>
          </div>
          <div className="flex items-center gap-2.5 pt-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            <span className="font-mono text-xs tracking-wide uppercase">
              100% Client-Funded • Built to RVIA/NFPA Safety Standards
            </span>
          </div>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-card">
          <Image
            src="/images/hero-sprinter-van.png"
            alt="Custom Mercedes Sprinter camper van parked in the mountains at dusk with warm interior lighting glowing through the open door"
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
