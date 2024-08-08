// components
import { Providers } from "@/components/layout/providers";
import { Toaster } from "@/components/ui/sonner";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { VerticalGridLine } from "@/components/ui/gridLine";
import { Navbar } from "@/components/layout/navbar";

// utils
import { cn } from "@/lib/utils/cn";

// styling
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/prism.css";

// font
const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={cn("relative min-h-screen", font.className)}>
        <Providers>
          {/* background animation */}
          <div className="absolute inset-0 mx-auto">
            <Container>
              <Grid>
                {/* older project used 8, why? */}
                {Array(4)
                  .fill(" ")
                  .map((_, i) => (
                    <li key={i} className="flex justify-between">
                      <div className="flex gap-4">
                        <div className="relative">
                          <VerticalGridLine />
                        </div>
                        <div className="relative">
                          <VerticalGridLine size="sm" dashed />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="relative">
                          <VerticalGridLine size="sm" dashed />
                        </div>
                        <div className="relative">
                          <VerticalGridLine />
                        </div>
                      </div>
                    </li>
                  ))}
              </Grid>
            </Container>
          </div>
          <Navbar />
          <main className="relative pb-8 pt-28">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
