// base
import { Settings, Flame, Worm, Ambulance } from "lucide-react";

// components
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

// utils
import { cn } from "@/lib/utils/cn";

// styling
import {
  cardWrapperStyles,
  footerEyebrowStyles,
  footerHeaderStyles,
} from "@/styles/showcaseCardStyles";

const Journey = ({
  journey,
}: {
  journey: {
    date: string;
    title: string;
    description: string;
    icon: JSX.Element;
  };
}) => {
  const { date, title, description, icon } = journey;

  return (
    <li className="mb-6 ml-5 last:mb-0">
      <div className="absolute -left-[10.8px] mt-1 rounded-full border border-brand bg-background p-1 text-brand">
        {icon}
      </div>
      <time className="mb-1 text-xs font-medium leading-none text-brand">
        {date}
      </time>
      <h3 className="text-secondary-500 text-sm font-semibold">{title}</h3>
      <p className="text-pretty text-xs text-muted-foreground">{description}</p>
    </li>
  );
};

export const JourneyCard = () => {
  let journeys = [
    {
      id: 1,
      date: "Present",
      title: "Always learning, constantly developing",
      description:
        "I have continued to learn and develop my skills, trying new frameworks and libraries to push my limits. Currently favoring NextJS, TailwindCSS and Prisma.",
      icon: <Settings className="size-3" />,
    },
    {
      id: 2,
      date: "July 2020",
      title: "My first full stack project",
      description:
        "During my paramedic internship I created the first version of Quizmedics, a quiz app to help my colleagues and I study for the final exams.",
      icon: <Ambulance className="size-3" />,
    },
    {
      id: 3,
      date: "November 2019 - present",
      title: "Using the pandemic time to learn",
      description:
        "Throughout the pandemic I continued working, but I also used the time to learn new skills. I started learning React and Node.js and I have been using them ever since.",
      icon: <Worm className="size-3" />,
    },

    {
      id: 4,
      date: "February 2017",
      title: "Dublin Fire Brigade gained a new member",
      description:
        "After 3 years of nursing, I decided to join the Dublin Fire Brigade as a firefighter/paramedic. I wanted to expand my medical skills by attending cases that were a lot more dynamic and testing.",
      icon: <Flame className="size-3" />,
    },
  ];
  return (
    <Card className={cn(cardWrapperStyles)}>
      <CardHeader className="flex-row gap-2">
        <div className="h-full w-0.5 rounded-full bg-brand" />
        <div>
          <p className={cn(footerEyebrowStyles)}>My Journey</p>
          <h3 className={cn(footerHeaderStyles)}>How It&apos;s Going</h3>
        </div>
      </CardHeader>

      <CardFooter className="scrollbar-hide relative items-baseline overflow-y-scroll pb-8">
        <ul className="relative border-l border-brand">
          {journeys.map((journey) => (
            <Journey key={journey.id} journey={journey} />
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
};
