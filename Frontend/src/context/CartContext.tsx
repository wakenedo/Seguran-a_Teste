import { createContext } from "react";
import { CartContextType } from "../types/Cart";

// Create context
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
