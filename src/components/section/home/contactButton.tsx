'use client'

// components
import { Button } from '@/components/ui/button'

// utils
import { toast } from '@/lib/utils/toast'

export const ContactButton = () => {
  return (
    <Button size='sm' onClick={() => toast('Thanks for reaching out!')}>
      Contact me
    </Button>
  )
}
