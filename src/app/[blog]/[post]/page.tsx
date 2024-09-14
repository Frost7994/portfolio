// components
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'
import { Grid } from '@/components/ui/grid'
import { GridLine } from '@/components/ui/gridLine'

import { MDXContent } from '@/components/section/mdx/mdxContent'
import { MDXRelatedPosts } from '@/components/section/mdx/mdxRelatedPosts'

// utils
import { notFound } from 'next/navigation'
import { getMDXPost, getMDXPosts } from '@/lib/mdx'
import { cn } from '@/lib/utils/cn'

type PostProps = {
  params: { blog: string; post: string }
}

// static generation
export const generateStaticParams = async ({ params }: PostProps) => {
  const posts = await getMDXPosts({ dir: 'posts' })
  const slugs = posts.map(post => ({ slug: post.slug }))
  return slugs
}

// create metadata for each post
export const generateMetadata = async ({
  params
}: {
  params: { post: string }
}) => {
  return {
    title: `Tommy | ${params.post}`,
    description: "Tommy Byrne's personal website portfolio"
  }
}

const Post = async ({ params }: PostProps) => {
  const { blog, post } = params
  const blogPost = await getMDXPost({ dir: blog, slug: post })

  if (!blogPost) {
    return notFound()
  }

  const { metadata, content } = blogPost
  const { author, readingTime, stack, title, tags, description } = metadata

  return (
    <div>
      <Section className='space-y-4' id='a'>
        <GridLine position='top' />
        <Container>
          <Grid>
            <div className='px-4'>Post meta</div>
          </Grid>
        </Container>
      </Section>

      <Section id='a'>
        <Container>
          <Grid className='lg:grid-cols-8'>
            <div
              className={cn(
                'col-span-1 min-w-full px-4 xs:col-span-2 sm:col-span-4 lg:col-span-4 lg:col-start-3',
                'prose dark:prose-invert',
                'prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:bg-accent prose-pre:px-5 prose-pre:py-4 prose-pre:text-sm',
                'prose-code:rounded-lg prose-code:px-1 prose-code:py-0.5'
              )}
            >
              <MDXContent source={content} />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section className='space-y-4' id='a'>
        <Container>
          <Grid>
            <div className='col-span-4 px-4'>
              <MDXRelatedPosts />
            </div>
          </Grid>
        </Container>
        <GridLine position='bottom' />
      </Section>
    </div>
  )
}

export default Post
