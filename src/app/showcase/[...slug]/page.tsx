// components
import { BlogLayout } from "@/components/sections/blog/blogLayout";

// utils
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getPost } from "@/lib/utils/getPost";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";

export async function generateStaticParams() {
  // file with subfiles
  const files = fs.readdirSync(path.join(process.cwd(), "./showcase"));

  const projects = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(
      path.join(process.cwd(), `./showcase/${slug}.mdx`),
      "utf8"
    );

    const { data } = matter(fileContents);

    return {
      slug,
      data,
    };
  });

  const paths = projects.map((project) => ({ params: { slug: project.slug } }));

  return paths;
}

const generatePost = async (slug: string) => {
  const post = getPost({ slug });

  const mdxSource = await serialize(post.content, {
    mdxOptions: { rehypePlugins: [rehypePrism] },
  });

  return {
    ...post.data,
    readingTime: readingTime(post.fileContents).text,
    content: mdxSource,
  };
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] };
}) => {
  return {
    title: `Tommy | ${params.slug[0]
      .split("")[0]
      .toLocaleUpperCase()}${params.slug[0].slice(1)}`,
    description: "Tommy Byrne's personal website.",
  };
};

const Project = async ({ params }: { params: { slug: string[] } }) => {
  const slug = params.slug[params.slug.length - 1];
  const post = await generatePost(slug);

  return <BlogLayout post={post} />;
};

export default Project;
