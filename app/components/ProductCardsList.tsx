import React from "react";

import ProductCard from "./ProductCard";
import { Props as ProductCardProps } from "./ProductCard";

interface Props {
  goodsList: ProductCardProps[];
}
const ProductCardsList = ({ goodsList }: Props) => {
  return (
    <ul>
      {goodsList.map((good) => (
        <li key={good.id}>
          <ProductCard {...good} />
        </li>
      ))}
    </ul>
  );
};

export default ProductCardsList;
