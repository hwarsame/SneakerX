import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-sky-400">SneakerX</span> Of The{" "}
          <span className="text-sky-400">Week</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Indulge in the epitome of quality and style with our coveted
          selections. Embark on a journey of unparalleled comfort, exquisite
          design, and unbeatable value{" "}
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
