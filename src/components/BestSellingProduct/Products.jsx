import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import { apiProductTwo } from "../../services/apiProductTwo";
import Loader from "../Loader";

function Products() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: apiProductTwo,
  });
  console.log(products);
  if (isLoading)
    return (
      <div className="p-10">
        <Loader />
      </div>
    );
  if (error)
    return <div className="p-10 text-red-500">Error loading products</div>;

  if (!products || products.length === 0)
    return <div className="p-10">No products found.</div>;

  return (
    <div className="flex flex-nowrap gap-5 overflow-x-auto p-10">
      {products.map((product) => (
        <Product key={product.id + 20} productdata={product} />
      ))}
    </div>
  );
}

export default Products;
