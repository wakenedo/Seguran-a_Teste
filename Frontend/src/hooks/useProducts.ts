import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductContextType } from "../types/Product";

// Custom hook
export function useProducts(): ProductContextType {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}
