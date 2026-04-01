import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-heading font-bold mb-4">
            JANU <span className="text-gold">DECORS</span>
          </h3>
          <p className="text-background/70 text-sm leading-relaxed">
            Flower & Balloon Decorations for Every Celebration. Making your special moments unforgettable in Bangalore.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/srinatha.vp" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["/", "/about", "/services", "/gallery", "/contact"].map((path) => (
              <Link key={path} to={path} className="text-background/70 hover:text-gold text-sm transition-colors">
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm text-background/70">
            <a href="tel:8197051073" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4 shrink-0" /> 81970 51073 / 80950 34407
            </a>
            <a href="mailto:srinathasri9343@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4 shrink-0" /> srinathasri9343@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              Munnekollal Near Marathahalli, Bangalore – 560037
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-8 pt-6 text-center text-background/50 text-xs">
        © {new Date().getFullYear()} Janu Decors. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
