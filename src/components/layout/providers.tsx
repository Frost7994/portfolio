'use client'

// state
import { ReactNode, useState, useEffect } from 'react'

// providers
import { ThemeProvider } from 'next-themes'

export const Providers = ({ children }: { children: ReactNode }) => {
  // state
  const [mounted, setMounted] = useState<boolean>(false)

  // effects
  useEffect(() => setMounted(true), [])

  // render
  if (!mounted) return null

  return (
    <ThemeProvider
      attribute='class'
      enableSystem
      defaultTheme='dark'
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
