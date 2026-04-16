import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://erglobalresources.com/image/slider-oil-a.jpg",
    title: "Serving the Upstream Needs In The Oil And Gas Sector",
    subtitle: "We're proud to solve upstream issues in the oil and gas sector globally.",
  },
  {
    image: "https://erglobalresources.com/image/slider-welding-b.jpg",
    title: "Serving the Upstream Needs In The Oil And Gas Sector",
    subtitle: "We're proud to solve upstream issues in the oil and gas sector globally.",
  },
  {
    image: "https://erglobalresources.com/image/slider-mine-a.jpg",
    title: "Serving the Upstream Needs In The Oil And Gas Sector",
    subtitle: "We're proud to solve upstream issues in the oil and gas sector globally.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }} />
          <div className="overlay-dark" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className={`text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 leading-tight ${i === current ? "animate-fade-in" : ""}`}>
                  {slide.title}
                </h1>
                <p className={`text-lg text-primary-foreground/90 mb-8 ${i === current ? "animate-fade-in" : ""}`}>
                  {slide.subtitle}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link to="/about" className="btn-primary">Learn More</Link>
                  <Link to="/contact" className="btn-outline">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/20 hover:bg-primary-foreground/40 text-primary-foreground p-3 transition-colors">
        <ChevronLeft size={24} />
      </button>
      <button onClick={() => setCurrent((c) => (c + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/20 hover:bg-primary-foreground/40 text-primary-foreground p-3 transition-colors">
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-secondary" : "bg-primary-foreground/50"}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
