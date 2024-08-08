"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart as BarChartWrapper,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const BarChart = () => {
  const chartData = [
    { month: "January", passed: 186, failed: 80 },
    { month: "February", passed: 305, failed: 200 },
    { month: "March", passed: 237, failed: 120 },
    { month: "April", passed: 73, failed: 190 },
    { month: "May", passed: 209, failed: 130 },
    { month: "June", passed: 214, failed: 140 },
  ];

  const chartConfig = {
    passed: {
      label: "Passed",
      color: "hsl(var(--input))",
    },
    failed: {
      label: "Failed",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-full w-full bg-gray-50 dark:bg-gray-900">
      <CardHeader>
        <CardTitle>Bar Chart - Pass/Fail Rate</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChartWrapper accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="passed" fill="var(--color-passed)" radius={4} />
            <Bar dataKey="failed" fill="var(--color-failed)" radius={4} />
          </BarChartWrapper>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing your progress over the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export const HorizontalBarChart = () => {
  const chartData = [
    { category: "Diabetes", quizzes: 186 },
    { category: "Medication", quizzes: 305 },
    { category: "Cardiovascular", quizzes: 237 },
    { category: "Musculoskeletal", quizzes: 73 },
    { category: "Respiratory", quizzes: 209 },
    { category: "Renal", quizzes: 214 },
  ];

  const chartConfig = {
    quizzes: {
      label: "Quizzes",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-full w-full bg-gray-50 dark:bg-gray-900">
      <CardHeader>
        <CardTitle>Bar Chart - Categories</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChartWrapper
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="quizzes" hide />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="quizzes" fill="var(--color-quizzes)" radius={5} />
          </BarChartWrapper>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Category breakdown
        </div>
        <div className="leading-none text-muted-foreground">
          Showing quizzes taken per category for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export const DisplayCharts = () => {
  return (
    <div className="not-prose flex flex-col gap-4 md:flex-row">
      <BarChart />
      <HorizontalBarChart />
    </div>
  );
};
