"use client";

// state
import { useState } from "react";

// base
import { CloudDownload, Lock, Server } from "lucide-react";

// components
import { Button } from "@/components/ui/button";

// image
import DashboardImage from "../../../../../public/dark-project-app-screenshot.png";
import ProfileImage from "../../../../../public/profile.jpg";

// utils
import { cn } from "@/lib/utils/cn";
import Image from "next/image";

// data
const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudDownload,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Lock,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: Server,
  },
];

export const FeatureTemplate = () => {
  return (
    <div className="not-prose border rounded-md p-2 bg-gray-100 dark:bg-gray-900">
      <div className="overflow-hidden bg-background rounded-md py-24 sm:py-32 px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-brand">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-brand"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={DashboardImage}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            alt="Product screenshot"
          />
        </div>
      </div>
    </div>
  );
};

export const FeatureTemplateTwo = () => {
  return (
    <div className="not-prose border rounded-md bg-gray-100 dark:bg-gray-900 p-2">
      <div className="bg-background rounded-md py-24 sm:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand">
            Full toolbox
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-primary">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export const FeatureTemplateThree = () => {
  return (
    <div className="not-prose border rounded-md p-2 bg-gray-100 dark:bg-gray-900">
      <div className="overflow-hidden bg-background rounded-md py-24 sm:py-32 px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-brand">
                Upload smoothly
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                A feature rich system
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <Button className="mt-8 bg-brand hover:bg-brand/90 text-white">
                Get Started
              </Button>
              <figure className="pl-8 border-l mt-16">
                <blockquote>
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto ab quam facilis iste reprehenderit temporibus
                    neque, fugiat tempore quaerat quis!
                  </span>
                </blockquote>
                <figcaption className="leading-6 text-xs sm:text-sm flex gap-4 mt-6">
                  <Image
                    src={ProfileImage}
                    alt="profile image"
                    width={24}
                    height={24}
                    className="rounded-full size-6 flex-none"
                  />
                  <div>
                    <span className="font-semibold">Joe Smith</span> - CEO at
                    Blue
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src={DashboardImage}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export const ToggleFeatureTemplates = () => {
  // data
  const featureFilters = [
    {
      id: "feature-1",
      label: "Feature 1",
      content: <FeatureTemplate />,
    },
    {
      id: "feature-2",
      label: "Feature 2",
      content: <FeatureTemplateTwo />,
    },
    {
      id: "feature-3",
      label: "Feature 3",
      content: <FeatureTemplateThree />,
    },
  ];

  // state
  const [feature, setFeature] = useState("feature-1");

  return (
    <div className="flex flex-col gap-2">
      {/* toggles */}
      <div className="@container flex justify-end">
        <div className="inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
          {featureFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFeature(f.id)}
              className={cn(
                "inline-flex h-full w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium capitalize ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 @[500px]:text-sm",
                "hover:text-primary",
                f.id === feature && "bg-background text-foreground shadow"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      {featureFilters.find((f) => f.id === feature)?.content}
    </div>
  );
};
