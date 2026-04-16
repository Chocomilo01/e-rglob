import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "E&R Global Resources Ltd | Oil & Gas Services" },
      { name: "description", content: "E&R Global Resources Ltd - Dynamic Oil and Gas Service company providing world-class upstream solutions in drilling, casing, cementing and equipment supply." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <WelcomeSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />

      <section className="section-pad bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="heading-lead">Our Partners</p>
            <h2 className="heading-section with-line center">Technical Partners</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["cl-logo1", "cl-logo2", "cl-logo3", "cl-logo4"].map(
              (logo) => (
                <img key={logo} src={`https://erglobalresources.com/image/${logo}.png`} alt="Partner" className="h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity rounded-none" />
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
