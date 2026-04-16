import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

export const Route = createFileRoute("/products-and-services")({
  component: ProductsAndServicesPage,
  head: () => ({
    meta: [
      { title: "Products & Services | E&R Global Resources Ltd" },
      { name: "description", content: "Explore our full range of oil and gas upstream services including drill bits, casing, cementing, chemicals and more." },
    ],
  }),
});

function ProductsAndServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative bg-cover bg-center py-20 md:py-28" style={{ backgroundImage: "url('https://erglobalresources.com/image/banner-inside-bc.jpg')" }}>
        <div className="overlay-dark" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Products & Services</h1>
          <p className="text-primary-foreground/80 text-lg">Comprehensive upstream oil and gas solutions</p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="heading-lead">What We Offer</p>
            <h2 className="heading-section with-line center">Our Full Range of Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden h-56">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-none" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-heading group-hover:text-secondary transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
