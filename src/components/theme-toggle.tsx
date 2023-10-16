"use client";

import { Moon, Sun, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="theme-toggle"
      className=" h-10 w-10 dark:hover:ring-gray- 700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-100 active:outline-none flex justify-center items-center rounded-full"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      <Moon
        size={20}
        variant="Bulk"
        className="text-gray-950 dark:text-gray-50 rotate-0 scale-100 transition-all duration-100 dark:-rotate-90 dark:scale-0 absolute"
      />
      <Sun1
        size={20}
        variant="Bulk"
        className=" text-gray-950 dark:text-gray-50 rotate-90 scale-0 transition-all duration-100 dark:rotate-0 dark:scale-100 absolute"
      />
    </button>
  );
}
