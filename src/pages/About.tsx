import { Heart, Award, Users, Sparkles } from "lucide-react";
import heroImg from "@/assets/flower-decor.jpg";

const stats = [
  { icon: Heart, label: "Happy Clients", value: "500+" },
  { icon: Award, label: "Events Decorated", value: "1000+" },
  { icon: Users, label: "Years Experience", value: "8+" },
  { icon: Sparkles, label: "Unique Themes", value: "100+" },
];

const About = () => (
  <>
    <section className="py-16 md:py-24 bg-gradient-rose">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-primary">Janu Decors</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded by <strong className="text-foreground">Srinatha V.P</strong>, Janu Decors has been Bangalore's trusted partner for creating stunning event decorations. With a passion for beauty and an eye for detail, we specialize in transforming ordinary venues into extraordinary celebration spaces.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From intimate birthday parties to grand wedding receptions, our team brings creativity and professionalism to every event. We use premium quality flowers, balloons, and custom decorative elements to ensure each celebration is unique and memorable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Located in Marathahalli, Bangalore, we serve clients across the city and nearby areas. Our mission is simple: <em className="text-foreground font-medium">make every celebration unforgettable</em>.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-card">
            <img src={heroImg} alt="Beautiful flower decoration by Janu Decors" width={800} height={600} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-card rounded-lg shadow-card">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          To bring joy and beauty to every celebration by crafting creative, elegant, and personalized decorations that reflect the spirit of your special moments.
        </p>
      </div>
    </section>
  </>
);

export default About;
