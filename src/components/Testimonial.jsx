import { testimonials } from "../constant";
import { Button } from "./Button";

export const Testimonial = () => {
  return (
    <section className="py-24 text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-20">
        What they’ve said
      </h2>

      {/* 1. The Slider Container */}
      <div className="flex overflow-x-auto md:overflow-x-visible gap-8 px-6 pb-12 max-w-7xl mx-auto mb-16 snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((t) => (
          <div
            key={t.name}
            /* 2. Added min-w for mobile and snap-center */
            className="bg-light-gray p-8 pt-0 relative flex-none w-[90%] md:w-auto md:flex-1 mt-10 snap-center"
          >
            <img
              src={t.img}
              className="w-20 mx-auto -translate-y-10"
              alt={t.name}
            />
            <h4 className="font-bold mb-4">{t.name}</h4>
            <p className="text-dark-gray-blue/60 text-sm leading-relaxed">
              {t.text}
            </p>
          </div>
        ))}
      </div>

      <Button>Get Started</Button>
    </section>
  );
};
