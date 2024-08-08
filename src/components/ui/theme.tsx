"use client";

// base
import { Sun, Moon } from "lucide-react";

// components
import { Button } from "./button";
import { Switch } from "./switch";

// utils
import { useTheme } from "next-themes";

export const ThemeButton = () => {
  // theme destructure
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};

export const ThemeSwitch = () => {
  // theme destructure
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};
