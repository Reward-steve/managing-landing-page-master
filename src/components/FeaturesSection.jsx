import { features } from "../constant";
import bg from "../assets/images/bg-tablet-pattern.svg";

export const FeaturesSection = () => {
  return (
    /* 1. Added 'relative' and 'overflow-visible' (or hidden if you want to clip the pattern) */
    <section className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16 overflow-visible">
      {/* 2. Decorative Background Pattern moved here */}
      <div className="absolute -top-24 -left-72 md:-left-96 z-0 pointer-events-none">
        <img src={bg} alt="" className="w-[400px] md:w-[600px] opacity-50" />
      </div>

      {/* 3. Wrap content in 'relative z-10' to stay above the background */}
      <div className="relative z-10 md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          What’s different about Manage?
        </h2>
        <p className="text-dark-gray-blue/60 max-w-xs mx-auto md:mx-0">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="relative z-10 md:w-1/2 space-y-10">
        {features.map((f) => (
          <div key={f.id} className="space-y-4">
            <div className="flex items-center gap-4 bg-pale-orange md:bg-transparent rounded-l-full">
              <span className="bg-bright-orange text-white px-6 py-2 rounded-full font-bold">
                {f.id}
              </span>
              <h3 className="font-bold">{f.title}</h3>
            </div>
            <p className="text-dark-gray-blue/60 md:pl-24 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
