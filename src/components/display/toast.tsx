'use client'

// types
import type { ButtonProps } from '@/components/ui/button'

// components
import { Button } from '@/components/ui/button'

// utils
import { toast } from '@/lib/utils/toast'

export const ToastButton = (props: ButtonProps & { message: string }) => {
  // destructuring the props
  const { message, children, ...rest } = props

  return (
    <Button onClick={() => toast(message)} {...rest}>
      {children}
    </Button>
  )
}
