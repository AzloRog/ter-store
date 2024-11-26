import React from "react";

import ProductCard from "./ProductCard";
import { product as ProductCardProps } from "../constants/goods";

interface Props {
  goodsList: ProductCardProps[];
}
const ProductCardsList = ({ goodsList }: Props) => {
  return (
    <ul className="grid grid-cols-7 gap-8">
      {goodsList.map((good) => (
        <li key={good.id}>
          <ProductCard {...good} image={good.images[0]} />
        </li>
      ))}
    </ul>
  );
};

export default ProductCardsList;
