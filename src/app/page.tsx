// components
import { ThemeButton, ThemeSwitch } from "@/components/ui/theme";

const Home = () => {
  return (
    <div className="flex flex-col p-8">
      <h1 className="text-2xl font-semibold">
        Shadcn/UI and NextJS Starter Template
      </h1>
      <p className="mb-2">Theme controls</p>
      <div className="flex items-center gap-2">
        <ThemeButton />
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Home;
