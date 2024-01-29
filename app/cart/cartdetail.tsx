"use client";

import useCartService from "@/lib/hooks/useCartCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CartDetails = () => {
  const router = useRouter();
  const { increaseItem, itemPrice, decreaseItem, items } = useCartService();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="grid gap-4">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between border-b py-2"
            >
              <span className="mr-2">{item.slug}</span>
              <button
                onClick={() => decreaseItem(item)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <span className="mx-2">{item.price}</span>
              <button
                onClick={() => increaseItem(item)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                +
              </button>
              <button className="text-red-500 hover:underline ml-2">
                Remove
              </button>
              <span className="ml-2">${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 text-xl font-bold">
        Subtotal ({items.reduce((a, c) => a + c.quantity, 0)}) : ${itemPrice}
      </p>
    </div>
  );
};

export default CartDetails;
