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

//* hardcoded data
const POSTS = [
  {
    slug: 'introduction-to-mdx',
    title: 'Introduction to MDX',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam velit magni nostrum blanditiis.',
    eyebrow: 'CTAs',
    readingTime: '2 min read',
    publishedAt: '3 days ago'
  },
  {
    slug: 'frameworks-vs-libraries',
    title: 'Frameworks vs Libraries',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam velit magni nostrum blanditiis.',
    eyebrow: 'React',
    readingTime: '3 min read',
    publishedAt: '2 days ago'
  },
  {
    slug: 'finding-the-right-state-management-library',
    title: 'Finding the Right State Management Library',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam velit magni nostrum blanditiis.',
    eyebrow: 'Zustand',
    readingTime: '4 min read',
    publishedAt: '1 day ago'
  }
]

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
      <div className='relative @container'>
        <div
          className={cn('embla__viewport', 'overflow-hidden')}
          ref={emblaRef}
        >
          <div className={cn('embla__container', '-ml-4 flex')}>
            {POSTS.map(post => (
              <div
                key={post.slug}
                className={cn(
                  'embla__slide',
                  'min-w-0 shrink-0 grow-0 basis-full pl-4',
                  'basis-2/3 @[400px]:basis-2/3'
                )}
              >
                <div className='flex h-full flex-col justify-between rounded-md border bg-background p-4'>
                  <div>
                    <div className='w-fit rounded-md bg-brand/25 px-1 py-0.5 text-xs font-medium text-brand'>
                      <p>{post.eyebrow}</p>
                    </div>
                    <h4 className='mt-1 line-clamp-2 text-lg font-semibold @[400px]:text-xl'>
                      {post.title}
                    </h4>
                  </div>
                  <div>
                    <p className='line-clamp-2 text-xs text-muted-foreground @[400px]:text-sm'>
                      {post.description}
                    </p>
                    <div className='mt-2 flex items-center justify-between'>
                      <p className='text-xs'>{post.readingTime}</p>
                      <p className='text-xs'>{post.publishedAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='absolute inset-y-0 left-0 h-full w-4 bg-gradient-to-r from-background to-transparent @[400px]:w-8' />
        <div className='absolute inset-y-0 right-0 h-full w-4 bg-gradient-to-l from-background to-transparent @[400px]:w-8' />
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
