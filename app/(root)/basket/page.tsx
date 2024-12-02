import ProductBasketList from "@/app/components/ProductBasketList";
import React from "react";

const BasketPage = () => {
  return (
    <section className="py-10">
      <div className="container px-4 xl:px-80">
        <ProductBasketList />
      </div>
    </section>
  );
};

export default BasketPage;
