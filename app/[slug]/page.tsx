import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { JsonLd, getSeoPage, getSeoPages } from '@/lib/seo'
import './seo-article.css'

export const dynamicParams = false

export function generateStaticParams() {
  return getSeoPages().map((page) => ({ slug: page.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getSeoPage((await params).slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
  }
}

export default async function SeoLandingPage({ params }: Props) {
  const page = getSeoPage((await params).slug)
  if (!page) notFound()
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 pt-28 pb-20 sm:px-6">
        <article className="seo-article" dangerouslySetInnerHTML={{ __html: page.html }} />
      </main>
      <SiteFooter />
      <JsonLd data={page.jsonld} />
    </div>
  )
}
