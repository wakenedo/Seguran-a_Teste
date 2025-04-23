import { createContext, useState, ReactNode } from "react";

// Product type
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Context value type
export interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

// ✅ Export the context
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

// Mock data
const mockProducts: Product[] = [
  {
    id: 1,
    name: "T-shirt",
    price: 19.99,
    description: "Description1",
    image: "https://placehold.co/150",
  },
  {
    id: 2,
    name: "Jeans",
    price: 49.99,
    description: "Description2",
    image: "https://placehold.co/150",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 89.99,
    description: "Description 3",
    image: "https://placehold.co/150",
  },
];

// Provider component
export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(mockProducts);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
