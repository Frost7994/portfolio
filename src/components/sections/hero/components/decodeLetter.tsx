"use client";

// state
import { useState, useEffect, useMemo } from "react";

// utils
import { motion } from "framer-motion";

// data
import { KEYS } from "@/data";

export const DecodeLetter = ({
  letter,
  speed,
  noOfLetters,
  delay,
}: {
  letter: string;
  speed: number;
  noOfLetters: number;
  delay: number;
}) => {
  // variants
  let itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  let [isMounted, setIsMounted] = useState(false);
  let [filteredLetters, setFilteredLetters] = useState(
    KEYS.filter((key) => key !== letter)
  );
  let [randomLetter, setRandomLetter] = useState(
    filteredLetters[Math.floor(Math.random() * filteredLetters.length)]
  );

  let iterableLetters = useMemo(
    () => [
      ...Array.from({ length: noOfLetters }, () => {
        return filteredLetters[
          Math.floor(Math.random() * filteredLetters.length)
        ];
      }),
      letter,
    ],
    [filteredLetters, letter, noOfLetters]
  );

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsMounted(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  useEffect(() => {
    // iterate through the letters every x seconds and set the random letter
    let interval = setInterval(() => {
      if (!isMounted) return;

      if (iterableLetters.length > 0) {
        setRandomLetter(iterableLetters.shift()!);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [speed, iterableLetters, isMounted]);

  return <motion.span variants={itemVariants}>{randomLetter}</motion.span>;
};
