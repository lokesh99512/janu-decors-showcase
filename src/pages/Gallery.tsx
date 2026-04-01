import { useState } from "react";
import weddingImg from "@/assets/wedding-decor.jpg";
import birthdayImg from "@/assets/birthday-decor.jpg";
import babyShowerImg from "@/assets/baby-shower-decor.jpg";
import balloonImg from "@/assets/balloon-decor.jpg";
import flowerImg from "@/assets/flower-decor.jpg";
import customImg from "@/assets/custom-theme-decor.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/hero-wedding.jpg";

type Category = "All" | "Wedding" | "Birthday" | "Baby Shower" | "Others";

const images: { src: string; alt: string; category: Category[] }[] = [
  { src: weddingImg, alt: "Wedding stage decoration", category: ["Wedding"] },
  { src: gallery1, alt: "Engagement ceremony decoration", category: ["Wedding"] },
  { src: gallery4, alt: "Grand wedding reception", category: ["Wedding"] },
  { src: heroImg, alt: "Wedding balloon and flower setup", category: ["Wedding"] },
  { src: birthdayImg, alt: "Birthday party decoration", category: ["Birthday"] },
  { src: gallery2, alt: "Kids birthday theme decoration", category: ["Birthday"] },
  { src: babyShowerImg, alt: "Baby shower decoration", category: ["Baby Shower"] },
  { src: gallery3, alt: "Naming ceremony decoration", category: ["Baby Shower"] },
  { src: balloonImg, alt: "Balloon arch decoration", category: ["Others"] },
  { src: flowerImg, alt: "Flower arrangement", category: ["Others"] },
  { src: customImg, alt: "Custom theme party", category: ["Others"] },
];

const categories: Category[] = ["All", "Wedding", "Birthday", "Baby Shower", "Others"];

const Gallery = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? images : images.filter((img) => img.category.includes(active));

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">Our Gallery</h1>
          <p className="text-muted-foreground">Browse our beautiful decoration setups</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-card group cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={600}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
