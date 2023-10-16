"use client";

import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
}
