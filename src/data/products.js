import { imageAssets } from './assets.js';

export const banners = [
  {
    id: 1,
    image: imageAssets.banners.banner_sale,
    link: "#",
    title: "Summer Sale",
    subtitle: "Up to 50% Off Top Fashion",
    buttonText: "Shop Now",
    targetCategory: "Clothing"
  },
  {
    id: 2,
    image: imageAssets.banners.banner_electronics,
    link: "#",
    title: "New Arrivals in Electronics",
    subtitle: "Upgrade your perfect workspace today.",
    buttonText: "Discover More",
    targetCategory: "Electronics"
  },
  {
    id: 3,
    image: imageAssets.banners.banner_home,
    link: "#",
    title: "Refresh Your Home",
    subtitle: "Cozy home essentials for you.",
    buttonText: "Browse Selection",
    targetCategory: "Home Essentials"
  }
];

export const products = [
  // Electronics
  { id: 1, title: "Wireless Noise Cancelling Headphones", price: 299.99, image: imageAssets.products.headphones, rating: 4.5, stock: 15, category: "Electronics" },
  { id: 6, title: "Wireless Mouse", price: 24.99, image: imageAssets.products.mouse, rating: 4.4, stock: 25, category: "Electronics" },
  { id: 7, title: "4K Smart TV 55 Inch", price: 499.99, image: imageAssets.products.tv, rating: 4.7, stock: 10, category: "Electronics" },
  { id: 8, title: "Bluetooth Speaker Portable", price: 45.99, image: imageAssets.products.speaker, rating: 4.3, stock: 40, category: "Electronics" },
  { id: 9, title: "Gaming Keyboard RGB", price: 65.00, image: imageAssets.products.keyboard, rating: 4.6, stock: 20, category: "Electronics" },

  // Clothing
  { id: 5, title: "Men's Classic T-Shirt", price: 14.99, image: imageAssets.products.tshirt, rating: 4.6, stock: 100, category: "Clothing" },
  { id: 10, title: "Women's Running Shoes", price: 69.99, image: imageAssets.products.shoes, rating: 4.5, stock: 35, category: "Clothing" },
  { id: 11, title: "Unisex Winter Jacket", price: 89.99, image: imageAssets.products.jacket, rating: 4.2, stock: 15, category: "Clothing" },
  { id: 12, title: "Denim Jeans Blue", price: 39.99, image: imageAssets.products.jeans, rating: 4.1, stock: 50, category: "Clothing" },
  { id: 13, title: "Cotton Socks 5-Pack", price: 9.99, image: imageAssets.products.socks, rating: 4.8, stock: 200, category: "Clothing" },

  // Home Essentials
  { id: 4, title: "Non-Stick Frying Pan", price: 29.99, image: imageAssets.products.pan, rating: 4.1, stock: 30, category: "Home Essentials" },
  { id: 14, title: "Cotton Bath Towel Set", price: 24.99, image: imageAssets.products.towels, rating: 4.7, stock: 60, category: "Home Essentials" },
  { id: 15, title: "Stainless Steel Water Bottle", price: 19.99, image: imageAssets.products.bottle, rating: 4.4, stock: 80, category: "Home Essentials" },
  { id: 16, title: "Soft Throw Blanket", price: 34.99, image: imageAssets.products.blanket, rating: 4.6, stock: 45, category: "Home Essentials" },
  { id: 17, title: "Ceramic Coffee Mug Set", price: 15.99, image: imageAssets.products.mugs, rating: 4.5, stock: 0, category: "Home Essentials" },

  // Books
  { id: 18, title: "Bestseller Fiction Novel", price: 14.99, image: imageAssets.products.fiction, rating: 4.8, stock: 45, category: "Books" },
  { id: 19, title: "Science Fiction Anthology", price: 19.99, image: imageAssets.products.scifi, rating: 4.6, stock: 30, category: "Books" },
  { id: 20, title: "Gordon's Master Cookbook", price: 29.99, image: imageAssets.products.cookbook, rating: 4.9, stock: 20, category: "Books" },
  { id: 21, title: "World History Biography", price: 24.99, image: imageAssets.products.history, rating: 4.3, stock: 15, category: "Books" },
  { id: 22, title: "Illustrated Children's Book", price: 12.99, image: imageAssets.products.childrenbook, rating: 4.7, stock: 60, category: "Books" },

  // Beauty & Personal Care
  { id: 23, title: "Hydrating Face Moisturizer", price: 22.99, image: imageAssets.products.moisturizer, rating: 4.5, stock: 40, category: "Beauty & Personal Care" },
  { id: 24, title: "Luxury Perfume Spray", price: 89.99, image: imageAssets.products.perfume, rating: 4.8, stock: 12, category: "Beauty & Personal Care" },
  { id: 25, title: "Premium Men's Shaving Kit", price: 34.99, image: imageAssets.products.shavingkit, rating: 4.4, stock: 25, category: "Beauty & Personal Care" },
  { id: 26, title: "Aromatherapy Essential Oil Diffuser", price: 27.99, image: imageAssets.products.diffuser, rating: 4.6, stock: 50, category: "Beauty & Personal Care" },
  { id: 27, title: "Organic Handcrafted Soap Set", price: 18.99, image: imageAssets.products.soap, rating: 4.7, stock: 80, category: "Beauty & Personal Care" },

  // Sports & Outdoors
  { id: 28, title: "Non-Slip Yoga Mat", price: 29.99, image: imageAssets.products.yogamat, rating: 4.5, stock: 100, category: "Sports & Outdoors" },
  { id: 29, title: "Adjustable Dumbbell Set", price: 149.99, image: imageAssets.products.dumbbell, rating: 4.8, stock: 5, category: "Sports & Outdoors" },
  { id: 30, title: "Pro Graphite Tennis Racket", price: 119.99, image: imageAssets.products.racket, rating: 4.6, stock: 15, category: "Sports & Outdoors" },
  { id: 31, title: "4-Person Camping Tent", price: 199.99, image: imageAssets.products.tent, rating: 4.4, stock: 10, category: "Sports & Outdoors" },
  { id: 32, title: "Waterproof Hiking Backpack", price: 69.99, image: imageAssets.products.backpack, rating: 4.7, stock: 35, category: "Sports & Outdoors" }
];

export const getCategories = () => {
  const categories = new Set(products.map(p => p.category));
  return ["All", ...Array.from(categories)];
};
