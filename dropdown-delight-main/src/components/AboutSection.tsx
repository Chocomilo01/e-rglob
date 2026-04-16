import { Link } from "@tanstack/react-router";

const AboutSection = () => {
  return (
    <section className="section-pad bg-muted relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/[0.04] rounded-full -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/[0.04] rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="heading-lead">About Us</p>
            <h2 className="heading-section with-line mb-8">Our Company</h2>
            <p className="mb-6">
              E&R Global Resources Ltd is a young and dynamic Oil and Gas Service company with
              interest in the Upstream Sector of the industry.
            </p>
            <p className="mb-6">
              We identify, attract, train and retain indigenous human manpower for knowledge
              transfer in the Oil and Gas Sector.
            </p>
            <p className="mb-8">
              E&R Global Resources Ltd is proudly 100% Nigerian content registered company, duly
              incorporated with the Corporate Affairs Commission (CAC).
            </p>
            <Link to="/about" className="btn-primary">Learn More</Link>
          </div>
          <div className="relative">
            <img src="https://erglobalresources.com/image/photo-sm-main-c.jpg" alt="E&R Operations" className="w-full rounded-sm shadow-lg" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm hidden md:block shadow-xl">
              <div className="text-4xl font-heading font-bold">15+</div>
              <div className="text-sm uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
