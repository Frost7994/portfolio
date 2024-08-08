"use client";

// state
import { useState } from "react";

// base
import { Menu } from "lucide-react";

// components
import { buttonVariants } from "@/components/ui/button";

// utils
import { cn } from "@/lib/utils/cn";

export const HeroTemplate = () => {
  // data
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  return (
    <div className="rounded-md bg-gray-100 dark:bg-gray-900 p-2 border">
      <div className="relative bg-background rounded-md overflow-hidden">
        <header className="absolute inset-x-0 top-0 z-10">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => {}}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
              >
                <span className="sr-only">Open main menu</span>
                <Menu aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[hsl(var(--brand))] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-40">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-muted-foreground/10 hover:ring-muted-foreground/20">
                Introducing new components.{" "}
                <a href="#" className="font-semibold text-brand">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Leading the way in design systems
              </h1>
              <p className="mt-6 text-lg leading-8 text-balance text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur ducimus fuga necessitatibus minima accusamus ab eaque
                error quisquam.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <a
                  href="#"
                  className={cn(buttonVariants(), "bg-brand hover:bg-brand/90")}
                >
                  Get started
                </a>
                <a
                  href="#"
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ToggleHeroTemplates = () => {
  // data
  const heroFilters = [
    {
      id: "hero-1",
      label: "Template 1",
      content: <HeroTemplate />,
    },
  ];

  // state
  const [hero, setHero] = useState("hero-1");

  return (
    <div className="flex flex-col gap-2 not-prose">
      {/* toggles */}
      <div className="@container flex justify-end">
        <div className="inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
          {heroFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setHero(f.id)}
              className={cn(
                "inline-flex h-full w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium capitalize ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 @[500px]:text-sm",
                "hover:text-primary",
                f.id === hero && "bg-background text-foreground shadow"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      {heroFilters.find((f) => f.id === hero)?.content}
    </div>
  );
};
