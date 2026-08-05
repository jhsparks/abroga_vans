import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })
const _archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abroga Vans | Custom Off-Grid Camper Van Conversions',
  description:
    'Bespoke Mercedes Sprinter and Ford Transit camper van conversions with marine-grade 12V electrical systems, professional cabinetry, and off-grid climate and water systems. Crafted in East Greenville, PA.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
