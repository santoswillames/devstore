"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(productId: string) {
    setCartItems((state) => {
      // Verifica se já existe o produto no cart
      const productInCart = state.some((item) => item.productId === productId);

      if (productInCart) {
        return state.map((item) => {
          // localizo o item no carrinho e altera a quantidade dele
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            // se não for o item que ja existe, retorna sem alteração
            return item;
          }
        });
      } else {
        return [...state, { productId, quantity: 1 }];
      }
    });
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
