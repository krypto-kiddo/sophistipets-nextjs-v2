import Image from "next/image";
import NewsletterSection from "@/components/shared/NewsletterSection";
import FAQAccordion from "@/components/shared/FAQAccordion";

const services = [
  { icon: "🩺", title: "General Consultation", description: "Routine checkups, health assessments, and preventive care for dogs and cats." },
  { icon: "⚡", title: "24×7 Emergency Care", description: "Round-the-clock emergency response. A real vet answers, every time." },
  { icon: "🏥", title: "Clinical Care", description: "In-house clinical management for urgent cases, supervised recovery, and ongoing medical management." },
  { icon: "💊", title: "In-house Pharmacy", description: "Same-day prescription dispensing with 15% off on consultation." },
  { icon: "🛏️", title: "Limited Overnight Admission", description: "ICU-level monitoring for pets requiring round-the-clock observation." },
  { icon: "💉", title: "Vaccination & Deworming", description: "Complete preventive care schedules tailored to your pet's age and breed." },
  { icon: "📋", title: "Treatment Planning", description: "Personalized treatment protocols tailored to your pet's medical history, lifestyle, and recovery needs." },
  { icon: "🧬", title: "Post-op Monitoring", description: "Dedicated post-surgical care and recovery monitoring." },
];

const steps = [
  { number: "01", title: "Call us anytime", description: "Dial +91 98313 92669 — our emergency line is answered 24×7 by a qualified vet, not a receptionist." },
  { number: "02", title: "Bring your pet in", description: "We are at 10A Gour Ghosh Road, Bhowanipore. Walk in directly for emergencies — no appointment needed." },
  { number: "03", title: "Your pet gets treated", description: "Assessment, medical management, critical care support, and supervised overnight monitoring — all coordinated under one roof." },
];

const faqs = [
  {
    question: "Is there a 24×7 emergency vet available in Kolkata?",
    answer: "Yes. Sophistipets operates a 24×7 emergency veterinary line at +91 98313 92669. A qualified vet is available at any hour — not a voicemail or callback system.",
  },
  {
    question: "What should I do if my pet has an emergency at night?",
    answer: "Call us immediately at +91 98313 92669. Our emergency line is always answered. We are located at 10A Gour Ghosh Road, Bhowanipore — accessible from Kalighat, Rashbehari, Hazra, and Ballygunge.",
  },
  {
    question: "Can I get medicines from Sophistipets after a consultation?",
    answer: "Yes. Our in-house pharmacy dispenses prescribed medicines the same day. Pet parents who consult our vet receive a 15% discount on all prescribed medicines.",
  },
  {
    question: "Can my pet stay overnight for monitoring?",
    answer: "Yes — limited overnight admission is available exclusively for pets with active medical needs requiring round-the-clock monitoring. This is not a general boarding service.",
  },
  {
    question: "What areas in Kolkata is Sophistipets accessible from?",
    answer: "We are in Bhowanipore, easily accessible from South Kolkata including Kalighat, Rashbehari, Hazra, Ballygunge, Alipore, and Tollygunge.",
  },
];

