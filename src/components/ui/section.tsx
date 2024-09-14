// types
import type { ReactNode } from 'react'

// utils
import { cn } from '@/lib/utils/cn'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn('py-4', className)}>
      {children}
    </section>
  )
}
