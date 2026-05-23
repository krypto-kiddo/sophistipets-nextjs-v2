import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "24×7 Emergency",
    description: "Critical care, always on. Day or night, we're here.",
  },
  {
    icon: "🏥",
    title: "Advanced Medical Care",
    description: "Complex case management with monitored recovery and critical care support.",
  },
  {
    icon: "💊",
    title: "In-house Pharmacy",
    description: "Same-day prescription and dispensing.",
  },
  {
    icon: "🎓",
    title: "PhD-backed Protocols",
    description: "Science-first approach to every pet's health.",
  },
];

const highlights = [
  {
    title: "PhD in Biotechnology — Founder",
    description: "Every treatment protocol built on doctoral-level science, not commercial shortcuts.",
  },
  {
    title: "15% off all prescribed medicines",
    description: "Vet consultations come with exclusive medicine discounts, only at Sophistipets.",
  },
  {
    title: "24×7 emergency — a real vet, every time",
    description: "Not a helpline. Not a voicemail. A qualified vet, any hour of the night.",
  },
];

export default function WhySophistipets() {
  return (
    <section className="w-full bg-surface py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-2">
            Why Sophistipets
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
            Where science meets{" "}
            <em className="text-gold not-italic italic">genuine care</em>
          </h2>
          <p className="mt-4 text-base text-muted font-sans leading-relaxed">
            We're not a pet store that added a vet corner. We're a full-spectrum pet care centre — the only one in South Kolkata where your pet can receive emergency treatment and go home with vet-prescribed nutrition the same day.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — Highlights */}
          <div className="flex flex-col gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-border pb-6 last:border-0 last:pb-0">
                <span className="mt-1 w-2 h-2 rounded-full bg-gold shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-sm text-foreground mb-1">{item.title}</p>
                  <p className="font-sans text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}

            <Link href="/about" className="inline-flex items-center text-sm font-sans font-semibold text-gold hover:text-gold-light transition-colors underline underline-offset-2 mt-2">
              Meet Our Team →
            </Link>
          </div>

          {/* Right — Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-gold/40 hover:shadow-sm transition-all">
                <span className="text-2xl">{feature.icon}</span>
                <p className="font-sans font-semibold text-sm text-foreground">{feature.title}</p>
                <p className="font-sans text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}