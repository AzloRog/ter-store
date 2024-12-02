import React from "react";

import ProductCard from "./ProductCard";
import { product as ProductCardProps } from "../constants/goods";
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}
interface Props {
  goodsList: Product[];
}
const ProductCardsList = ({ goodsList }: Props) => {
  return (
    <ul className="grid auto-cols-auto md:grid-cols-3 xl:grid-cols-7 gap-8">
      {goodsList.map((good) => (
        <li key={good.id}>
          <ProductCard {...good} />
        </li>
      ))}
    </ul>
  );
};

export default ProductCardsList;
