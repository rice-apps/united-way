import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBarComp from './NavbarComp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'United Way Impact Calculator',
  description: 'Calculate the impact of your donation to United Way!',
  openGraph: {
    title: 'United Way Impact Calculator',
    description: 'Calculate the impact of your donation to United Way!',
    type: 'website',
    locale: 'en_US',
    url: 'rice.org',
    siteName: 'United Way Impact Calculator',
    // images: [
    //   {
    //     url: "https://united-way-impact-calculator.vercel.app/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "United Way Impact Calculator",
    //   },
    // ],
  },
  authors: [
    {
      name: 'RiceApps',
      url: 'https://github.com/rice-apps/',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="default">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
