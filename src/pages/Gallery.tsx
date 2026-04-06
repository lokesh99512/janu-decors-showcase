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
import galleryWeddingMandap from "@/assets/gallery-wedding-mandap.jpg";
import galleryFlowerDoor from "@/assets/gallery-flower-door.jpg";
import galleryMandapPillars from "@/assets/gallery-mandap-pillars.jpg";
import galleryGarlands from "@/assets/gallery-garlands.jpg";
import galleryStageYellow from "@/assets/gallery-stage-yellow.jpg";
import galleryStageFlowers from "@/assets/gallery-stage-flowers.jpg";
import galleryDoorMarigold from "@/assets/gallery-door-marigold.jpg";
import galleryTempleMandap from "@/assets/gallery-temple-mandap.jpg";
import galleryHouseLights from "@/assets/gallery-house-lights.jpg";
import galleryGrandMandap from "@/assets/gallery-grand-mandap.jpg";
import galleryBirthdayAtharva from "@/assets/gallery-birthday-atharva.jpg";
import galleryRangoli from "@/assets/gallery-rangoli.jpg";
import galleryPinkStage from "@/assets/gallery-pink-stage.jpg";
import galleryPurpleReception from "@/assets/gallery-purple-reception.jpg";
import galleryBabyOcean from "@/assets/gallery-baby-ocean.jpg";
import galleryBabyPrince from "@/assets/gallery-baby-prince.jpg";
import galleryBirthday60 from "@/assets/gallery-birthday-60.jpg";
import galleryPurpleWedding from "@/assets/gallery-purple-wedding.jpg";
import galleryBirthdayStrawberry from "@/assets/gallery-birthday-strawberry.jpg";
import galleryFlowerArch from "@/assets/gallery-flower-arch.jpg";
import galleryLionKing from "@/assets/gallery-lion-king.jpg";
import galleryMarigoldStage from "@/assets/gallery-marigold-stage.jpg";
import galleryWhiteStage from "@/assets/gallery-white-stage.jpg";
import galleryTraditionalChair from "@/assets/gallery-traditional-chair.jpg";
import galleryJungleBirthday from "@/assets/gallery-jungle-birthday.jpg";
import galleryKrishnaStage from "@/assets/gallery-krishna-stage.jpg";
import galleryBalloonArt from "@/assets/gallery-balloon-art.jpg";
import galleryPujaSetup from "@/assets/gallery-puja-setup.jpg";
import galleryNamingCeremony from "@/assets/gallery-naming-ceremony.jpg";
import galleryGreenSofa from "@/assets/gallery-green-sofa.jpg";

type Category = "All" | "Wedding" | "Birthday" | "Baby Shower" | "Others";

const images: { src: string; alt: string; category: Category[] }[] = [
  { src: weddingImg, alt: "Wedding stage decoration", category: ["Wedding"] },
  { src: gallery1, alt: "Engagement ceremony decoration", category: ["Wedding"] },
  { src: gallery4, alt: "Grand wedding reception", category: ["Wedding"] },
  { src: heroImg, alt: "Wedding balloon and flower setup", category: ["Wedding"] },
  { src: galleryWeddingMandap, alt: "Wedding mandap with flower garlands", category: ["Wedding"] },
  { src: galleryMandapPillars, alt: "Traditional mandap with pillars", category: ["Wedding"] },
  { src: galleryStageYellow, alt: "Wedding stage with yellow drapes", category: ["Wedding"] },
  { src: galleryStageFlowers, alt: "Grand stage with flower wall", category: ["Wedding"] },
  { src: galleryTempleMandap, alt: "Traditional temple style mandap", category: ["Wedding"] },
  { src: galleryHouseLights, alt: "House decoration with fairy lights", category: ["Wedding"] },
  { src: galleryGrandMandap, alt: "Grand traditional mandap decoration", category: ["Wedding"] },
  { src: galleryPinkStage, alt: "Pink floral stage decoration", category: ["Wedding"] },
  { src: galleryPurpleReception, alt: "Purple flower reception setup", category: ["Wedding"] },
  { src: galleryPurpleWedding, alt: "Purple themed wedding stage", category: ["Wedding"] },
  { src: galleryFlowerArch, alt: "Flower arch with sofa setup", category: ["Wedding"] },
  { src: galleryWhiteStage, alt: "Elegant white floral stage", category: ["Wedding"] },
  { src: galleryMarigoldStage, alt: "Marigold and green stage setup", category: ["Wedding"] },
  { src: galleryTraditionalChair, alt: "Traditional marigold chair setup", category: ["Wedding"] },
  { src: galleryGreenSofa, alt: "Tropical green leaf sofa decoration", category: ["Wedding"] },
  { src: galleryKrishnaStage, alt: "Krishna theme decoration", category: ["Wedding"] },
  { src: galleryPujaSetup, alt: "Traditional puja ceremony setup", category: ["Wedding"] },
  { src: birthdayImg, alt: "Birthday party decoration", category: ["Birthday"] },
  { src: gallery2, alt: "Kids birthday theme decoration", category: ["Birthday"] },
  { src: galleryBirthdayAtharva, alt: "Birthday balloon arch decoration", category: ["Birthday"] },
  { src: galleryBirthday60, alt: "60th birthday celebration setup", category: ["Birthday"] },
  { src: galleryBirthdayStrawberry, alt: "Strawberry theme birthday party", category: ["Birthday"] },
  { src: galleryLionKing, alt: "Lion King theme birthday", category: ["Birthday"] },
  { src: galleryJungleBirthday, alt: "Jungle safari theme birthday", category: ["Birthday"] },
  { src: babyShowerImg, alt: "Baby shower decoration", category: ["Baby Shower"] },
  { src: gallery3, alt: "Naming ceremony decoration", category: ["Baby Shower"] },
  { src: galleryBabyOcean, alt: "Ocean theme baby shower", category: ["Baby Shower"] },
  { src: galleryBabyPrince, alt: "Prince theme first birthday", category: ["Baby Shower"] },
  { src: galleryNamingCeremony, alt: "Grand naming ceremony stage", category: ["Baby Shower"] },
  { src: balloonImg, alt: "Balloon arch decoration", category: ["Others"] },
  { src: flowerImg, alt: "Flower arrangement", category: ["Others"] },
  { src: customImg, alt: "Custom theme party", category: ["Others"] },
  { src: galleryFlowerDoor, alt: "Door flower decoration", category: ["Others"] },
  { src: galleryGarlands, alt: "Traditional wedding garlands", category: ["Others"] },
  { src: galleryDoorMarigold, alt: "Marigold door entrance decoration", category: ["Others"] },
  { src: galleryRangoli, alt: "Flower rangoli with brass lamp", category: ["Others"] },
  { src: galleryBalloonArt, alt: "Fun balloon art creations", category: ["Others"] },
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
