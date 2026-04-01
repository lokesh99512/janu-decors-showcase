import { Link } from "react-router-dom";
import { Heart, PartyPopper, Baby, Flower2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import weddingImg from "@/assets/wedding-decor.jpg";
import birthdayImg from "@/assets/birthday-decor.jpg";
import babyShowerImg from "@/assets/baby-shower-decor.jpg";
import balloonImg from "@/assets/balloon-decor.jpg";
import flowerImg from "@/assets/flower-decor.jpg";
import customImg from "@/assets/custom-theme-decor.jpg";

const services = [
  {
    icon: Heart, title: "Wedding Decorations", img: weddingImg,
    desc: "Make your dream wedding a reality with our stunning floral and balloon arrangements. From mandap decorations to reception stage setups, we create magical wedding experiences."
  },
  {
    icon: PartyPopper, title: "Birthday Decorations", img: birthdayImg,
    desc: "Celebrate birthdays in style! We offer themed balloon arches, backdrops, table setups, and custom decorations for kids and adults."
  },
  {
    icon: Baby, title: "Baby Shower Decorations", img: babyShowerImg,
    desc: "Welcome your little one with beautiful pastel-themed decorations. Soft balloons, floral accents, and adorable setups for this special milestone."
  },
  {
    icon: PartyPopper, title: "Balloon Decorations", img: balloonImg,
    desc: "From elegant balloon arches to creative balloon walls and columns, our balloon artistry adds color and fun to any event."
  },
  {
    icon: Flower2, title: "Flower Decorations", img: flowerImg,
    desc: "Fresh and artificial flower arrangements for stages, entrances, table centerpieces, and more. Premium flowers for a luxurious touch."
  },
  {
    icon: Heart, title: "Custom Event Themes", img: customImg,
    desc: "Have a unique theme in mind? We bring your creative vision to life with fully customized decoration packages tailored to your event."
  },
];

const Services = () => (
  <>
    <section className="py-16 md:py-24 bg-gradient-rose">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">Our Services</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Professional decoration services for every type of celebration in Bangalore</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <s.icon className="w-5 h-5 text-primary" />
                  <h2 className="font-heading font-semibold text-lg text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-gradient-hero text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">Need a Custom Decoration?</h2>
        <p className="text-primary-foreground/80 mb-6">Tell us your vision and we'll make it happen!</p>
        <Link to="/contact">
          <Button size="lg" className="bg-gold text-gold-foreground hover:opacity-90 gap-2">
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </>
);

export default Services;
