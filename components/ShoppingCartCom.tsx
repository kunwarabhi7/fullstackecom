"use client";

import useCartService from "@/lib/hooks/useCartCart";

const ShoppingCartCom = () => {
  const { items } = useCartService();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  return <div>{totalItems}</div>;
};

export default ShoppingCartCom;
