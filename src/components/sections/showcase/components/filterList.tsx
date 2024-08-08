"use client";

// utils
import { useFilterStore } from "@/store/useFilterStore";
import { cn } from "@/lib/utils/cn";

// data
const filters = ["all", "about", "media", "projects"];

export const FilterList = () => {
  // store destruture
  const filter = useFilterStore((state) => state.filter);
  const setFilter = useFilterStore((state) => state.setFilter);

  return (
    <div className="@container">
      <div className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "inline-flex h-full w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium capitalize ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 @[500px]:text-sm",
              "hover:text-primary",
              f === filter && "bg-background text-foreground shadow"
            )}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};
