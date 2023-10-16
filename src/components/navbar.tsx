"use client";

import { Call } from "iconsax-react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <div className=" sm:px-8 px-5 p-5 flex items-center w-full justify-between">
      <div className=" p-2.5 rounded-full bg-primary">
        <Call variant="Bulk" className=" text-white h-6 w-6" />
      </div>
      <ThemeToggle />
    </div>
  );
}
