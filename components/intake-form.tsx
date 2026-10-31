'use client'

import { useState } from 'react'
import { CircleCheck, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

const fieldClasses =
  'h-11 w-full rounded-lg border border-input bg-background/60 px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-3 focus:ring-primary/25'

const labelClasses =
  'font-mono text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase'

const ownership = [
  'Yes - Mercedes Sprinter',
  'Yes - Ford Transit',
  'Yes - RAM Promaster',
  'No, I need help searching for one',
]
const timelines = ['Immediately', '1-3 Months', '3-6 Months']
const budgets = ['$20,000 - $25,000', '$25,000 - $35,000', '$35,000 - $50,000', '$50,000+']

const packages = [
  'The Weekender - $20,000',
  'The Explorer - $25,000',
  'The Basecamp - $35,000',
  'Not sure yet - Need guidance',
]

const addOnGroups = [
  {
    label: 'Climate & Comfort',
    options: [
      'Webasto/Espar Air Heater',
      'Roof-Mount AC + 750Ah Battery Upgrade',
      'Roof-Mount Evaporative Cooler + 500Ah Upgrade',
      'Seat Swivels',
    ],
  },
  {
    label: 'Plumbing & Bathroom',
    options: [
      'Outdoor Shower',
      'Drinking Water Filter',
      'Cassette Toilet',
      'Incinerator Toilet',
      'Composting Toilet',
    ],
  },
  {
    label: 'Electrical & Tech',
    options: [
      'DC-DC Alternator Charging',
      '12V DC Smart TV on Swivel Mount',
      'RV-Specific Microwave',
      'Backup Camera',
    ],
  },
  {
    label: 'Exterior',
    options: ['Added Windows'],
  },
]

const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
]

export function IntakeForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    data.addOns = formData.getAll('addOns').join(', ')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Request failed')

      window.fbq?.('track', 'Lead')
      window.gtag?.('event', 'generate_lead', {
        lead_source: 'website_form',
      })
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="package" className={labelClasses}>
                    Desired Package
                  </label>
                  <select
                    id="package"
                    name="package"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {packages.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="state" className={labelClasses}>
                    What State Do You Live In?
                  </label>
                  <select
                    id="state"
                    name="state"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {usStates.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className={labelClasses}>Add-Ons (Optional)</span>
                <div className="grid gap-5 rounded-lg border border-border bg-background/40 p-4 sm:grid-cols-2">
                  {addOnGroups.map((group) => (
                    <fieldset key={group.label} className="flex flex-col gap-2.5">
                      <legend className="mb-1 font-mono text-[0.65rem] font-semibold tracking-[0.14em] text-primary uppercase">
                        {group.label}
                      </legend>
                      {group.options.map((option) => (
                        <label
                          key={option}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <input
                            type="checkbox"
                            name="addOns"
                            value={option}
                            className="mt-0.5 size-4 shrink-0 rounded border-input accent-primary"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </fieldset>
                  ))}
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
                  or email us directly at abrogavans@gmail.com.
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
