"use client";

// base
import { CirclePlay } from "lucide-react";

// components
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

// utils
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

// styling
import {
  bgIconStyles,
  bgIconWrapperStyles,
  cardWrapperStyles,
  footerEyebrowStyles,
  footerHeaderStyles,
  footerSubheaderStyles,
  footerWrapperStyles,
  headerIconStyles,
} from "@/styles/showcaseCardStyles";

const Music = () => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: (size: number) => ({
      height: `${12.5 * size}%`,
    }),
    animate: {
      height: ["50%", "100%", "40%"],
      transition: {
        duration: 0.9,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.ul
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="hidden h-6 items-center gap-1 sm:flex sm:h-4 sm:gap-0.5"
    >
      {[
        { id: "bar-1", custom: 5, size: "h-1" },
        { id: "bar-2", custom: 8, size: "h-1" },
        { id: "bar-3", custom: 7, size: "h-1" },
        { id: "bar-4", custom: 5, size: "h-1" },
      ].map((bar) => (
        <motion.li
          key={bar.id}
          variants={itemVariants as any}
          custom={bar.custom}
          className={cn("w-1 rounded-md bg-brand", bar.size)}
        />
      ))}
    </motion.ul>
  );
};

export const SpotifyCard = () => {
  return (
    <Card className={cn(cardWrapperStyles)}>
      <div className={cn(bgIconWrapperStyles)}>
        <CirclePlay className={cn(bgIconStyles)} />
      </div>

      <CardHeader className="flex-row justify-end">
        <CirclePlay className={cn(headerIconStyles)} />
      </CardHeader>

      <CardFooter>
        <div className={cn(footerWrapperStyles)}>
          <div className="flex items-center gap-1">
            <Music />
            <p className={cn(footerEyebrowStyles)}>
              <span className="hidden sm:inline-block">Online.</span> Listening
              to
            </p>
          </div>
          <h3 className={cn(footerHeaderStyles)}>Hum Hallelujah</h3>
          <p className={cn(footerSubheaderStyles)}>Fall Out Boy</p>
        </div>
      </CardFooter>
    </Card>
  );
};
