import { Link } from "react-router-dom";
import { Star, Heart, PartyPopper, Flower2, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-wedding.jpg";
import weddingImg from "@/assets/wedding-decor.jpg";
import birthdayImg from "@/assets/birthday-decor.jpg";
import babyShowerImg from "@/assets/baby-shower-decor.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const services = [
  { icon: Heart, title: "Wedding Decorations", img: weddingImg },
  { icon: PartyPopper, title: "Birthday Decorations", img: birthdayImg },
  { icon: Flower2, title: "Baby Shower Decorations", img: babyShowerImg },
];

const testimonials = [
  { name: "Priya Sharma", text: "Janu Decors made our wedding absolutely magical! The flower arrangements were breathtaking.", rating: 5 },
  { name: "Rahul Kumar", text: "Best birthday decoration service in Bangalore. My daughter loved the balloon setup!", rating: 5 },
  { name: "Sneha Reddy", text: "Professional and creative team. Our baby shower was beautifully decorated. Highly recommended!", rating: 5 },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Janu Decors - Flower and Balloon Decorations in Bangalore" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
          JANU <span className="text-gold">DECORS</span>
        </h1>
        <p className="text-lg md:text-2xl text-primary-foreground/90 mb-2 font-light">
          Flower & Balloon Decorations for Every Celebration
        </p>
        <p className="text-sm md:text-base text-primary-foreground/70 mb-8">
          Weddings · Birthdays · Baby Showers · Special Events in Bangalore
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-gold text-gold-foreground hover:opacity-90 text-base px-8 gap-2">
              Book Decoration <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href="tel:8197051073">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>

    {/* Services Highlight */}
    <section className="py-16 md:py-24 bg-gradient-rose">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Creating memorable celebrations with creative and elegant decorations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link to="/services" key={s.title} className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-lg text-foreground">{s.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Gallery Preview */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-card group">
              <img src={img} alt={`Decoration gallery ${i + 1}`} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button className="bg-primary text-primary-foreground hover:bg-rose-dark gap-2">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card p-6 rounded-lg shadow-card">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
              <p className="font-semibold text-foreground text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-gradient-hero text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Ready to Celebrate?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Let us transform your event into a stunning celebration. Contact us today for a free consultation!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-gold text-gold-foreground hover:opacity-90 px-8 gap-2">
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href="tel:8197051073">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 gap-2">
              <Phone className="w-4 h-4" /> 81970 51073
            </Button>
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Index;
