import Image from "next/image";
import Link from "next/link";
import NewsletterSection from "@/components/shared/NewsletterSection";

const values = [
  {
    number: "01",
    title: "Timely Care Above All",
    description: "Every hour matters in a medical emergency. Our 24×7 availability exists because we have seen firsthand what delayed care costs.",
  },
  {
    number: "02",
    title: "Transparency in Treatment",
    description: "Pet parents deserve to understand what is happening, why, and what it costs. No ambiguity, no shortcuts.",
  },
  {
    number: "03",
    title: "Science-First Protocols",
    description: "Every treatment decision is grounded in clinical evidence. Compassion without competence is not enough.",
  },
];

const missionPoints = [
  "Veterinary Consultation",
  "Advanced Clinical Care",
  "Emergency & Critical Care",
  "Limited Overnight Admissions",
  "In-house Pharmacy",
  "Vaccination & Preventive Care",
];

export default function AboutPage() {
  return (
    <main>

      {/* Page Hero — dark, centered */}
      <section className="w-full border-b border-white/10 py-16 md:py-24" style={{ background: "linear-gradient(180deg, #2C2A25 0%, #1A1A1A 100%)" }}>
        <div className="w-full max-w-3xl mx-auto px-4 md:px-6 text-center flex flex-col items-center gap-4">
          <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Built from loss.{" "}
            <em className="text-gold not-italic italic">Driven by purpose.</em>
          </h1>
          <p className="font-sans text-base text-white/60 leading-relaxed max-w-xl">
            Sophistipets was born from a simple, painful truth — that accessible, round-the-clock veterinary care should never be a luxury in a city like Kolkata.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="w-full bg-background py-12 md:py-20">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">

            {/* Left — Sticky founder card */}
            <div className="md:sticky md:top-24 flex flex-col items-start gap-3">
              <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest">
                The Founder
              </p>
              <h2 className="font-serif text-3xl text-foreground leading-tight">
                Adhiraj<br />Dasgupta
              </h2>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-border">
                <Image
                  src="/adhiraj.jpg"
                  alt="Adhiraj Dasgupta"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="text-sm font-sans text-muted">Founder, Sophistipets</p>
            </div>

            {/* Right — Story chapters */}
            <div className="flex flex-col divide-y divide-border">

              {/* Chapter 01 */}
              <div className="py-8 first:pt-0 flex flex-col gap-3">
                <span className="font-serif text-2xl text-gold/40 font-bold">01</span>
                <h3 className="font-serif text-xl text-foreground">Where it began</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Adhiraj's relationship with animals didn't start in a clinic — it started on the streets. Strays, rescued squirrels, injured birds, fragile kittens that arrived without warning and left a mark that never faded. Each encounter deepened a sense of responsibility that would eventually shape everything that Sophistipets stands for today.
                </p>
              </div>

              {/* Chapter 02 */}
              <div className="py-8 flex flex-col gap-3">
                <span className="font-serif text-2xl text-gold/40 font-bold">02</span>
                <h3 className="font-serif text-xl text-foreground">The gap that couldn't be ignored</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Repeated experiences of losing rescued animals — not from lack of effort, but from lack of accessible emergency veterinary care in Kolkata — made the problem impossible to look away from. A city of millions, and yet a pet in critical condition after midnight had nowhere reliable to go. That gap became the core motivation behind SophistiPets.
                </p>
                {/* Quote after chapter 02 */}
                <blockquote className="mt-2 bg-surface border-l-2 border-gold rounded-r-lg px-4 py-3">
                  <p className="font-serif text-sm text-foreground italic leading-relaxed">
                    "Timely veterinary care, emergency treatment, and clinical support should be accessible to every pet parent in Kolkata — not just the fortunate few."
                  </p>
                </blockquote>
              </div>

              {/* Chapter 03 */}
              <div className="py-8 flex flex-col gap-3">
                <span className="font-serif text-2xl text-gold/40 font-bold">03</span>
                <h3 className="font-serif text-xl text-foreground">What Sophistipets is today</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Today, Sophistipets operates as a holistic pet care centre in Bhowanipore — focused on professional medical reliability, transparency, and compassionate care. Not a conventional retail pet store, but a full-spectrum facility where your pet can receive emergency treatment, clinical intervention, and round-the-clock monitoring under one trusted roof.
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  The philosophy is simple and firm: every animal deserves access to the same standard of care that Adhiraj wished had existed when he needed it most.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission Section — dark */}
      <section className="w-full bg-foreground border-t border-white/10 py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            <div className="flex flex-col gap-5">
              <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest">
                Our Mission
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug">
                One roof.{" "}
                <em className="text-gold not-italic italic">Complete care.</em>
              </h2>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Sophistipets bridges the gap between compassionate animal care and advanced veterinary, clinical, and emergency services — making world-class pet healthcare accessible in Kolkata.
              </p>
              <Link href="/vet-care" className="inline-flex w-fit bg-gold text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-gold-light transition-colors">
                Book a Consultation
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {missionPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-sans text-white/80">
                  <span className="text-gold shrink-0">✦</span>
                  {point}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full bg-background border-t border-border py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-3">
            What we stand for
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug mb-8">
            Our <em className="text-gold not-italic italic">core values</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-3">
                <span className="font-serif text-4xl text-gold/20 font-bold leading-none">{value.number}</span>
                <h3 className="font-serif text-lg text-foreground">{value.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — warm light */}
      <section className="w-full bg-foreground border-t border-white/10 py-12 md:py-16">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-6 text-center flex flex-col gap-5 items-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug">
            Your pet deserves{" "}
            <em className="text-gold not-italic italic">better care.</em>
          </h2>
          <p className="font-sans text-sm text-white/60 leading-relaxed">
            Visit us at 10A Gour Ghosh Road, Bhowanipore — or call our 24×7 emergency line anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/vet-care" className="bg-gold text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-gold-light transition-colors">
              Book an Appointment
            </Link>
            <a href="tel:+919831392669" className="border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-md hover:border-gold hover:text-gold transition-colors">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}