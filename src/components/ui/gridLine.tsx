"use client";

// types
import { ReactNode } from "react";

// components
import { Grid } from "@/components/ui/grid";

// utils
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export const VerticalGridLine = ({
  size,
  dashed,
}: {
  size?: "sm" | "md" | "lg";
  dashed?: boolean;
}) => {
  // return position
  let position: "top" | "bottom" = Math.random() < 0.5 ? "top" : "bottom";

  let verticalLineStyles = cva("absolute h-full border-grid", {
    variants: {
      size: {
        sm: "border-l",
        md: "border-l-2",
        lg: "border-l-[3px]",
      },
      dashed: {
        true: "border-dashed",
      },
      position: {
        top: "top-0",
        bottom: "bottom-0",
      },
    },
    defaultVariants: {
      size: "md",
      dashed: false,
      position: position,
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100%" }}
      transition={{
        opacity: { duration: 0.2 },
        height: { duration: Math.random() * 1.5 },
      }}
      className={verticalLineStyles({ size, dashed, position })}
    />
  );
};

export const HorizontalGridLine = ({
  size,

  dashed,
}: {
  size?: "sm" | "md" | "lg";
  dashed?: boolean;
}) => {
  // return position
  let position: "left" | "right" = Math.random() < 0.5 ? "left" : "right";

  let horizontalGridStyles = cva("absolute w-full border-grid", {
    variants: {
      size: {
        sm: "border-t",
        md: "border-t-2",
        lg: "border-t-[3px]",
      },
      dashed: {
        true: "border-dashed",
      },
      position: {
        left: "left-0",
        right: "right-0",
      },
    },
    defaultVariants: {
      size: "md",
      dashed: false,
      position: position,
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100%" }}
      transition={{
        opacity: { duration: 0.2 },
        height: { duration: Math.random() * 1.5 },
      }}
      className={horizontalGridStyles({ size, dashed, position })}
    />
  );
};

// export const GridLineWrapper = ({
//   children,
//   className,
// }: {
//   children: ReactNode;
//   className: string;
// }) => {
//   return (
//     <Grid>
//       <div
//         className={cn(
//           "py-0.5 overflow-hidden flex flex-col gap-2 px-4",
//           className
//         )}
//       >
//         <div className="relative">
//           <HorizontalGridLine size="sm" dashed />
//         </div>
//         {children}
//         <div className="relative">
//           <HorizontalGridLine size="sm" dashed />
//         </div>
//       </div>
//     </Grid>
//   );
// };

export const GridLineWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Grid>
      <div
        className={cn(
          "flex flex-col gap-2 overflow-hidden px-4 py-0.5",
          className,
        )}
      >
        <div className="relative">
          <HorizontalGridLine size="sm" dashed />
        </div>
        {children}
        <div className="relative">
          <HorizontalGridLine size="sm" dashed />
        </div>
      </div>
    </Grid>
  );
};
