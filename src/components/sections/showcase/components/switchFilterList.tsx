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
      {filterType === "portfolio" ? (
        <p>See the code?</p>
      ) : (
        <p>Want to learn about me?</p>
      )}
      <Switch
        checked={filterType === "code"}
        onCheckedChange={(checked) =>
          setFilterType(checked ? "code" : "portfolio")
        }
      />
    </div>
  );
};