export default function VetCarePage() {
  return (
    <main>

      {/* Page Hero — dark, two column */}
      <section className="w-full bg-foreground border-b border-white/10 py-12 md:py-20">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left — Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-green-900/40 border border-green-700/40 rounded-full px-3 py-1 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-sans font-medium text-green-400">Vet available now — Emergency line open</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Kolkata's{" "}
              <em className="text-gold not-italic italic">24×7 emergency</em>{" "}
              vet clinic.
            </h1>
            <p className="font-sans text-base text-white/60 leading-relaxed">
              Advanced veterinary care, IV, Oxygen Support, EKG monitoring, and an in-house pharmacy — all available round the clock in Bhowanipore, South Kolkata.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+919831392669" className="bg-gold text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-gold-light transition-colors">
                Call +91 98313 92669
              </a>
              <a href="https://wa.me/919831392669" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-md hover:border-gold hover:text-gold transition-colors">
                WhatsApp Us
              </a>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white">24×7</span>
                <span className="text-xs font-sans text-white/50">Emergency Line</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white">15%</span>
                <span className="text-xs font-sans text-white/50">Off on Medicines</span>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=1470&auto=format&fit=crop"
              alt="Veterinary care at Sophistipets Kolkata"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* What 24x7 means */}
      <section className="w-full bg-surface border-t border-b border-border py-12 md:py-16">
        <div className="w-full max-w-3xl mx-auto px-4 md:px-6">
          <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-3">
            Our promise
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug mb-5">
            What 24×7 actually{" "}
            <em className="text-gold not-italic italic">means here</em>
          </h2>
          <p className="font-sans text-base text-muted leading-relaxed">
            In Kolkata, most clinics that claim 24-hour availability mean a phone number that goes to voicemail after 10pm. At Sophistipets, 24×7 means a qualified vet picks up the call — at 2am, at 4am, on a public holiday. It means your pet is assessed and treated without waiting for morning. This was the gap that drove Adhiraj Dasgupta to build Sophistipets, and it remains the non-negotiable core of everything we do.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full bg-background py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-3">
            What we treat
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug mb-8">
            Veterinary services{" "}
            <em className="text-gold not-italic italic">under one roof</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-gold/40 transition-all">
                <span className="text-2xl">{service.icon}</span>
                <p className="font-sans font-semibold text-sm text-foreground">{service.title}</p>
                <p className="font-sans text-sm text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Step Process */}
      <section className="w-full bg-surface border-t border-border py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-3">
            Simple process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug mb-8">
            What happens when you{" "}
            <em className="text-gold not-italic italic">call us</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 flex flex-col gap-3">
                <span className="font-serif text-4xl text-gold/20 font-bold leading-none">{step.number}</span>
                <h3 className="font-serif text-lg text-foreground">{step.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section — emergency.jpg */}
      <section className="w-full bg-background py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1632236542159-809925d85fc0?q=80&w=1470&auto=format&fit=crop"
                alt="Sophistipets emergency veterinary care Kolkata"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest">
                Why trust us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
                Science-first care,{" "}
                <em className="text-gold not-italic italic">always</em>
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Sophistipets was founded by Adhiraj Dasgupta, a biotechnologist with a doctoral background. Every treatment protocol at Sophistipets is built on clinical evidence — not convention, not guesswork. This is what separates us from a walk-in clinic.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "PhD biotechnologist-led clinical protocols",
                  "Transparent diagnosis and treatment planning",
                  "No unnecessary procedures — ever",
                  "Every pet treated with the same urgency",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-sans text-foreground">
                    <span className="text-gold mt-0.5 shrink-0">✦</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-surface border-t border-border py-12 md:py-16">
        <div className="w-full max-w-3xl mx-auto px-4 md:px-6">
          <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-3">
            Common questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug mb-8">
            Frequently asked{" "}
            <em className="text-gold not-italic italic">questions</em>
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Location */}
      <section className="w-full bg-background border-t border-border py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-3">
            Find us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug mb-8">
            Visit us in{" "}
            <em className="text-gold not-italic italic">Bhowanipore</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.367207322603!2d88.3473415751493!3d22.527913179523644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770c2ae7373d%3A0x57d5351296179e05!2sSOPHISTIPETS%20-%20Pet%20Grooming%20Services%20%7C%20Best%20Pet%20Shop%20%7C%20Pet%20Food%20Supplies!5e0!3m2!1sen!2sin!4v1779799584261!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Info Card */}
            <div className="flex flex-col gap-4 bg-surface border border-border rounded-xl p-6">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-sans font-semibold text-muted uppercase tracking-widest">Address</p>
                <p className="text-sm font-sans text-foreground">10A Gour Ghosh Road, Bhowanipore, Kolkata – 700025</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-sans font-semibold text-muted uppercase tracking-widest">Phone</p>
                <a href="tel:+919831392669" className="text-sm font-sans text-foreground hover:text-gold transition-colors">+91 98313 92669</a>
                <a href="tel:+918981408631" className="text-sm font-sans text-foreground hover:text-gold transition-colors">+91 89814 08631</a>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-sans font-semibold text-muted uppercase tracking-widest">Email</p>
                <a href="mailto:sophistipets.bhowanipore@gmail.com" className="text-sm font-sans text-foreground hover:text-gold transition-colors break-all">sophistipets.bhowanipore@gmail.com</a>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-sans font-semibold text-muted uppercase tracking-widest">Hours</p>
                <p className="text-sm font-sans text-foreground">Emergency line: 24×7</p>
                <p className="text-sm font-sans text-foreground">Clinic hours: 9am – 9pm</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <a href="tel:+919831392669" className="bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gold-light transition-colors">
                  Call Now
                </a>
                <a href="https://maps.google.com/?q=10A+Gour+Ghosh+Road+Bhowanipore+Kolkata" target="_blank" rel="noopener noreferrer" className="border border-gold text-gold text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gold hover:text-white transition-colors">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}