import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import '/styles/globals.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

const work = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Observer',
  description: 'Discover a wealth of insights and stories on diverse topics. Dive into a world of knowledge and experiences through this engaging personal blog.',
  authors: {
    name: 'Christian Onoh',
    url: 'https://github.com/christianonoh',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={work.className}>
        <Header />
        <Banner />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
