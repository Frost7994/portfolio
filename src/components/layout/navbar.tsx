'use client'

// data
import { LINKS } from '@/data/layout'

// base
import { Menu } from 'lucide-react'

// components
import { Container } from '@/components/ui/container'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

// utils
import { cn } from '@/lib/utils/cn'
import { useTheme } from 'next-themes'

export const Navbar = () => {
  // theme destructure
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <nav
      className={cn(
        'h-24',
        'fixed z-50 w-full border-b-2 border-grid',
        // 'bg-background/80 backdrop-blur-lg',
        'bg-background'
      )}
    >
      <div className={cn('h-20', 'border-grid-light border-b border-dashed')}>
        <Container>
          <div className='flex h-full w-full items-center justify-between'>
            <Link href='/' className='flex h-full items-center gap-2'>
              <div className='flex aspect-square items-center justify-center rounded-sm border-2 p-2'>
                <p className='text-lg font-medium leading-5'>TB</p>
              </div>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon' className='relative'>
                  <Menu className='size-5' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                      portfolio
                    </p>
                    <p className='text-xs leading-none text-muted-foreground'>
                      tommybyrne9@gmail.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {LINKS.map(link => (
                    <DropdownMenuItem key={link.id} asChild>
                      <Link href={link.href}>
                        {link.label}
                        <DropdownMenuShortcut>
                          {link.shortcut}
                        </DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={e => {
                    e.preventDefault()
                    setTheme(isDark ? 'light' : 'dark')
                  }}
                >
                  Toggle theme
                  <DropdownMenuShortcut>⇧⌘T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Container>
      </div>
    </nav>
  )
}
