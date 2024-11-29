"use client";
import { useBasketStore } from "@/app/stores/providers/basket-store-provider";
import ProductBasketCard from "./ProductBasketCard";
import dbGoods from "../constants/goods";
const ProductBasketList = () => {
  const { goods } = useBasketStore((store) => store);

  return (
    <ul>
      {goods.map((product) => (
        <li key={product.id}>
          <ProductBasketCard {...product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductBasketList;
