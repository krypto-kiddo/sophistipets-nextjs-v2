import Link from "next/link";
import Image from "next/image";

const categories = [
    { label: "Dog Food", href: "/shop?category=dog-food", img: "/logo.png" },
    { label: "Cat Food", href: "/shop?category=cat-food", img: "/logo.png" },
    { label: "Treats", href: "/shop?category=treats", img: "/logo.png" },
    { label: "Grooming", href: "/shop?category=grooming", img: "/logo.png" },
    { label: "Toys", href: "/shop?category=toys", img: "/logo.png" },
    { label: "Medicine", href: "/shop?category=medicine", img: "/logo.png" },
    { label: "Vaccines", href: "/shop?category=vaccines", img: "/logo.png" },
    { label: "Accessories", href: "/shop?category=accessories", img: "/logo.png" },
    { label: "Cat Treats", href: "/shop?category=cat-treats", img: "/logo.png" },
];

export default function CategoryGrid() {
    return (
        <section className="w-full bg-background py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-1">Browse</p>
                        <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                            Shop by <em className="text-gold not-italic italic">Category</em>
                        </h2>
                    </div>
                    <Link href="/shop" className="text-sm font-sans text-gold hover:text-gold-light transition-colors underline underline-offset-2">
                        View all →
                    </Link>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3">
                    {categories.map((cat) => (
                        <Link
                            key={cat.href}
                            href={cat.href}
                            className="flex flex-col items-center gap-2 bg-surface border border-border rounded-xl py-4 px-2 hover:border-gold hover:bg-gold/5 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-border shrink-0">
                                <Image src={cat.img} alt={cat.label} width={64} height={64} className="object-cover w-full h-full" />
                            </div>
                            <span className="text-xs font-sans font-medium text-foreground group-hover:text-gold transition-colors text-center leading-tight">
                                {cat.label}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Offer Banner */}
                <div className="mt-6 bg-foreground text-white rounded-xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-sm font-sans">
                        <span className="text-gold mr-2">✦</span>
                        <span className="font-semibold">This week:</span> Get 15% off all medicines with any vet consultation — in-store & online.
                    </p>
                    <Link href="/vet-care" className="shrink-0 bg-gold text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-gold-light transition-colors">
                        Claim Offer
                    </Link>
                </div>

            </div>
        </section>
    );
}