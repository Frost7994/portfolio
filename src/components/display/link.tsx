'use client'

// types
import type { ButtonProps } from '@/components/ui/button'

// components
import { Button } from '@/components/ui/button'

export const LinkButton = (props: ButtonProps) => {
  // destructuring the props
  const { children, ...rest } = props

  return (
    <Button variant='link' {...rest}>
      {children}
    </Button>
  )
}
