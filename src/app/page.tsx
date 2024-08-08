// types
import type { Metadata } from "next";

// components
import { Hero } from "@/components/sections/hero";
import { Showcase } from "@/components/sections/showcase";

// metadata
export const metadata: Metadata = {
  title: "Tommy | Home",
  description: "Tommy Byrne's personal website.",
};

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Showcase />
    </div>
  );
};

export default Home;
