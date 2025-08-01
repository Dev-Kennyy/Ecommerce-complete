import { useQuery } from "@tanstack/react-query";
import { thirdAppi } from "../services/apiProductThree";
import AllProductPageP from "../components/AllProductPageP";

function AllProduct() {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: thirdAppi,
  });
  console.log(product);
  if (error) return <div>There's an error fetching</div>;
  if (isLoading) return <div>Loading wait</div>;

  return (
    <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-10 lg:grid-cols-4">
      {product.map((product) => (
        <AllProductPageP productdata={product} key={product.id} />
      ))}
    </div>
  );
}

export default AllProduct;
