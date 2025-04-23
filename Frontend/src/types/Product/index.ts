// Product type
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Context value type
interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export type { Product, ProductContextType };
