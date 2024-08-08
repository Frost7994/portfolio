import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPost = ({ slug }: { slug: string }) => {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), `./showcase/${slug}.mdx`),
    // path.join(process.cwd(), `./showcase/${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(fileContents);
  return {
    fileContents,
    content,
    data,
  };
};
