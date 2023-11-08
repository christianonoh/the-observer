import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
        <link rel="apple-touch-icon" sizes="76x76" href="/public/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/public/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/public/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/public/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/public/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
