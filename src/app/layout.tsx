// type
import type { Metadata } from "next";

// components
import { Toaster } from "@/components/ui/sonner";

// provider
import { Providers } from "@/components/layout/providers";

// utils
import { cn } from "@/lib/utils/cn";

// styling
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// font
const font = Inter({ subsets: ["latin"] });

// metadata
export const metadata: Metadata = {
  title: "Quizmedics | Home",
  description:
    "Quizmedics is a platform for medical students to practice for their exams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body
        className={cn(
          "min-h-screen grid grid-rows-1", // with no navbar
          // "min-h-screen grid grid-rows-[auto_1fr]", // with navbar
          // "min-h-screen grid grid-rows-[auto_1fr_auto]", // with navbar and footer
          font.className
        )}
      >
        <Providers>
          {/* navbar - change grids */}
          <main>{children}</main>
          <Toaster />
          {/* footer - change grids */}
        </Providers>
      </body>
    </html>
  );
}
