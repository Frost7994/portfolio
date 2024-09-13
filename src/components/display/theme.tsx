'use client'

// base
import { Sun, Moon } from 'lucide-react'

// components
import { Button } from '@/components/ui/button'

// utils
import { useTheme } from 'next-themes'

export const ThemeButton = () => {
  // theme destructure
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      variant='outline'
    >
      {isDark ? (
        <Sun className='mr-1 size-5' />
      ) : (
        <Moon className='mr-1 size-5' />
      )}
      <span>Change theme</span>
    </Button>
  )
}
