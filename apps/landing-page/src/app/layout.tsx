import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stewardly Kenya',
  description: 'The digital lamp on the hill',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
