"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "/services" },
  { label: "Vet Care", href: "/vet-care" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.png" alt="Sophistipets logo" width={40} height={40} className="rounded-full" />
          <span className="font-serif text-lg text-foreground">
            Sophisti<em className="text-gold not-italic">pets</em>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm font-sans text-foreground hover:text-gold transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link href="/vet-care" className="bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gold-light transition-colors">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="p-2 text-foreground" aria-label="Open menu">
                <Menu size={22} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background w-72 p-0">
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
                  <Image src="/logo.png" alt="Sophistipets logo" width={32} height={32} className="rounded-full" />
                  <span className="font-serif text-base text-foreground">
                    Sophisti<em className="text-gold not-italic">pets</em>
                  </span>
                </div>

                {/* Drawer Links */}
                <ul className="flex flex-col px-6 py-4 gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-sans text-foreground hover:text-gold transition-colors border-b border-border">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Drawer CTA */}
                <div className="px-6 pt-4">
                  <Link href="/vet-care" onClick={() => setOpen(false)} className="block w-full text-center bg-gold text-white text-sm font-semibold px-5 py-3 rounded-md hover:bg-gold-light transition-colors">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}