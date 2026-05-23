import HeroHome from "@/components/home/HeroHome";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductGrid from "@/components/home/ProductGrid";
import WhySophistipets from "@/components/home/WhySophistipets";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <CategoryGrid />
      <ProductGrid />
      <WhySophistipets />
    </main>
  );
}