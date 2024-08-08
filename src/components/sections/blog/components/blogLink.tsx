// components
import Link from "next/link";

export const BlogLink = ({
  category,
  slug,
  label,
}: {
  category: string;
  slug: string;
  label: string;
}) => {
  return (
    <Link
      href={`/showcase/${category}/${slug}`}
      className="not-prose cursor-pointer text-brand underline"
    >
      {label}
    </Link>
  );
};
