import ServiceSection from "@/components/services/ServiceSection";
import NewsletterSection from "@/components/shared/NewsletterSection";
import Link from "next/link";

const services = [
  {
    number: "01",
    id: "vet-care",
    title: "Advanced Vet Care & Pharmacy",
    description: "Clinical excellence, not just convenience. Our veterinary team handles everything from routine checkups and preventive care to post-surgical monitoring. The in-house pharmacy means prescribed medicines are dispensed the same day — no running around the city after a consultation. Every protocol is built on rigorous clinical science, backed by our founder's background in biotechnology.",
    bullets: [
      "Comprehensive health examinations",
      "Personalized treatment planning",
      "Clinical Care",
      "Post-operative care & monitoring",
      "In-house pharmacy with 15% consultation discount",
      "Vaccination & deworming schedules",
    ],
    image: "/vetcare.jpg",
    imageAlt: "Advanced veterinary care at Sophistipets",
    reverse: false,
  },
  {
    number: "02",
    id: "emergency",
    title: "Round-the-Clock Emergency & Critical Care",
    description: "Because emergencies don't wait for morning. This is the service that Sophistipets was founded to provide. A real vet, available at any hour — not a voicemail, not a callback system. Our emergency and critical care unit handles trauma, sudden illness, post-surgical complications, and conditions requiring intensive monitoring.",
    bullets: [
      "24×7 emergency vet on call",
      "Critical care & ICU monitoring",
      "Trauma and acute illness management",
      "Limited overnight admissions for critical cases",
      "Post-surgical intensive monitoring",
      "Emergency clinical care",
    ],
    image: "/emergency.jpg",
    imageAlt: "Emergency pet care available 24x7",
    reverse: true,
  },
  {
    number: "03",
    id: "grooming",
    title: "Grooming",
    description: "A gentle experience your pet will actually enjoy. Our grooming service is designed with the animal's comfort as the priority — not speed, not volume. Each session is handled with patience and care, tailored to your pet's temperament and coat type.",
    bullets: [
      "Bath, blow-dry & brush",
      "Breed-specific haircuts",
      "Nail trimming & ear cleaning",
      "De-shedding treatments",
      "Medicated baths on vet recommendation",
      "Gentle handling for anxious pets",
    ],
    image: "/grooming.jpg",
    imageAlt: "Expert pet grooming at Sophistipets",
    reverse: false,
  },
  {
    number: "04",
    id: "walks",
    title: "Walks & Training",
    description: "Structure, discipline, and a good run. Regular, disciplined walks are as important for a dog's mental health as they are for physical fitness. Our walking service follows structured routes with trained handlers who understand canine behaviour.",
    bullets: [
      "Structured daily walks",
      "Trained, experienced handlers",
      "Behaviour-aware approach",
      "Basic obedience training",
      "Leash manners & recall training",
      "Suitable for all breeds and sizes",
    ],
    image: "/training.jpg",
    imageAlt: "Dog walking and training services",
    reverse: true,
  },
  {
    number: "05",
    id: "nutrition",
    title: "Nutrition, Toys & Everyday Essentials",
    description: "Everything your pet needs, stocked and ready. Beyond healthcare, Sophistipets carries a curated selection of nutrition products, toys, and everyday essentials from trusted brands — Royal Canin, Pedigree, Whiskas, Chip Chop, and more.",
    bullets: [
      "Premium pet food — dogs & cats",
      "Vet-recommended therapeutic diets",
      "Treats & chews",
      "Toys & enrichment products",
      "Accessories & hygiene products",
      "Brands: Royal Canin, Pedigree, Whiskas & more",
    ],
    image: "/toys.jpg",
    imageAlt: "Pet nutrition and everyday essentials",
    reverse: false,
  },
];

export default function ServicesPage() {
  return (
    <main>
        {/* Page Hero */}
        <section className="w-full bg-background border-b border-border py-12 md:py-20">
        <div className="w-full max-w-3xl mx-auto px-4 md:px-6">
            <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-3">
            What we offer
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Care that goes{" "}
            <em className="text-gold not-italic italic">beyond the basics</em>
            </h1>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
            From emergency clinical care at 3am to a gentle grooming session on a Sunday afternoon — Sophistipets is built to be the only pet care address you ever need in Kolkata.
            </p>

            {/* Anchor Links */}
            <div className="flex flex-wrap gap-2">
            {services.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-xs font-sans font-medium bg-surface border border-border text-foreground px-3 py-1.5 rounded-full hover:border-gold hover:text-gold transition-colors">
                {s.title}
                </a>
            ))}
            </div>
        </div>
        </section>

        {/* Service Sections */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        {services.map((service) => (
            <ServiceSection key={service.id} {...service} />
        ))}
        </div>

      {/* Bottom CTA */}
        <section className="w-full border-t border-border py-12 md:py-16" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-xl">
            <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-2">
            Get in touch
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Have questions about{" "}
            <em className="text-gold not-italic italic">any service?</em>
            </h2>
            <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
            Call us, WhatsApp us, or walk in. We're at 10A Gour Ghosh Road, Bhowanipore — and our emergency line is always answered.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+919831392669" className="bg-gold text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-gold-light transition-colors">
                Call +91 98313 92669
            </a>
            <a href="https://wa.me/919831392669" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-md hover:border-gold hover:text-gold transition-colors">
                WhatsApp Us
            </a>
            </div>
        </div>
        </section>

      <NewsletterSection />
    </main>
  );
}