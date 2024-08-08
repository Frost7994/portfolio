"use client";

// components
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ThemeSwitch } from "../ui/theme";

// utils
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { useBoundedScroll } from "@/lib/hooks/useBoundedScroll";
import { cn } from "@/lib/utils/cn";

export const Navbar = () => {
  // scroll destructure
  let { scrollYBoundedProgress } = useBoundedScroll({
    bounds: 50,
  });

  return (
    <motion.nav
      style={{
        height: useTransform(scrollYBoundedProgress, [0, 1], [96, 80]),
        backgroundColor: useMotionTemplate`hsla(var(--background)/ ${useTransform(
          scrollYBoundedProgress,
          [0, 1],
          [1, 0.3],
        )})`,
      }}
      className={cn(
        "fixed z-10 w-full border-b-2 border-grid",
        "bg-background/80 backdrop-blur-lg",
      )}
    >
      <motion.div
        style={{
          height: useTransform(scrollYBoundedProgress, [0, 1], [80, 64]),
        }}
        className="border-grid-light border-b border-dashed"
      >
        <Container>
          <div className="flex h-full w-full items-center justify-between">
            {/* logo */}

            <Link href="/" className="flex h-full items-center gap-2">
              <motion.div
                style={{
                  originX: 0,
                  scale: useTransform(scrollYBoundedProgress, [0, 1], [1, 0.8]),
                }}
                className="flex aspect-square items-center justify-center rounded-sm border-2 p-2"
              >
                <p className="text-lg font-medium leading-5">TB</p>
              </motion.div>
            </Link>
            <ThemeSwitch />
          </div>
        </Container>
      </motion.div>
    </motion.nav>
  );
};
