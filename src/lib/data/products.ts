export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  comparePrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "pedigree-adult-chicken",
    brand: "Pedigree",
    name: "Adult Chicken & Vegetables 2.8kg",
    price: 655,
    comparePrice: 720,
    rating: 5,
    reviews: 2,
    image: "/images/products/pedigree.jpg",
    badge: "Bestseller",
  },
  {
    id: "royal-canin-maxi-puppy",
    brand: "Royal Canin",
    name: "Maxi Puppy 1kg",
    price: 1030,
    comparePrice: 1150,
    rating: 5,
    reviews: 2,
    image: "/images/products/maxi.jpg",
    badge: "Bestseller",
  },
  {
    id: "chip-chop-chicken",
    brand: "Chip Chop",
    name: "Diced Chicken Treat",
    price: 215,
    rating: 4,
    reviews: 0,
    image: "/images/products/chipchop.jpg",
  },
  {
    id: "milky-chew-stick",
    brand: "Milky Chew",
    name: "Milk Chew Stick",
    price: 390,
    rating: 4,
    reviews: 0,
    image: "/images/products/milky.jpg",
  },
];