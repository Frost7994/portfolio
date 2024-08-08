"use client";

// utils
import { useFilterStore } from "@/store/useFilterStore";
import { cn } from "@/lib/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

// data
const portfolioFilters = [
  {
    id: "portfolio-filter-one",
    category: "all",
    subcategory: "portfolio",
  },
  {
    id: "portfolio-filter-two",
    category: "about",
    subcategory: "portfolio",
  },
  {
    id: "portfolio-filter-three",
    category: "media",
    subcategory: "portfolio",
  },
  {
    id: "portfolio-filter-four",
    category: "projects",
    subcategory: "portfolio",
  },
];

const codeFilters = [
  {
    id: "code-filter-one",
    category: "all",
    subcategory: "code",
  },
  {
    id: "code-filter-two",
    category: "utils",
    subcategory: "code",
  },
  {
    id: "code-filter-three",
    category: "components",
    subcategory: "code",
  },
  {
    id: "code-filter-four",
    category: "templates",
    subcategory: "code",
  },
];

export const FilterList = () => {
  // store destruture
  const portfolioFilter = useFilterStore((state) => state.portfolioFilter);
  const setPortfolioFilter = useFilterStore(
    (state) => state.setPortfolioFilter
  );
  const codeFilter = useFilterStore((state) => state.codeFilter);
  const setCodeFilter = useFilterStore((state) => state.setCodeFilter);
  const filterType = useFilterStore((state) => state.filterType);

  return (
    <AnimatePresence initial={false} mode="popLayout">
      {filterType === "portfolio" ? (
        <motion.div
          key="portfolio-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="@container"
        >
          <div className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
            {portfolioFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setPortfolioFilter(f)}
                className={cn(
                  "inline-flex h-full w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium capitalize ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 @[500px]:text-sm",
                  "hover:text-primary",
                  f.category === portfolioFilter.category &&
                    "bg-background text-foreground shadow"
                )}
              >
                {f.category}
              </button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="code-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="@container"
        >
          <div className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
            {codeFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setCodeFilter(f)}
                className={cn(
                  "inline-flex h-full w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium capitalize ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 @[500px]:text-sm",
                  "hover:text-primary",
                  f.category === codeFilter.category &&
                    "bg-background text-foreground shadow"
                )}
              >
                {f.category}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
