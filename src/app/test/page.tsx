"use client";

// components
import { Container } from "@/components/ui/container";
import { ToggleHeroTemplates } from "@/components/sections/blog/components/heroTemplates";

const Test = () => {
  return (
    <Container className="lg:max-w-4xl xl:max-w-4xl">
      <ToggleHeroTemplates />
    </Container>
  );
};

export default Test;
