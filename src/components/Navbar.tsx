import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
              JANU <span className="text-gradient-gold">DECORS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:8197051073">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-rose-dark gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:8197051073" className="block mt-2">
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-rose-dark gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
