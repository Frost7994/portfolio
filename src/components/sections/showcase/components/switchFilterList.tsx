"use client";

// components
import { Switch } from "@/components/ui/switch";

// utils
import { useFilterStore } from "@/store/useFilterStore";

export const SwitchFilterList = () => {
  // store destruture
  const filterType = useFilterStore((state) => state.filterType);
  const setFilterType = useFilterStore((state) => state.setFilterType);

  return (
    <div className="flex items-center justify-end gap-2">
      <p className="text-sm">
        {filterType === "portfolio"
          ? "See the code?"
          : "Want to learn about me? "}
      </p>

      <Switch
        size="sm"
        checked={filterType === "code"}
        onCheckedChange={(checked) =>
          setFilterType(checked ? "code" : "portfolio")
        }
      />
    </div>
  );
};
