import { data } from "@/lib/Data";
import { Product } from "@/lib/models/product.models";
import Image from "next/image";
import Link from "next/link";

const ProductsItem = ({ product }: { product: Product }) => {
  const {
    _id,
    name,
    price,
    image,
    description,
    brand,
    category,
    rating,
    numReview,
    countInStock,
    colors,
    sizes,
    slug,
  } = product;
  return (
    <div className="max-w-xs mx-2 my-4 p-4 bg-white shadow-md rounded-md">
      <Link href={`/product/${slug}`}>
        <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />

        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">${price}</p>
        <p className="text-gray-500">{description}</p>

        <div className="mt-2">
          <p className="text-gray-500">Brand: {brand}</p>
          <p className="text-gray-500">Category: {category}</p>
          <p className="text-gray-500">
            Rating: {rating} ({numReview} reviews)
          </p>
          <p className="text-gray-500">Stock: {countInStock} available</p>
        </div>
      </Link>
      <button className="mt-4 bg-amazon-yellow text-amazon-blue py-2 px-4 rounded-full hover:bg-amazon-yellow-dark">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductsItem;
