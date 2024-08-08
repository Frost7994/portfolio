// base
import { Eye, MonitorDot } from "lucide-react";

// components
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

// utils
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

export const WatchingCard = () => {
  return (
    <Card className={cn(cardWrapperStyles)}>
      <div className={cn(bgIconWrapperStyles)}>
        <MonitorDot className={cn(bgIconStyles)} />
      </div>

      <CardHeader className="flex-row justify-end">
        <MonitorDot className={cn(headerIconStyles)} />
      </CardHeader>

      <CardFooter>
        <div className={cn(footerWrapperStyles)}>
          <div className="flex items-center gap-1">
            <Eye className={cn(footerIconStyles)} />
            <p className={cn(footerEyebrowStyles)}>
              <span className="hidden sm:inline-block">Online.</span> Now
              watching
            </p>
          </div>
          <h3 className={cn(footerHeaderStyles)}>House of the Dragon</h3>
          <p className={cn(footerSubheaderStyles)}>HBO TV series</p>
        </div>
      </CardFooter>
    </Card>
  );
};
