import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "24/7", label: "Emergency Vet" },
  { value: "500+", label: "Products" },
  { value: "15%", label: "Off Medicines" },
];

export default function HeroHome() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left — Text Content */}
        <div className="flex flex-col gap-6">

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="block w-8 h-px bg-gold" />
            <span className="text-xs font-sans font-semibold text-gold uppercase tracking-widest">
              Kolkata's Premier Pet Care Destination
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            One roof for every{" "}
            <em className="text-gold not-italic italic">pet need</em>{" "}
            you have.
          </h1>

          {/* Subtext */}
          <p className="font-sans text-base text-muted leading-relaxed max-w-md">
            From advanced clinical care to everyday nutrition — Sophistipets brings clinical expertise and genuine warmth together, right here in Bhowanipore.
          </p>

          {/* PhD Badge */}
          <div className="flex items-start gap-3 bg-surface border border-border rounded-lg px-4 py-3 max-w-sm">
            <span className="font-serif text-2xl text-gold font-bold">Dr</span>
            <p className="text-sm text-muted leading-snug">
              <span className="font-semibold text-foreground">PhD-backed clinical care</span><br />
              Founded by a biotechnologist with a doctorate — every protocol rooted in science, not guesswork.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link href="/vet-care" className="bg-gold text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-gold-light transition-colors">
              Book a Vet Visit
            </Link>
            <Link href="/shop" className="border border-gold text-gold text-sm font-semibold px-6 py-3 rounded-md hover:bg-gold hover:text-white transition-colors">
              Explore Shop
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-6 pt-2">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted font-sans">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right — Hero Image */}
        <div className="relative w-full aspect-[4/5] md:aspect-[4/5] lg:aspect-[3/4] max-h-[560px] rounded-2xl overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="A happy pet at Sophistipets"
            fill
            className="object-cover"
            priority
          />

          {/* Live Badge */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-sans font-semibold text-foreground">Vet available now</span>
          </div>
        </div>

      </div>

      {/* Services Strip */}
      <div className="border-t border-border bg-surface">
        <div className="container mx-auto px-4 md:px-6 py-4 overflow-x-auto">
          <div className="flex items-center gap-6 md:gap-10 min-w-max md:min-w-0 md:justify-between">
            {[
              { label: "Emergency Vet", sub: "Critical & ICU care", dot: true },
              { label: "Clinical Care", sub: "Advanced in-house medical management", dot: false },
              { label: "Grooming", sub: "Gentle expert grooming", dot: false },
              { label: "Dog Walking", sub: "Disciplined walks & training", dot: false },
              { label: "Pet Shop", sub: "500+ products stocked", dot: false },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-0.5 shrink-0">
                <div className="flex items-center gap-1.5">
                  {item.dot && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />}
                  <span className="text-sm font-sans font-semibold text-foreground">{item.label}</span>
                </div>
                <span className="text-xs text-muted font-sans">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}