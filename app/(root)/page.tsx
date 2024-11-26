import React from "react";
import ProductCardsList from "../components/ProductCardsList";
import goods from "../constants/goods";
const page = () => {
  return (
    <section>
      <div className="container px-12 py-4">
        <h2 className="text-4xl">Товары:</h2>
        <div className="mt-12 mx-16">
          <ProductCardsList goodsList={goods} />
        </div>
      </div>
    </section>
  );
};

export default page;
