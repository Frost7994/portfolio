"use client";

// components
import { DecodeLetter } from "@/components/sections/hero/components/decodeLetter";

// utils
import { motion } from "framer-motion";

export const DecodeWord = ({
  word,
  duration = 450,
  speed = 40,
  delay = 900,
  stagger = 0.025,
  codeStagger = 1,
}: {
  word: string;
  duration?: number;
  speed?: number;
  delay?: number;
  stagger?: number;
  codeStagger?: number;
}) => {
  let letters = word.split("");

  let containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay / 1000,
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => {
        return (
          <DecodeLetter
            key={index}
            letter={letter}
            speed={speed}
            noOfLetters={duration / speed + index * codeStagger}
            delay={delay}
          />
        );
      })}
    </motion.span>
  );
};
