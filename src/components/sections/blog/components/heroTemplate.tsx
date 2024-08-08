// components
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export const HeroTemplate = () => {
  return (
    <div className="not-prose border rounded-md p-2 bg-gray-100 dark:bg-gray-900">
      <div className="relative bg-background rounded-md px-6">
        <div className="mx-auto flex flex-col items-center max-w-3xl py-16 sm:py-20">
          <p className="text-sm sm:text-base text-center">
            Welcome to{" "}
            <span className="font-medium bg-brand/25 text-brand rounded-md px-1">
              Quiz
            </span>{" "}
            Mastery
          </p>
          <h1 className="text-center mt-1 sm:mt-2 text-5xl font-light tracking-tight sm:text-6xl">
            The number one platform for{" "}
            <span className="text-brand">quiz preparation.</span>
          </h1>
          <p className="text-center mt-6 text-base sm:text-lg max-w-prose text-supportive">
            Welcome to QuizMedics. Get access to 1800+ questions and prepare for
            your exams with our high-yield questions. Every question on our
            platform is verified by our team to ensure our highest quality.
          </p>
          <div className="w-full @container">
            <div className="flex flex-col @[400px]:flex-row w-full justify-center gap-2 sm:gap-4 mt-6">
              <Link
                href="/"
                className={buttonVariants({
                  className: "w-full sm:w-fit",
                })}
              >
                View Examples
              </Link>
              <Button variant="ghost" className="w-full sm:w-fit">
                Get Started &rarr;
              </Button>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center max-w-xl">
            <div className="bg-background flex flex-col gap-2 border rounded-md p-4 items-center">
              <p className="uppercase text-xs font-medium whitespace-nowrap truncate">
                pass rate
              </p>
              <span className="text-3xl font-semibold">73%</span>
              <p className="text-xs text-center text-supportive line-clamp-2">
                Watch how your pass rate increases with our platform, most users
                increasing their pass rate by 73% in the first two weeks.
              </p>
            </div>
            <div className="bg-background flex flex-col gap-2 border rounded-md p-4 items-center">
              <p className="uppercase text-xs font-medium whitespace-nowrap truncate">
                database
              </p>
              <span className="text-3xl font-semibold">1800+</span>
              <p className="text-xs text-center text-supportive line-clamp-2">
                Get access to over 1800+ questions and prepare for your exams
                with our high-yield questions.
              </p>
            </div>
            <div className="bg-background flex flex-col gap-2 border rounded-md p-4 items-center">
              <p className="uppercase text-xs font-medium whitespace-nowrap truncate">
                broad categories
              </p>
              <span className="text-3xl font-semibold">32</span>
              <p className="text-xs text-center text-supportive line-clamp-2">
                Test your knowledge in 32 different categories and prepare for
                all eventualities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
