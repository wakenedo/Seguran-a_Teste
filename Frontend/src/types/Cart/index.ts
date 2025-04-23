// Type for a cart item (can be expanded later)
interface CartItem {
  productId: number;
  quantity: number;
}

// Context type
interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export type { CartItem, CartContextType };
