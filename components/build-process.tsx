const steps = [
  {
    step: '01',
    title: 'Consult & CAD Layout',
    body: 'Custom 3D layout design and power budget mapping tailored to how you actually travel.',
  },
  {
    step: '02',
    title: 'Component Sourcing',
    body: 'Procurement of wholesale appliances, solar, and chassis upgrades at builder pricing.',
  },
  {
    step: '03',
    title: 'Precision Build',
    body: 'Professional fabrication, wiring drop-ins, and finish carpentry with weekly photo updates.',
  },
  {
    step: '04',
    title: 'Handoff & Walkthrough',
    body: 'In-person system training plus comprehensive as-built documentation and wiring diagrams.',
  },
]

export function BuildProcess() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-t border-border bg-card/40 py-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            The Build Process
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Four phases, fully documented.
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li key={item.step} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-extrabold text-primary">
                  {item.step}
                </span>
                <span
                  className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-display text-lg font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
