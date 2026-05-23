import Image from "next/image";
import { Product } from "@/lib/data/products";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`text-xs ${star <= rating ? "text-gold" : "text-border"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col bg-white border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-gold/40 transition-all group">
      {/* Image */}
      <div className="relative w-full aspect-square bg-surface">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-gold text-white text-xs font-semibold px-2 py-0.5 rounded-md">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 p-3">
        <span className="text-xs font-sans text-muted">{product.brand}</span>
        <p className="text-sm font-sans font-medium text-foreground leading-snug line-clamp-2">
          {product.name}
        </p>
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-semibold text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
          {product.comparePrice && (
            <span className="text-xs text-muted line-through">₹{product.comparePrice.toLocaleString("en-IN")}</span>
          )}
        </div>
      </div>
    </div>
  );
}