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
    <html lang='en'>
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  )
}
