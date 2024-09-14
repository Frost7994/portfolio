// types
import type { ReactNode } from 'react'

// utils
import { cn } from '@/lib/utils/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        'container mx-auto h-full w-full sm:max-w-screen-sm md:max-w-screen-md md:px-8 lg:max-w-screen-lg xl:max-w-screen-xl',
        className
      )}
    >
      {children}
    </div>
  )
}
