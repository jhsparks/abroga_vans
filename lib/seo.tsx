import type { Metadata } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import site from '@/content/seo/site.json'

// Managed by the SEO pipeline. Edit content/seo/site.json and
// content/seo/pages/*.json through the pipeline rather than by hand.
export const SITE_URL = 'https://abrogavans.com'

type JsonLdData = Record<string, unknown>

type SiteSeo = {
  home?: { title?: string; description?: string; canonical?: string }
  jsonld?: JsonLdData[]
}

export type SeoPage = {
  slug: string
  title: string
  description: string
  label: string
  html: string
  jsonld?: JsonLdData[]
}

const SITE = site as SiteSeo
const PAGES_DIR = path.join(process.cwd(), 'content', 'seo', 'pages')

export function applySeoOverrides(base: Metadata): Metadata {
  const home = SITE.home ?? {}
  return {
    ...base,
    metadataBase: new URL(SITE_URL),
    ...(home.title ? { title: home.title } : {}),
    ...(home.description ? { description: home.description } : {}),
    ...(home.canonical ? { alternates: { canonical: home.canonical } } : {}),
  }
}

export function getSeoPages(): SeoPage[] {
  if (!fs.existsSync(PAGES_DIR)) return []
  return fs
    .readdirSync(PAGES_DIR)
    .filter((file) => file.endsWith('.json'))
    .map((file) => JSON.parse(fs.readFileSync(path.join(PAGES_DIR, file), 'utf8')) as SeoPage)
    .sort((a, b) => a.label.localeCompare(b.label))
}

export function getSeoPage(slug: string): SeoPage | undefined {
  return getSeoPages().find((page) => page.slug === slug)
}

export function JsonLd({ data }: { data?: JsonLdData[] }) {
  return (
    <>
      {(data ?? []).map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  )
}

export function SiteJsonLd() {
  return <JsonLd data={SITE.jsonld} />
}

export function SeoPageLinks() {
  const pages = getSeoPages()
  if (pages.length === 0) return null
  return (
    <nav aria-label="Guides" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
      {pages.map((page) => (
        <a
          key={page.slug}
          href={`/${page.slug}`}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {page.label}
        </a>
      ))}
    </nav>
  )
}
