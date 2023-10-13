import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '../../components/Navbar'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Girts Karcevskis',
  description: 'Portfolio page for Girts Karcevskis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
      <Analytics />
        </body>
    </html>
  )
}
