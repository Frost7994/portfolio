"use client";

// state
import { useState } from "react";

// base
import { X } from "lucide-react";

// components
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// utils
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

// animations
const MotionCard = motion(Card);

// component
const Skeleton = ({ className, id }: { className?: string; id: string }) => {
  return (
    <motion.div
      layout
      layoutId={id}
      className={cn("h-2 w-1/2 rounded-md bg-muted", className)}
    />
  );
};

export const LayoutAnimation = () => {
  // data
  const cards = [
    { id: "motion-card-one", styles: "col-span-2" },
    { id: "motion-card-two", styles: "col-span-1" },
    { id: "motion-card-three", styles: "col-span-1" },
    { id: "motion-card-four", styles: "col-span-2" },
  ];

  // state
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="not-prose mb-4 rounded-md border bg-gray-100 p-2 dark:bg-gray-900">
      <div className="relative grid grid-cols-3 gap-4 rounded-md bg-background p-4">
        {cards.map((card) => (
          <MotionCard
            layout
            layoutId={card.id}
            key={card.id}
            onClick={() => setSelectedId(card.id)}
            className={cn(
              "flex cursor-pointer flex-col justify-between gap-8",
              card.styles
            )}
          >
            <CardHeader>
              <Skeleton id={`${card.id}-header`} />
            </CardHeader>
            <CardFooter className="flex flex-col items-baseline gap-2">
              <Skeleton id={`${card.id}-subheader`} className="w-3/4" />
              <Skeleton id={`${card.id}-content`} className="w-2/4" />
            </CardFooter>
          </MotionCard>
        ))}

        <AnimatePresence initial={false}>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-background/80 px-8"
            >
              <MotionCard
                layout
                layoutId={selectedId}
                className={cn(
                  "flex w-full max-w-80 flex-col gap-8 overflow-hidden"
                )}
              >
                <CardHeader>
                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setSelectedId(null)}
                    >
                      <X className="size-4" />
                    </Button>
                  </div>
                  <Skeleton id={`${selectedId}-header`} />
                </CardHeader>
                <CardFooter className="flex flex-col items-baseline gap-2">
                  <Skeleton id={`${selectedId}-subheader`} className="w-3/4" />
                  <Skeleton
                    id={`${selectedId}-content`}
                    className="h-8 w-full"
                  />
                  <Skeleton
                    id={`${selectedId}-content-2`}
                    className="h-4 w-full"
                  />
                </CardFooter>
              </MotionCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
