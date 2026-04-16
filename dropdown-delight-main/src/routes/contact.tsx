import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | E&R Global Resources Ltd" },
      { name: "description", content: "Get in touch with E&R Global Resources Ltd for all your upstream oil and gas service needs." },
    ],
  }),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@erglobalresources.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative bg-cover bg-center py-20 md:py-28" style={{ backgroundImage: "url('https://erglobalresources.com/image/banner-inside-c.jpg')" }}>
        <div className="overlay-dark" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg">Get in touch with our team</p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-section with-line mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-border px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-primary" />
                  <input type="email" placeholder="Your Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-border px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-primary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-border px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-primary" />
                  <input type="text" placeholder="Subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full border border-border px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-primary" />
                </div>
                <textarea placeholder="Your Message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-border px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-primary resize-none" />
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>

            <div>
              <h2 className="heading-section with-line mb-8">Contact Info</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm shrink-0"><Phone size={20} className="text-primary" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-heading mb-1">Phone</h4>
                    <a href="tel:+2348033137395" className="text-sm text-muted-foreground hover:text-secondary block">+234 803 313 7395</a>
                    <a href="tel:+2349042335945" className="text-sm text-muted-foreground hover:text-secondary block">+234 904 233 5945</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm shrink-0"><Mail size={20} className="text-primary" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-heading mb-1">Email</h4>
                    <a href="mailto:info@erglobalresources.com" className="text-sm text-muted-foreground hover:text-secondary">info@erglobalresources.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm shrink-0"><MapPin size={20} className="text-primary" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-heading mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
