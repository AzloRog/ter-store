import React from "react";
import ProductCardsList from "../components/ProductCardsList";
import goods from "../constants/goods";
const page = () => {
  return (
    <section>
      <h2>Товары:</h2>
      <ProductCardsList goodsList={goods} />
    </section>
  );
};

export default page;
