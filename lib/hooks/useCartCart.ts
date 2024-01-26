import { create } from "zustand";
import { persist } from "zustand/middleware";

import { round2 } from "../utils";
import { OrderItem } from "@/lib/models/order.models";

type Cart = {
  items: OrderItem[];
  itemPrice: number;
  tax: number;
  shippingPrice: number;
  totalPrice: number;
};

const initialState: Cart = {
  items: [],
  itemPrice: 0,
  tax: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: "cartStore",
  })
);

export default function useCartService() {
  const { itemPrice, items, tax, totalPrice, shippingPrice } = cartStore();
  return {
    itemPrice,
    items,
    tax,
    totalPrice,
    shippingPrice,
    increaseItem: (item: OrderItem) => {
      const existingItem = items.find((i) => i.slug === item.slug);
      const updatedCartItems = existingItem
        ? items.map((i) =>
            i.slug === item.slug
              ? { ...existingItem, quantity: existingItem.quantity + 1 }
              : i
          )
        : [...items, { ...item, quantity: 1 }];
      const { itemPrice, tax, totalPrice, shippingPrice } =
        calcPrice(updatedCartItems);
      cartStore.setState({
        items: updatedCartItems,
        itemPrice,
        tax,
        totalPrice,
        shippingPrice,
      });
    },
    decreaseItem: (item: OrderItem) => {
      const existingItem = items.find((x) => x.slug === item.slug);
      if (!existingItem) return;
      const updatedCartItems =
        existingItem.quantity === 1
          ? items.filter((x: OrderItem) => x.slug !== item.slug)
          : items.map((x: OrderItem) =>
              x.slug === item.slug
                ? { ...existingItem, quantity: existingItem.quantity - 1 }
                : x
            );
      const { itemPrice, tax, totalPrice, shippingPrice } =
        calcPrice(updatedCartItems);
      cartStore.setState({
        itemPrice,
        items: updatedCartItems,
        totalPrice,
        tax,
        shippingPrice,
      });
    },
  };
}

const calcPrice = (items: OrderItem[]) => {
  const itemPrice = round2(
      items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    ),
    shippingPrice = round2(itemPrice > 100 ? 0 : 100),
    tax = round2(Number(0.18 * itemPrice)),
    totalPrice = round2(itemPrice + tax + shippingPrice);
  return { itemPrice, shippingPrice, tax, totalPrice };
};
