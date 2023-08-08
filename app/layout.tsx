import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from '@components'

export const metadata: Metadata = {
  title: `Stoyan's Car Venue`,
  description: 'Discover the best cars at the best prices in the world at my car shop.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
