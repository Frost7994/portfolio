"use client";

// state
import { useState } from "react";

// components
import Image from "next/image";

// utils
import { cn } from "@/lib/utils/cn";

// images
import DashboardImage from "../../../../../public/dark-project-app-screenshot.png";

// styling
import { buttonVariants } from "@/components/ui/button";

export const ActionTemplate = () => {
  return (
    <div className="not-prose bg-gray-100 dark:bg-gray-900 border rounded-md p-2">
      <div className="relative isolate overflow-hidden bg-background px-6 pt-16 shadow-2xl rounded-md sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="hsl(var(--brand-secondary))"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Boost your{" "}
            <span className="text-brand-secondary">productivity</span>.
            <br />
            Start using our app today.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            veniam et perferendis neque numquam ipsum.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-2 lg:justify-start">
            <a href="#" className={buttonVariants()}>
              Get started
            </a>
            <a href="#" className={buttonVariants({ variant: "ghost" })}>
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            alt="App screenshot"
            src={DashboardImage}
            width={1824}
            height={1080}
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  );
};

export const ActionTemplateTwo = () => {
  return (
    <div className="not-prose bg-gray-100 dark:bg-gray-900 border rounded-md p-2">
      <div className="relative isolate overflow-hidden bg-background px-6 py-16 shadow-2xl rounded-md">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 -z-10 h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)] left-1/2 ml-0 -translate-x-1/2 translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="hsl(var(--brand))"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center">
            Boost your <span className="text-brand">productivity</span> today.
          </h2>
          <p className="mt-4 sm:mt-6 text-lg text-center leading-8 text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            veniam et perferendis neque numquam ipsum.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col xs:flex-row xs:items-center w-full xs:justify-center gap-2">
            <a href="#" className={cn(buttonVariants(), "w-full xs:w-fit")}>
              Get started
            </a>
            <a
              href="#"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full xs:w-fit"
              )}
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ToggleActionTemplates = () => {
  // data
  const actionFilters = [
    {
      id: "action-1",
      label: "Action 1",
      content: <ActionTemplate />,
    },
    {
      id: "action-2",
      label: "Action 2",
      content: <ActionTemplateTwo />,
    },
  ];

  // state
  const [action, setAction] = useState("action-1");

  return (
    <div className="not-prose flex flex-col gap-2">
      {/* toggles */}
      <div className="@container flex justify-end">
        <div className="inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
          {actionFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setAction(f.id)}
              className={cn(
                "inline-flex h-full w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium capitalize ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 @[500px]:text-sm",
                "hover:text-primary",
                f.id === action && "bg-background text-foreground shadow"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      {actionFilters.find((f) => f.id === action)?.content}
    </div>
  );
};
