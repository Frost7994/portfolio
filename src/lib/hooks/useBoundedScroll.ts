// state
import { useEffect, RefObject } from "react";

// utils
import { useTransform, useScroll, useMotionValue } from "framer-motion";
import { clamp } from "@/lib/utils/clamp";

export const useBoundedScroll = ({
  bounds,
  reference,
}: {
  bounds: number;
  reference?: RefObject<HTMLElement>;
}) => {
  // let bounds = 50;
  let { scrollY } = useScroll({
    container: reference ? reference : undefined,
    layoutEffect: false,
  });
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );

  useEffect(() => {
    const updateMotionValue = (val: number) => {
      let prev = scrollY.getPrevious();
      let diff = val - (prev || 0);
      let newVal = scrollYBounded.get() + diff;

      scrollYBounded.set(
        clamp({
          number: newVal,
          min: 0,
          max: bounds,
        })
      );
    };

    let unsubscribe = scrollY.on("change", (current) =>
      updateMotionValue(current)
    );

    return () => unsubscribe();
  }, [scrollY, scrollYBounded, bounds]);

  return {
    scrollYBounded,
    scrollYBoundedProgress,
  };
};
