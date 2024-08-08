"use client";

// state
import { useState } from "react";

// components
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

// component
const Skeleton = ({ className }: { className?: string }) => {
  return (
    <motion.div className={cn("h-2 w-full rounded-md bg-muted", className)} />
  );
};

// animation
const MotionCard = motion(Card);

export const ListReorderAnimation = () => {
  // state
  const [filter, setFilter] = useState("all");

  // data
  const filters = ["all", "about", "media", "projects"];

  const dataCards = [
    {
      id: "card-one",
      category: "projects",
    },
    {
      id: "card-two",
      category: "about",
    },
    {
      id: "card-three",
      category: "media",
    },
    {
      id: "card-four",
      category: "projects",
    },
    {
      id: "card-five",
      category: "media",
    },
    {
      id: "card-six",
      category: "media",
    },
    {
      id: "card-seven",
      category: "about",
    },
    {
      id: "card-eight",
      category: "media",
    },
    {
      id: "card-nine",
      category: "projects",
    },
    {
      id: "card-ten",
      category: "media",
    },
    {
      id: "card-eleven",
      category: "projects",
    },
    {
      id: "card-twelve",
      category: "media",
    },
  ];

  const cards = [
    ...dataCards.filter((c) => c.category === filter),
    ...dataCards.filter((c) => c.category !== filter),
  ];

  return (
    <div className="mb-4 not-prose rounded-md border bg-gray-100 p-2 dark:bg-gray-900">
      <div className="flex flex-col gap-4 rounded-md bg-background p-4">
        {/* filters */}
        <div className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground sm:w-fit sm:self-end">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex h-full w-full items-center justify-center whitespace-nowrap rounded-md py-1 text-xs font-medium capitalize ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 @[500px]:text-sm sm:px-3",
                "hover:text-primary",
                f === filter && "bg-background text-foreground shadow"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <AnimatePresence initial={false} mode="sync">
            {cards.map((c) => (
              <MotionCard
                key={c.id}
                layout
                layoutId={c.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4"
              >
                <CardHeader>
                  <Skeleton className="h-3" />
                </CardHeader>
                <CardFooter className="flex flex-col items-baseline gap-2">
                  <Skeleton />
                  <Skeleton />
                  <Skeleton className="w-4/5" />
                </CardFooter>
              </MotionCard>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
