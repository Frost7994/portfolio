"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const Cards = () => {
  const cards = [
    {
      id: "quizmedics-card-one",
      title: "Exams taken",
      value: 84,
    },
    {
      id: "quizmedics-card-two",
      title: "Passed",
      value: 38,
    },
    {
      id: "quizmedics-card-three",
      title: "Failed",
      value: 46,
    },
    {
      id: "quizmedics-card-four",
      title: "Pass rate",
      value: "45%",
    },
    {
      id: "quizmedics-card-five",
      title: "Flags",
      value: 12,
    },
    {
      id: "quizmedics-card-six",
      title: "Average time",
      value: "10m 12s",
    },
  ];

  return (
    <ul className="not-prose mb-4 grid grid-cols-1 gap-4 rounded-md border bg-gray-50 p-4 dark:bg-gray-900 sm:grid-cols-2 md:grid-cols-3">
      {cards.map((card) => (
        <li key={card.id}>
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-xl font-semibold sm:text-3xl">{card.value}</p>
              <CardDescription className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                doloribus?
              </CardDescription>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
};
