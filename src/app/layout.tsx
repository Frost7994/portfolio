// components
import { Container } from '@/components/ui/container'
import { Grid } from '@/components/ui/grid'
import { VerticalGridLine } from '@/components/ui/gridLine'
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
          'relative grid min-h-screen grid-rows-1 antialiased',
          font.className
        )}
      >
        {/* grid animation */}
        <div className='absolute inset-0 mx-auto'>
          <Container>
            <Grid>
              {Array(4)
                .fill(' ')
                .map((_, i) => (
                  <li key={i} className='flex justify-between'>
                    <div className='flex gap-4'>
                      <div className='relative'>
                        <VerticalGridLine
                          position={Math.random() > 0.5 ? 'top' : 'bottom'}
                        />
                      </div>
                      <div className='relative'>
                        <VerticalGridLine
                          size='sm'
                          dashed
                          position={Math.random() > 0.5 ? 'top' : 'bottom'}
                        />
                      </div>
                    </div>
                    <div className='flex gap-4'>
                      <div className='relative'>
                        <VerticalGridLine
                          size='sm'
                          dashed
                          position={Math.random() > 0.5 ? 'top' : 'bottom'}
                        />
                      </div>
                      <div className='relative'>
                        <VerticalGridLine
                          position={Math.random() > 0.5 ? 'top' : 'bottom'}
                        />
                      </div>
                    </div>
                  </li>
                ))}
            </Grid>
          </Container>
        </div>
        <Providers>
          <main className='relative pb-8 pt-24'>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
