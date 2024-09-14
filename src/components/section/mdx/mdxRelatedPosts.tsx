'use client'

// state
import { useState, useCallback, useEffect } from 'react'

// base
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'

// components
import { Button } from '@/components/ui/button'

// utils
import { cn } from '@/lib/utils/cn'

// types
type EmblaCarouselType = UseEmblaCarouselType[1]

export const MDXRelatedPosts = () => {
  // embla destructrue
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  // state
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi?.canScrollPrev())
    setNextBtnDisabled(!emblaApi?.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={cn('embla', 'flex flex-col gap-4')}>
      <div className={cn('embla__viewport', 'overflow-hidden')} ref={emblaRef}>
        <div className={cn('embla__container', '-ml-4 flex')}>
          {[1, 2, 3].map(post => (
            <div
              key={post}
              className={cn(
                'embla__slide',
                'min-w-0 shrink-0 grow-0 basis-full pl-4',
                'basis-2/3'
              )}
            >
              <div className='flex h-64 flex-col justify-center rounded-md border bg-background p-4'>
                Slide {post}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={cn('embla__controls', 'flex items-center justify-between')}
      >
        <Button
          className={cn('embla__button__prev', 'size-8 rounded-full p-0')}
          variant='outline'
          disabled={prevBtnDisabled}
          onClick={onPrevButtonClick}
        >
          <ChevronLeft className='size-4' />
        </Button>
        <Button
          className={cn('embla__button__next', 'size-8 rounded-full p-0')}
          variant='outline'
          disabled={nextBtnDisabled}
          onClick={onNextButtonClick}
        >
          <ChevronRight className='size-4' />
        </Button>
      </div>
    </div>
  )
}
