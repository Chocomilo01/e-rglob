import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/partners")({
  component: PartnersPage,
  head: () => ({
    meta: [
      { title: "Partners | E&R Global Resources Ltd" },
      { name: "description", content: "Our technical partners and strategic alliances in the oil and gas industry." },
    ],
  }),
});

function PartnersPage() {
  const partners = [
    { logo: "https://erglobalresources.com/image/cl-logo2.png", name: "Partner 1" },
    { logo: "https://erglobalresources.com/image/cl-logo3.png", name: "Partner 2" },
    { logo: "https://erglobalresources.com/image/cl-logo4.png", name: "Partner 3" },
    { logo: "https://erglobalresources.com/image/cl-logo4.png", name: "Partner 4" },
    { logo: "https://erglobalresources.com/image/cl-logo4.png", name: "Partner 5" },
    { logo: "https://erglobalresources.com/image/cl-logo1.png", name: "Partner 6" },
    { logo: "https://erglobalresources.com/image/cl-logo1.png", name: "Wildcat" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative bg-cover bg-center py-20 md:py-28" style={{ backgroundImage: "url('https://erglobalresources.com/image/partners.png')" }}>
        <div className="overlay-dark" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Partners</h1>
          <p className="text-primary-foreground/80 text-lg">Strategic alliances driving excellence</p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="heading-lead">Collaborations</p>
            <h2 className="heading-section with-line center">Technical Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center p-8 bg-card border border-border rounded-sm hover:shadow-lg transition-shadow">
                <img src={p.logo} alt={p.name} className="max-h-20 opacity-80 hover:opacity-100 transition-opacity rounded-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
