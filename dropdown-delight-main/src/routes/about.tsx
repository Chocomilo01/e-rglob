import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | E&R Global Resources Ltd" },
      { name: "description", content: "Learn about E&R Global Resources Ltd - A 100% Nigerian content registered Oil and Gas Service company with 15+ years of experience." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative bg-cover bg-center py-20 md:py-28" style={{ backgroundImage: "url('https://erglobalresources.com/image/banner-inside-a.jpg')" }}>
        <div className="overlay-dark" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/80 text-lg">Learn more about E&R Global Resources Ltd</p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="heading-lead">Our Story</p>
              <h2 className="heading-section with-line mb-8">Who We Are</h2>
              <p className="mb-6">
                E&R Global Resources Ltd is a young and dynamic Oil and Gas Service company with
                interest in the Upstream Sector of the industry. The focus of its set up was borne
                out of the need to form strategic international partnerships to offer many specialized
                services in Oil/Gas upstream space in one place.
              </p>
              <p className="mb-6">
                We identify, attract, train and retain indigenous human manpower for knowledge
                transfer in the Oil and Gas Sector.
              </p>
              <p>
                E&R Global Resources Ltd is proudly 100% Nigerian content registered company, duly
                incorporated with the Corporate Affairs Commission (CAC) with registration number;
                RC 858975 in the year 2009.
              </p>
            </div>
            <div>
              <img src="https://erglobalresources.com/image/photo-sm-main-c.jpg" alt="E&R Operations" className="w-full rounded-sm shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="heading-lead">Our Team</p>
          <h2 className="heading-section with-line center mb-12">Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { img: "https://erglobalresources.com/image/team-a.jpg", name: "Team Member", role: "Director" },
              { img: "https://erglobalresources.com/image/team-b.jpg", name: "Team Member", role: "Operations Manager" },
              { img: "https://erglobalresources.com/image/team-e.jpg", name: "Team Member", role: "Technical Lead" },
            ].map((member) => (
              <div key={member.role} className="bg-card rounded-sm overflow-hidden shadow-md">
                <img src={member.img} alt={member.name} className="w-full h-64 object-cover rounded-none" />
                <div className="p-4">
                  <h4 className="font-heading font-semibold text-heading">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
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
