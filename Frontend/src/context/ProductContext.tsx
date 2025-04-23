import { createContext } from "react";

import { ProductContextType } from "../types/Product";

// ✅ Export the context
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);
