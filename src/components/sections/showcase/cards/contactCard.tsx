"use client";

// components
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

// utils
import { toast } from "@/lib/utils/toast";
import { cn } from "@/lib/utils/cn";

// styling
import {
  cardWrapperStyles,
  footerEyebrowStyles,
  footerHeaderStyles,
  footerSubheaderStyles,
} from "@/styles/showcaseCardStyles";

export const ContactCard = () => {
  return (
    <Card className={cn(cardWrapperStyles)}>
      <CardHeader>
        <div className="h-[3px] rounded-full bg-brand" />
        <div>
          <p className={cn(footerEyebrowStyles)}>Contact</p>
          <h3 className={cn(footerHeaderStyles)}>Let&apos;s Work Together</h3>
        </div>
      </CardHeader>

      <CardFooter className="flex-col items-end gap-2 sm:items-start">
        <p
          className={cn(
            footerSubheaderStyles,
            "line-clamp-none hidden text-muted-foreground xs:block"
          )}
        >
          If you&apos;re interested in working together, or just want to say hi,
          feel free to reach out.
        </p>
        <Button
          variant="outline"
          onClick={() => toast("Coming soon!")}
          className={cn(
            "inline-flex h-8 w-full gap-2 rounded-md px-3 text-xs",
            "sm:h-9 sm:w-fit sm:px-4 sm:py-2 sm:text-sm",
            "md:self-end",
            "lg:w-full",
            "xl:w-fit"
          )}
        >
          <span>Get in touch</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
