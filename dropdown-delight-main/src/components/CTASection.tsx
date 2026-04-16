import { Link } from "@tanstack/react-router";

const CTASection = () => {
  return (
    <section className="relative bg-cover bg-center bg-fixed py-20" style={{ backgroundImage: "url('https://erglobalresources.com/image/plx-dark-oil.jpg')" }}>
      <div className="overlay-dark" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          We are a one stop center for all your upstream needs
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Drill Bits sales & PDC Bits repair, Fishing Operations and Whipstock Services,
          Cementing & Liner Hanger Services, OCTG/Pipes, Drilling & Production Chemicals.
        </p>
        <Link to="/contact" className="btn-secondary">Enquire Today</Link>
      </div>
    </section>
  );
};

export default CTASection;
