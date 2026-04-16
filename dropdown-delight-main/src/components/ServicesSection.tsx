import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";

const ServicesSection = () => {
  const displayServices = services.slice(0, 8);

  return (
    <section className="section-pad bg-background relative overflow-hidden">
      <div className="absolute top-10 left-0 w-80 h-80 bg-primary/[0.03] rounded-full -translate-x-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="heading-lead">Our Services</p>
          <h2 className="heading-section with-line center">Products and Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service) => (
            <Link
              to="/products-and-services"
              key={service.title}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden h-52">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-none" />
              </div>
              <div className="p-5 bg-card">
                <h4 className="font-heading font-semibold text-sm text-heading group-hover:text-secondary transition-colors">
                  {service.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products-and-services" className="btn-primary">View All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
