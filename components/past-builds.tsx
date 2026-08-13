import Image from 'next/image'

const builds = [
  {
    src: '/images/2019_sprinter_interior.jpg',
    alt: 'Interior of a finished camper van conversion with cabinetry, butcher block galley, and slatted ceiling',
    title: 'The Billy Goat',
    spec: '170" Sprinter · 300Ah · Half galley',
  },
  {
    src: '/images/counter.png',
    alt: 'Close-up of a camper van galley with butcher block countertop',
    title: 'Billy Goat Galley',
    spec: '170" Sprinter · 300Ah · Half galley',
  },
  {
    src: '/images/2019_sprinter_bed.png',
    alt: 'Bed of the Billy Goat camper van conversion with a slatted ceiling and marine-grade 12V electrical system.',
    title: 'The Billy Goat Bedroom',
    spec: '170" Sprinter · 300Ah · Half galley',
  },
  {
    src: '/images/shop.jpg',
    alt: 'Interior of the Abroga Vans shop with a camper van conversion in progress',
    title: 'Abroga Vans Shop',
    spec: '170" Sprinter · 300Ah · Half galley',
  },
  {
    src: '/images/2006_sprinter_wall.png',
    alt: 'Interior of a 2006 Sprinter with a custom wall panel',
    title: '2006 Sprinter Wall Partition',
    spec: '158" Sprinter · 700Ah · Full galley',
  },
  {
    src: '/images/2006_sprinter_back.png',
    alt: 'Interior of a 2006 Sprinter with a full size countertop galley and marine-grade 12V electrical system',
    title: '2006 Sprinter Rear',
    spec: '158" Sprinter · 700Ah · Full galley',
  },
]

export function PastBuilds() {
  return (
    <section
      id="past-builds"
      className="scroll-mt-20 border-t border-border bg-card/40 py-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Past Builds
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Conversions off the shop floor.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {builds.map((build) => (
            <figure
              key={build.title}
              className="group flex flex-col gap-4 overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={build.src}
                  alt={build.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex flex-col gap-1 px-5 pb-5">
                <span className="font-display text-base font-bold tracking-tight">
                  {build.title}
                </span>
                <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {build.spec}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
