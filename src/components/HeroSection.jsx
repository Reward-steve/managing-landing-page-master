import illustrate_chart from "../assets/images/illustration-intro.svg";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-10 py-12 md:py-20">
      <div className="md:w-1/2 text-center md:text-left space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Bring everyone together to build better products.
        </h1>
        <p className="max-w-sm mx-auto md:mx-0 text-dark-gray-blue/60">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="md:w-1/2">
        <img src={illustrate_chart} alt="Illustration" className="w-full" />
      </div>
    </section>
  );
};
