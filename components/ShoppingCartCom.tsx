"use client";

import useCartService from "@/lib/hooks/useCartCart";
import { useEffect, useState } from "react";

const ShoppingCartCom = () => {
  const { items } = useCartService();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return <div>{totalItems}</div>;
};

export default ShoppingCartCom;
