// types
import { ReactNode } from "react";

// utils
import { cn } from "@/lib/utils/cn";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "container mx-auto h-full w-full xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl",

        className,
      )}
    >
      {children}
    </div>
  );
};
