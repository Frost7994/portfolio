"use client";

// data
import { CARDS } from "@/data";

// state
import { useEffect } from "react";

// utils
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import useMeasure from "react-use-measure";
import { useWidthStore } from "@/store/useWidthStore";
import { useFilterStore } from "@/store/useFilterStore";
import { useIntro } from "@/lib/hooks/useIntro";

export const ShowcaseGrid = () => {
  // measure destructure
  const [ref, { width }] = useMeasure();

  // store destructure
  const storeWidth = useWidthStore((state) => state.width);
  const setWidth = useWidthStore((state) => state.setWidth);
  const filter = useFilterStore((state) => state.filter);

  // filter cards
  const cards = [
    ...CARDS.filter((c) => c.category === filter),
    ...CARDS.filter((c) => c.category !== filter),
  ];

  // effects
  useEffect(() => {
    setWidth(width);
  }, [width, setWidth]);

  // intro
  const showAnimation = useIntro();

  return (
    <motion.ul
      initial={{ opacity: showAnimation ? 0 : 1, y: showAnimation ? 20 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: showAnimation ? 1 : 0 }}
      className="relative grid grid-flow-dense grid-cols-2 gap-4 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8"
      style={{ gridAutoRows: `${storeWidth}px` }}
    >
      {/* width finder */}
      <li
        ref={ref}
        className="absolute w-full"
        style={{ gridColumn: "1/1", gridRow: "1/1" }}
      />

      <AnimatePresence initial={false} mode="popLayout">
        {/* cards */}
        {cards.map((c) => {
          return (
            <motion.li
              key={c.id}
              layout
              layoutId={c.id}
              className={cn(c.col, c.row)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {c.content}
            </motion.li>
          );
        })}
      </AnimatePresence>
    </motion.ul>
  );
};
