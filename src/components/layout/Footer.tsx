import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const shopLinks = [
  { label: "Dog Food", href: "/shop?category=dog-food" },
  { label: "Cat Food", href: "/shop?category=cat-food" },
  { label: "Treats", href: "/shop?category=treats" },
  { label: "Medicines", href: "/shop?category=medicine" },
  { label: "Accessories", href: "/shop?category=accessories" },
  { label: "Toys", href: "/shop?category=toys" },
];

const serviceLinks = [
  { label: "24×7 Vet Care", href: "/vet-care" },
  { label: "Critical Care", href: "/services/critical-care" },
  { label: "Grooming", href: "/services/grooming" },
  { label: "Dog Walking", href: "/services/dog-walking" },
  { label: "Vaccination", href: "/services/vaccination" },
  { label: "Pharmacy", href: "/services/pharmacy" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Track Order", href: "/track-order" },
  { label: "Returns", href: "/returns" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground border-t border-border mt-20">
      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Sophistipets" width={36} height={36} className="rounded-full bg-white p-0.5" />
              <span className="font-serif text-base text-white">
                Sophisti<em className="text-gold not-italic">pets</em>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Kolkata's full-service pet care centre — clinical excellence and everyday warmth, in the heart of Bhowanipore.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/60">
  <div className="flex items-start gap-2">
    <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
    <span>10A Gour Ghosh Road, Bhowanipore, Kolkata – 700025</span>
  </div>
  <div className="flex items-center gap-2">
    <Phone size={14} className="shrink-0 text-gold" />
    <div className="flex flex-col gap-1">
      <a href="tel:+919831392669" className="hover:text-gold transition-colors">+91 98313 92669</a>
      <a href="tel:+918981408631" className="hover:text-gold transition-colors">+91 89814 08631</a>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Mail size={14} className="shrink-0 text-gold" />
    <a href="mailto:sophistipets.bhowanipore@gmail.com" className="hover:text-gold transition-colors break-all">sophistipets.bhowanipore@gmail.com</a>
  </div>
</div>
          </div>

          {/* Shop Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-xs text-white/50 uppercase tracking-widest">Shop</h4>
            <ul className="flex flex-col gap-2">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-xs text-white/50 uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-xs text-white/50 uppercase tracking-widest">Company</h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <span>© 2026 Sophistipets. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}