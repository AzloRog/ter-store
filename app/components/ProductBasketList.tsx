"use client";
import { useBasketStore } from "@/app/stores/providers/basket-store-provider";
import ProductBasketCard from "./ProductBasketCard";
import dbGoods from "../constants/goods";
const ProductBasketList = () => {
  const { goods } = useBasketStore((store) => store);

  return (
    <div className="">
      <div className="px-12 flex justify-between text-2xl font-bold">
        <h3>Товар</h3>
        <h3>Название</h3>
        <h3>Кол-во</h3>
      </div>
      <ul className="mt-8 flex flex-col gap-4">
        {goods.map((product) => (
          <li key={product.id}>
            <ProductBasketCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductBasketList;
