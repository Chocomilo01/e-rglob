import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from "lucide-react";

interface NavChild {
  label: string;
  path: string;
  description?: string;
  icon?: string;
}

interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Products & Services",
    path: "/products-and-services",
    children: [
      { label: "Drill Bits & Reamers", path: "/products-and-services", description: "PDC Bits, Roller Cone, Reamers & Optimization Tools", icon: "🔩" },
      { label: "XpressDrill™", path: "/products-and-services", description: "Whipstock Assembly for sidetracking operations", icon: "⚙️" },
      { label: "Casing & Cementing", path: "/products-and-services", description: "Installation, cementing & wellbore integrity", icon: "🏗️" },
      { label: "Drilling Chemicals", path: "/products-and-services", description: "Emulsifiers, inhibitors & lubricants", icon: "🧪" },
      { label: "Machine Shop Services", path: "/products-and-services", description: "API threading, flanges & cold cutting", icon: "🔧" },
      { label: "Consultancy & Supply", path: "/products-and-services", description: "Expert solutions & material procurement", icon: "📋" },
    ],
  },
  { label: "Partners", path: "/partners" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setMobileSubmenuOpen(false);
  }, [location.pathname]);

  const showDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownVisible(false), 150);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <div className="flex items-center gap-4 lg:gap-6">
            <a href="tel:+2348033137395" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} /> +234 803 313 7395
            </a>
            <a href="tel:+2349042335945" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} /> +234 904 233 5945
            </a>
            <a href="mailto:info@erglobalresources.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} /> info@erglobalresources.com
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "fixed top-0 bg-background shadow-lg"
            : "absolute top-0 md:top-[40px] bg-background/95"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="https://erglobalresources.com/image/logo.png" alt="E&R Global Resources Ltd" className="h-10 md:h-14 rounded-none" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={item.children ? showDropdown : undefined}
                onMouseLeave={item.children ? hideDropdown : undefined}
              >
                <Link
                  to={item.path}
                  className={`px-3 xl:px-4 py-2 font-heading text-sm font-medium transition-colors flex items-center gap-1 ${
                    location.pathname === item.path
                      ? "text-secondary"
                      : "text-heading hover:text-secondary"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${dropdownVisible ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* ✨ Beautiful Mega Dropdown */}
                {item.children && dropdownVisible && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
                    style={{ width: "520px" }}
                  >
                    <div className="animate-dropdown-in bg-background rounded-xl shadow-2xl border border-border overflow-hidden">
                      {/* Dropdown header */}
                      <div className="bg-primary/5 px-6 py-3 border-b border-border">
                        <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary">
                          Products & Services
                        </p>
                      </div>

                      {/* Items grid */}
                      <div className="grid grid-cols-2 gap-0">
                        {item.children.map((child, idx) => (
                          <Link
                            key={child.path + idx}
                            to={child.path}
                            className="group flex items-start gap-3 px-5 py-4 transition-all duration-200 hover:bg-primary/5 border-b border-border/50 last:border-b-0"
                          >
                            <span className="text-lg mt-0.5 shrink-0 grayscale group-hover:grayscale-0 transition-all duration-200">
                              {child.icon}
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-heading font-semibold text-heading group-hover:text-secondary transition-colors leading-tight">
                                {child.label}
                              </p>
                              {child.description && (
                                <p className="text-xs text-muted-foreground mt-0.5 leading-snug line-clamp-2">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown footer */}
                      <div className="bg-muted/50 px-6 py-3 border-t border-border">
                        <Link
                          to="/products-and-services"
                          className="flex items-center gap-2 text-xs font-heading font-semibold text-primary hover:text-secondary transition-colors group"
                        >
                          View All Services
                          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-heading p-2"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-background border-t border-border max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                      className="w-full flex items-center justify-between px-6 py-3 text-heading hover:text-secondary font-heading text-sm border-b border-border/50"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${mobileSubmenuOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileSubmenuOpen && (
                      <div className="bg-muted/30">
                        {item.children.map((child, idx) => (
                          <Link
                            key={child.path + idx}
                            to={child.path}
                            className="flex items-center gap-3 px-8 py-2.5 text-sm text-foreground hover:text-secondary border-b border-border/20"
                          >
                            <span className="text-sm">{child.icon}</span>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-6 py-3 text-heading hover:text-secondary font-heading text-sm border-b border-border/50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
