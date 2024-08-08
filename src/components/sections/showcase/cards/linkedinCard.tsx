// base
import { Linkedin } from "lucide-react";

// components
import { Card, CardContent } from "@/components/ui/card";

// utils
import { toast } from "@/lib/utils/toast";
import { cn } from "@/lib/utils/cn";

// styling
import {
  bgIconStyles,
  bgIconWrapperStyles,
  cardWrapperStyles,
} from "@/styles/showcaseCardStyles";

export const LinkedinCard = () => {
  return (
    <Card className={cn(cardWrapperStyles)}>
      <div className={cn(bgIconWrapperStyles)}>
        <Linkedin className={cn(bgIconStyles)} />
      </div>

      <CardContent className="relative flex h-full items-center justify-center pt-6">
        <button
          onClick={() => toast("Coming soon!")}
          className="group inline-flex items-center gap-1"
        >
          <div className="w-fit rounded-md border-[3px] border-primary p-0.5 group-hover:border-brand group-hover:text-brand">
            <Linkedin className="size-6 sm:size-9" />
          </div>
          <p className="text-sm font-medium group-hover:text-brand sm:text-lg">
            LinkedIn
          </p>
        </button>
      </CardContent>
    </Card>
  );
};
