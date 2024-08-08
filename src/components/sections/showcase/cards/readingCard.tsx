// base
import { Laugh, Book } from "lucide-react";

// components
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

// styling
import {
  bgIconStyles,
  bgIconWrapperStyles,
  cardWrapperStyles,
  footerEyebrowStyles,
  footerHeaderStyles,
  footerIconStyles,
  footerSubheaderStyles,
  footerWrapperStyles,
  headerIconStyles,
} from "@/styles/showcaseCardStyles";

export const ReadingCard = () => {
  return (
    <Card className={cn(cardWrapperStyles)}>
      <div className={cn(bgIconWrapperStyles)}>
        <Book className={cn(bgIconStyles)} />
      </div>

      <CardHeader className="flex flex-row justify-end">
        <Book className={cn(headerIconStyles)} />
      </CardHeader>

      <CardFooter>
        <div className={cn(footerWrapperStyles)}>
          <div className="flex items-center gap-1">
            <Laugh className={cn(footerIconStyles)} />
            <p className={cn(footerEyebrowStyles)}>
              <span className="hidden sm:inline-block">Active.</span> Re-reading
            </p>
          </div>
          <h3 className={cn(footerHeaderStyles)}>Red Rising</h3>
          <p className={cn(footerSubheaderStyles)}>Pierce Brown</p>
        </div>
      </CardFooter>
    </Card>
  );
};
