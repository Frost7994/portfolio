// components
import { Container } from '@/components/ui/container'
import { GridLine, GridLineWrapper } from '@/components/ui/gridLine'
import { Section } from '@/components/ui/section'

// utils
import { notFound } from 'next/navigation'
import { getMDXEntries } from '@/lib/mdx'

const acceptedBlogs = ['projects', 'posts']

export async function generateMetadata({
  params
}: {
  params: { blog: string }
}) {
  if (!acceptedBlogs.includes(params.blog)) {
    return notFound()
  }
  return {
    title: `Tommy | ${params.blog}`,
    description: 'Generated by NextJS, Tailwind and Shadcn'
  }
}

const Blog = async ({ params }: { params: { blog: string } }) => {
  if (!acceptedBlogs.includes(params.blog)) {
    return notFound()
  }
  const { blog } = params
  const blogs = await getMDXEntries({ dir: blog })

  console.log(blogs.length)

  return (
    <div>
      <Section className='space-y-4' id={`${blog}-featured`}>
        <GridLine position='top' />
        <Container>
          <GridLineWrapper className='col-span-1 xs:col-span-2 sm:col-span-4'>
            <p>Featured entries</p>
          </GridLineWrapper>
        </Container>
        <GridLine position='bottom' />
      </Section>

      <Section className='space-y-4' id={`${blog}-list`}>
        <GridLine position='top' />
        <Container>
          <div className='flex flex-col gap-2'>
            <GridLineWrapper className='col-span-1 xs:col-span-2 sm:col-start-3'>
              <p>{blog} list</p>
            </GridLineWrapper>
          </div>
        </Container>
        <GridLine position='bottom' />
      </Section>
    </div>
  )
}

export default Blog