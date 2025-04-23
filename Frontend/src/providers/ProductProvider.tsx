import { ReactNode, useState } from "react";
import { Product } from "../types/Product";
import { mockProducts } from "../MockedData";
import { ProductContext } from "../context/ProductContext";

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(mockProducts);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
