// types
import { ReactNode } from "react";

// utils
import { cn } from "@/lib/utils/cn";

export const Grid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <ul
      className={cn(
        "grid h-full grid-cols-1 gap-x-4 xs:grid-cols-2 sm:grid-cols-4",
        className
      )}
    >
      {children}
    </ul>
  );
};
