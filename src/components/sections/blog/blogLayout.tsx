"use client";

// base
import { ArrowLeft } from "lucide-react";

// components
import { Container } from "@/components/ui/container";
import { MDXRemote } from "next-mdx-remote";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Components } from "./components";

// utils
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// add motion to card
const MotionCard = motion(Card);

export const BlogLayout = ({ post }: { post: any }) => {
  // prop destructure
  const { tag, title, description, author, date, readingTime, content } = post;

  // router destructure
  const router = useRouter();

  return (
    <Container className="lg:max-w-4xl xl:max-w-4xl">
      <div className="px-4">
        {/* card */}
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <CardHeader className="flex-row justify-between gap-4 space-y-0 pb-0">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                className="text-sm font-medium text-brand sm:text-base"
              >
                {tag}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="truncate text-lg font-medium sm:text-2xl"
              >
                {title}
              </motion.h2>
            </div>
            <Button variant="outline" onClick={() => router.back()}>
              <ArrowLeft className="size-5 sm:hidden" />
              <span className="hidden sm:block">Go back</span>
            </Button>
          </CardHeader>
          <CardFooter className="flex-col items-baseline">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="mb-2 line-clamp-2 text-sm text-muted-foreground xs:text-base"
            >
              {description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="text-xs text-muted-foreground xs:text-sm"
            >
              <span className="font-medium underline">{author}</span> &#183;{" "}
              {date} &#183; {readingTime}
            </motion.p>
          </CardFooter>
        </MotionCard>
        {/* blog wrapper - prose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="prose-code:hljs prose-md prose mt-4 w-full max-w-none dark:prose-invert prose-h1:mb-0 prose-h1:mt-8 prose-h2:mb-2 prose-h2:mt-8 prose-p:mt-2 prose-a:text-brand prose-blockquote:border-brand prose-blockquote:bg-brand/10 prose-blockquote:py-2 prose-blockquote:pr-2 prose-code:mb-4 prose-pre:mb-4 prose-pre:border prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900"
        >
          <MDXRemote {...content} components={Components} />
        </motion.div>
      </div>
    </Container>
  );
};
