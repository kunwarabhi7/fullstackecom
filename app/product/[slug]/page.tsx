import AddToCart from "@/components/Products/AddToCart";
import { data } from "@/lib/Data";
import { Product } from "@/lib/models/product.models";
import Link from "next/link";
import React from "react";

const page = ({ params }: { params: Product }) => {
  const product = data.Product.find((x) => x.slug === params.slug);
  if (!product) return <h1>No Page Found</h1>;
  return (
    <div>
      <Link href="/">Back to Products</Link>
      <h1>{product.name}</h1>
      <AddToCart
        item={{
          name: "",
          slug: "",
          quantity: 0,
          image: "",
          price: 0,
          color: "",
          size: "",
        }}
      />
    </div>
  );
};

export default page;
