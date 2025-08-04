import Categories from "../components/Categories.jsx";
import FlashSaleCategory from "../components/Today-Flash Sale/FlashSaleCategory.jsx";
import ProductCategory from "../components/BrowseCategory/ProductCategory.jsx";
import BestSelling from "../components/BestSellingProduct/BestSelling.jsx";
import Image from "../components/Image Container/Image.jsx";
import ExploreProduct from "../components/ExploreProduct/ExploreProduct.jsx";
import NewArrival from "../components/NewArrival/NewArrival.jsx";
import All from "../components/AlmostFooter/All.jsx";

function HomePage() {
  return (
    <>
      <div data-aos="fade-up">
        <Categories />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <FlashSaleCategory />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <ProductCategory />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <BestSelling />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <Image />
      </div>

      <div data-aos="fade-up" data-aos-delay="500">
        <ExploreProduct />
      </div>

      <div data-aos="fade-up" data-aos-delay="600">
        <NewArrival />
      </div>

      <div data-aos="fade-up" data-aos-delay="700">
        <All />
      </div>
    </>
  );
}

export default HomePage;
