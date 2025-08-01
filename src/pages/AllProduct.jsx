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
    <div className="flex flex-wrap justify-center gap-3">
      {product.map((product) => (
        <AllProductPageP productdata={product} key={product.id} />
      ))}
    </div>
  );
}

export default AllProduct;
