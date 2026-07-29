import Image from 'next/image'

const builds = [
  {
    src: '/images/build-interior.png',
    alt: 'Interior of a finished camper van conversion with walnut cabinetry, butcher block galley, and slatted ceiling',
    title: 'The Laurel',
    spec: '170" Sprinter · 600Ah · Full galley',
  },
  {
    src: '/images/build-electrical.png',
    alt: 'Camper van electrical bay with lithium batteries, inverter, and neatly loomed labeled wiring on a plywood panel',
    title: 'Bay 04 Electrical',
    spec: 'Victron 3kVA · 400Ah lithium',
  },
  {
    src: '/images/build-exterior.png',
    alt: 'Black Ford Transit camper van with roof solar and all-terrain tires parked on a forest road at dusk',
    title: 'The Ridgeline',
    spec: 'Transit AWD · Solar 800W · Diesel heat',
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
