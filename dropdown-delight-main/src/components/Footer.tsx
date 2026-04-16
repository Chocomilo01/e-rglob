import { Link } from "@tanstack/react-router";
import { Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@erglobalresources.com?subject=Quick Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setForm({ name: "", email: "", message: "" });
  };

  const serviceLinks = [
    { label: "Drill Bits & Reamers", path: "/products-and-services" as const },
    { label: "XpressDrill™", path: "/products-and-services" as const },
    { label: "Casing & Cementing", path: "/products-and-services" as const },
    { label: "Drilling Chemicals", path: "/products-and-services" as const },
    { label: "Machine Shop Services", path: "/products-and-services" as const },
    { label: "Consultancy Services", path: "/products-and-services" as const },
  ];

  return (
    <footer>
      <div className="bg-heading text-primary-foreground/80 section-pad">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <div>
              <h5 className="text-primary-foreground font-heading font-semibold text-lg mb-6">E&R Global Resources</h5>
              <p className="text-sm leading-relaxed mb-4">
                E&R Global Resources Ltd is a young and dynamic Oil and Gas Service company
                with interest in the Upstream Sector of the industry.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <Phone size={16} className="shrink-0 text-secondary" />
                  <div>
                    <a href="tel:+2348033137395" className="hover:text-primary-foreground transition-colors block">+234 803 313 7395</a>
                    <a href="tel:+2349042335945" className="hover:text-primary-foreground transition-colors block">+234 904 233 5945</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail size={16} className="shrink-0 text-secondary" />
                  <a href="mailto:info@erglobalresources.com" className="hover:text-primary-foreground transition-colors">info@erglobalresources.com</a>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-primary-foreground font-heading font-semibold text-lg mb-6">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Our Company", path: "/about" as const },
                  { label: "Products and Services", path: "/products-and-services" as const },
                  { label: "Technical Partners", path: "/partners" as const },
                  { label: "Contact Us", path: "/contact" as const },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-primary-foreground transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-primary-foreground font-heading font-semibold text-lg mb-6">Our Services</h5>
              <ul className="space-y-2 text-sm">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="hover:text-primary-foreground transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-primary-foreground font-heading font-semibold text-lg mb-6">Quick Contact</h5>
              <form onSubmit={handleQuickContact} className="space-y-3">
                <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-3 py-2 text-sm rounded-sm focus:outline-none focus:border-secondary" />
                <input type="email" placeholder="Your Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-3 py-2 text-sm rounded-sm focus:outline-none focus:border-secondary" />
                <textarea placeholder="Message" required rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-3 py-2 text-sm rounded-sm focus:outline-none focus:border-secondary resize-none" />
                <button type="submit" className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium rounded-sm hover:bg-secondary/90 transition-colors flex items-center gap-2">
                  <Send size={14} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-heading/95 text-primary-foreground/50 py-4 text-center text-xs sm:text-sm border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} E&R Global Resources Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
