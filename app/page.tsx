import ProductsItem from "@/components/Products/productsItem";
import { data } from "@/lib/Data";

export default function Home() {
  return (
    <main>
      {" "}
      {data.Product.map((dat) => (
        <ProductsItem key={dat._id} product={dat} />
      ))}
    </main>
  );
}
