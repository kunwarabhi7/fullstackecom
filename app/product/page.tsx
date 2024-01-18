import ProductsItem from "@/components/Products/productsItem";
import { data } from "@/lib/Data";

const Products = () => {
  // console.log(data);
  return (
    <div className="grid grid-cols-3">
      {data.Product.map((dat) => (
        <ProductsItem key={dat._id} product={dat} />
      ))}
    </div>
  );
};

export default Products;
