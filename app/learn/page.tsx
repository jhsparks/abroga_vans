import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getSeoPages } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Learn | Abroga Vans',
  description:
    'Guides on custom camper van conversions, Sprinter builds, and choosing a van builder from Abroga Vans.',
  alternates: { canonical: '/learn' },
}

export default function LearnPage() {
  const pages = getSeoPages()
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl px-4 pt-28 pb-20 sm:px-6">
        <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">Learn</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Camper Van Conversion Guides
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Everything you need to know before starting your custom van build.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {pages.map((page) => (
            <li key={page.slug}>
              <a
                href={`/${page.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <h2 className="font-display text-lg font-bold">{page.label}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{page.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read guide
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  )
}
