import { Button } from '@/components/ui/button'

const links = [
  { label: 'Build Specs', href: '/#build-specs' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Past Builds', href: '/#past-builds' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-display text-sm font-extrabold tracking-[0.16em] whitespace-nowrap uppercase sm:text-base sm:tracking-[0.2em]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary font-mono text-xs font-bold text-primary-foreground">
            AV
          </span>
          Abroga Vans
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            render={<a href="/learn" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="h-10 px-3 text-sm font-semibold tracking-wide sm:px-5"
          >
            Learn
          </Button>
          <Button
            render={<a href="/#intake" />}
            nativeButton={false}
            size="lg"
            className="h-10 px-3 text-sm font-semibold tracking-wide sm:px-5"
          >
            Start Your Build
          </Button>
        </div>
      </div>
    </header>
  )
}
