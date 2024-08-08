// components
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

// utils
import { cn } from "@/lib/utils/cn";

// styling
import {
  cardWrapperStyles,
  footerEyebrowStyles,
  footerHeaderStyles,
  footerSubheaderStyles,
} from "@/styles/showcaseCardStyles";

// data
const technologies = [
  "NextJS",
  "TailwindCSS",
  "Prisma",
  "Vercel",
  "Northflank",
  "React",
  "NodeJS",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
];

export const BioCard = () => {
  return (
    <Card className={cn(cardWrapperStyles)}>
      <CardHeader className="flex-row gap-2">
        <div className="h-full w-0.5 rounded-full bg-brand" />
        <div>
          <p className={cn(footerEyebrowStyles)}>Welcome!</p>
          <h3 className={cn(footerHeaderStyles)}>Hey there, I&apos;m Tommy!</h3>
        </div>
      </CardHeader>

      <CardFooter className="flex-col items-start gap-2">
        <p
          className={cn(
            footerSubheaderStyles,
            "line-clamp-none text-pretty text-sm"
          )}
        >
          I&apos;m a{" "}
          <span className="text-secondary-500">software engineer</span> based in
          Dublin. I love building full stack applications and learning new
          technologies. Some I use are:
        </p>

        {/* marquee */}
        <div
          className="w-full overflow-clip"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
          }}
        >
          {/* marquee text tarck */}
          <ul className="flex w-max animate-marquee gap-3 pl-4">
            {technologies.map((t) => (
              <li key={t} className="rounded-md border px-3 py-1">
                <p className="text-xs font-medium text-muted-foreground md:text-sm">
                  {t}
                </p>
              </li>
            ))}
            {technologies.map((t) => (
              <li
                key={t}
                aria-hidden="true"
                className="rounded-md border px-3 py-1"
              >
                <p className="text-xs font-medium text-muted-foreground md:text-sm">
                  {t}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </CardFooter>
    </Card>
  );
};
