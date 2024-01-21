"use client";

import useCartService from "@/lib/hooks/useCartCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { OrderItem } from "@/lib/models/order.models";

const AddToCart = ({ item }: { item: OrderItem }) => {
  const router = useRouter();
  const { increaseItem, items } = useCartService();
  const [existedItems, setExistedItems] = useState<OrderItem | undefined>();

  useEffect(() => {
    setExistedItems(items.find((x) => x.slug === item.slug));
  }, [items, item]);

  const handleAddToCart = () => {
    increaseItem(item);
  };

  return (
    <div>
      {/* Check if the item already exists in the cart */}
      {existedItems ? (
        <div>
          <button>-</button>
          <span>{existedItems.quantity}</span>
          <button onClick={() => increaseItem(existedItems)}>+</button>
        </div>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default AddToCart;
