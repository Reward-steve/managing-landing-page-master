import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Navigation } from "./components/Navigation";
import { Testimonial } from "./components/Testimonial";
import bg_pattern from "./assets/images/bg-tablet-pattern.svg";

const App = () => {
  return (
    <div className="relative font-vietnam text-dark-blue bg-white overflow-x-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute -top-20 -right-20 md:-top-32 md:-right-32 z-0 pointer-events-none">
        <img
          src={bg_pattern}
          alt=""
          className="w-[450px] md:w-[800px] max-w-none"
        />
      </div>

      {/* Main Content - Added 'relative z-10' to keep it above the pattern */}
      <div className="relative z-10">
        <header className="max-w-7xl mx-auto px-6">
          <Navigation />
          <HeroSection />
        </header>

        <main>
          <FeaturesSection />
          <Testimonial />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
