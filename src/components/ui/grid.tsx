// types
import { ReactNode } from 'react'

// utils
import { cn } from '@/lib/utils/cn'

export const Grid = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <ul
      className={cn(
        'xs:grid-cols-2 grid h-full grid-cols-1 gap-x-4 sm:grid-cols-4',
        className
      )}
    >
      {children}
    </ul>
  )
}
