import { create } from "zustand";
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

export const cartStore = create<Cart>(() => initialState);

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
    },
  };
}
