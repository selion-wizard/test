import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('ошибка');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [purchasedItems, setPurchasedItems] = useState({});

  const addToCart = (id) => {
    setCartCount(prev => prev + 1);
    setPurchasedItems(prev => ({ ...prev, [id]: true }));
  };

  const resetCart = () => {
    setCartCount(0);
    setPurchasedItems({});
  };

  const isPurchased = (id) => {
    return purchasedItems[id] || false;
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, resetCart, isPurchased }}>
      {children}
    </CartContext.Provider>
  );
};
