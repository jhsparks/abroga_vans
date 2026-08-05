'use client'

import { useState } from 'react'
import { CircleCheck, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fieldClasses =
  'h-11 w-full rounded-lg border border-input bg-background/60 px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-3 focus:ring-primary/25'

const labelClasses =
  'font-mono text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase'

const ownership = [
  'Yes - Mercedes Sprinter',
  'Yes - Ford Transit / RAM Promaster',
  'No - Need help sourcing',
]
const timelines = ['Immediately', '1-3 Months', '3-6 Months']
const budgets = ['$25,000 - $35,000', '$35,000 - $50,000', '$50,000+']

export function IntakeForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="intake" className="scroll-mt-20 border-t border-border py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="flex flex-col gap-5">
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Client Intake
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Start your build request.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            We take a limited number of conversions per year so every chassis
            gets full shop attention. Tell us about your project and we&apos;ll
            follow up with a scoped estimate and current queue availability.
          </p>
          <ul className="flex flex-col gap-3 border-t border-border pt-5">
            {[
              'Response within two business days',
              'Free power budget review on qualified builds',
              'No deposit required to receive an estimate',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <CircleCheck
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-muted-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          {status === 'sent' ? (
            <div
              role="status"
              className="flex min-h-80 flex-col items-center justify-center gap-4 text-center"
            >
              <CircleCheck className="size-10 text-primary" aria-hidden="true" />
              <h3 className="font-display text-2xl font-bold tracking-tight">
                Build request received.
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Thanks for reaching out. A builder will review your specs and
                reply with an estimate and current queue availability.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={labelClasses}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Alex Mercer"
                    className={fieldClasses}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={labelClasses}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className={fieldClasses}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 019-4472"
                    className={fieldClasses}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="van" className={labelClasses}>
                    Do you already own a van?
                  </label>
                  <select id="van" name="van" required defaultValue="" className={fieldClasses}>
                    <option value="" disabled>
                      Select one
                    </option>
                    {ownership.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="timeline" className={labelClasses}>
                    Target Start Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {timelines.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className={labelClasses}>
                    Estimated Conversion Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {budgets.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="notes" className={labelClasses}>
                  Project Notes / Custom Requirements
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={5}
                  placeholder="Layout ideas, power needs, travel plans, seasonal use..."
                  className="w-full resize-y rounded-lg border border-input bg-background/60 p-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-3 focus:ring-primary/25"
                />
              </div>

              {status === 'error' && (
                <p role="alert" className="text-sm text-destructive">
                  Something went wrong sending your request. Please try again
                  or email us directly.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === 'sending'}
                className="h-12 w-full font-display text-base font-bold tracking-wide"
              >
                {status === 'sending' ? (
                  <>
                    <LoaderCircle
                      className="size-4 animate-spin"
                      aria-hidden="true"
                    />
                    Submitting
                  </>
                ) : (
                  'Submit Build Request'
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
