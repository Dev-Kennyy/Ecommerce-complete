import React, { useRef } from "react";
import Product from "../Product";
import { useQuery } from "@tanstack/react-query";
import apiProducts from "../../services/apiProducts";

function Products() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 200 : -200,
        behavior: "smooth",
      });
    }
  };
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: apiProducts,
  });
  console.log(products);
  if (isLoading) return <p className="px-9 py-10">Loading products...</p>;
  if (error) return <p className="px-9 py-10">Error: {error.message}</p>;
  return (
    <div className="relative mb-7 px-9">
      <div className="absolute right-2 top-0 z-10 flex gap-2">
        <button
          onClick={() => handleScroll("left")}
          className="rounded-full bg-white px-3 py-2 text-black shadow-lg shadow-gray-700 hover:bg-gray-800 hover:text-white"
          aria-label="Scroll left"
        >
          &larr;
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="rounded-full bg-white px-3 py-2 text-black shadow-lg shadow-gray-700 hover:bg-gray-800 hover:text-white"
          aria-label="Scroll right"
        >
          &rarr;
        </button>
      </div>
      <div
        className="tailwind-scrollbar-hide flex items-center gap-3 overflow-x-auto scroll-smooth pt-9"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {products.map((product) => (
          <Product key={product.id} productdata={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
