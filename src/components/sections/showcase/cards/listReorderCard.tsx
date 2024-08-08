"use client";

// base
import { ArrowRightCircle } from "lucide-react";

// components
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import Link from "next/link";

// utils
import { cn } from "@/lib/utils/cn";

// styling
import { buttonVariants } from "@/components/ui/button";
import {
  cardWrapperStyles,
  footerEyebrowStyles,
  footerHeaderStyles,
} from "@/styles/showcaseCardStyles";

export const ListReorderCard = () => {
  return (
    <Card className={cn(cardWrapperStyles)}>
      <CardHeader className="space-y-0">
        <p className={cn(footerEyebrowStyles)}>Component</p>
        <h2 className={cn(footerHeaderStyles, "")}>List Reorder</h2>
      </CardHeader>

      <CardFooter className="flex flex-row sm:justify-end">
        <Link
          href="/showcase/components/list-reorder-animation"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "inline-flex h-8 w-full gap-2 rounded-md px-3 text-xs",
            "sm:h-9 sm:w-fit sm:px-4 sm:py-2 sm:text-sm",
            "lg:w-full",
            "xl:w-fit"
          )}
        >
          <span>See project</span>
          <ArrowRightCircle className="hidden size-4 sm:block" />
        </Link>
      </CardFooter>
    </Card>
  );
};
