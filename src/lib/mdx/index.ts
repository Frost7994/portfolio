// utils
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type MDXPost = {
  metadata: MDXPostMetadata
  content: string
}

export type MDXPostMetadata = {
  title?: string
  description?: string
  author?: string
  tags?: string[]
  stack?: string[]
  publishedAt?: string
  readingTime: string
  slug: string
}

export const getMDXPost = async ({
  slug,
  dir
}: {
  slug: string
  dir: string
}): Promise<MDXPost | null> => {
  const rootDirectory = path.join(process.cwd(), 'content', dir)

  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' })
    const { data, content } = matter(fileContents)

    return {
      metadata: { ...data, readingTime: readingTime(content).text, slug },
      content
    }
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getMDXPosts = async ({
  limit,
  dir
}: {
  limit?: number
  dir: string
}): Promise<MDXPostMetadata[]> => {
  const rootDirectory = path.join(process.cwd(), 'content', dir)
  const files = fs.readdirSync(rootDirectory)

  const posts = files
    .map(file => getMDXPostMetadata({ filepath: file, dir }))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  return limit ? posts.slice(0, limit) : posts
}

export const getMDXPostMetadata = ({
  filepath,
  dir
}: {
  filepath: string
  dir: string
}): MDXPostMetadata => {
  const rootDirectory = path.join(process.cwd(), 'content', dir)

  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const { data } = matter(fileContent)

  return {
    ...data,
    readingTime: readingTime(fileContent).text,
    slug
  }
}
