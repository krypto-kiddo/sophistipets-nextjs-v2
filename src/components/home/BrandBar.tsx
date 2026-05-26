"use client";
import Link from "next/link";
import Image from "next/image";


const brands = [
  { label: "Pedigree", href: "/shop?brand=pedigree", img: "/images/brands/pedigree.webp" },
  { label: "Royal Canin", href: "/shop?brand=royal-canin", img: "/images/brands/royalcanin.png" },
  { label: "Whiskas", href: "/shop?brand=whiskas", img: "/images/brands/whiskas.jpg" },
  { label: "Drools", href: "/shop?brand=drools", img: "/images/brands/drools.webp" },
  { label: "Purina", href: "/shop?brand=purina", img: "/images/brands/purina.jpg" },
  { label: "Farmina", href: "/shop?brand=farmina", img: "/images/brands/farmina.png" },
  { label: "Orijen", href: "/shop?brand=orijen", img: "/images/brands/orijen.jpg" },
  { label: "Kittos", href: "/shop?brand=kittos", img: "/images/brands/kittos.png" },
  { label: "Acana", href: "/shop?brand=acana", img: "/images/brands/acana.jpg" },
  { label: "Chip Chops", href: "/shop?brand=chip-chop", img: "/images/brands/chipchop.png" },
  { label: "Bellotta", href: "/shop?brand=bellotta", img: "/images/brands/bellotta.webp" },
  { label: "Me-O", href: "/shop?brand=me-o", img: "/images/brands/meo.png" },
  { label: "Trixie", href: "/shop?brand=trixie", img: "/images/brands/trixie.jpg" },
  { label: "Himalaya Pet", href: "/shop?brand=himalaya-pet", img: "/images/brands/himalaya.jpg" },
];

export default function BrandBar() {
  return (
    <section className="w-full bg-background border-t border-border py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6">
        <p className="text-xs font-sans font-semibold text-muted uppercase tracking-widest text-center">
          Trusted brands we stock
        </p>
      </div>

{/* Marquee wrapper */}
<div className="overflow-hidden w-full max-w-full">
  <div
    className="flex gap-10 w-max"
    style={{
      animation: "marquee 20s linear infinite",
      willChange: "transform",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
    onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
  >
    {[...brands, ...brands].map((brand, i) => (
      <Link
        key={i}
        href={brand.href}
        className="flex flex-col items-center gap-2 group shrink-0"
      >
        <div className="relative w-20 h-20 rounded-full bg-surface border border-border overflow-hidden group-hover:border-gold transition-colors">
  <Image
    src={brand.img}
    alt={brand.label}
    fill
    className="object-cover"
  />
</div>
        <span className="text-xs font-sans text-muted group-hover:text-gold transition-colors">
          {brand.label}
        </span>
      </Link>
    ))}
  </div>
</div>
    </section>
  );
}