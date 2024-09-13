// components
import { Providers } from '@/components/layout/providers'
import { Toaster } from '@/components/ui/sonner'

// utils
import { cn } from '@/lib/utils/cn'

// styling
import { DM_Sans } from 'next/font/google'
import '@/styles/globals.css'

// font
const font = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'grid min-h-screen grid-rows-1 antialiased',
          font.className
        )}
      >
        <Providers>
          <main>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
