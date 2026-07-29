import { Camera, Play } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abroga Vans. All rights reserved.
        </p>

        <nav aria-label="Social" className="flex items-center gap-5">
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Camera className="size-4" aria-hidden="true" />
            Instagram
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Play className="size-4" aria-hidden="true" />
            YouTube
          </a>
        </nav>

        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[0.7rem] tracking-[0.16em] text-primary uppercase">
          Crafted in PA
        </span>
      </div>
    </footer>
  )
}
