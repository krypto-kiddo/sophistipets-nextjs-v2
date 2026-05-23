import Link from "next/link";
import ProductCard from "../shared/ProductCard";
import { products } from "@/lib/data/products";

export default function ProductGrid() {
  return (
    <section className="w-full bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-1">Vet-approved picks</p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Recommended <em className="text-gold not-italic italic">for You</em>
            </h2>
          </div>
          <Link href="/shop" className="text-sm font-sans text-gold hover:text-gold-light transition-colors underline underline-offset-2">
            View all products →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}