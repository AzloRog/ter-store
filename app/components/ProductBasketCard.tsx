import React from "react";
import { Product } from "../stores/basket-store";
import Image from "next/image";
import Link from "next/link";
const ProductBasketCard = ({ id, name, quantity, imageUrl }: Product) => {
  return (
    <Link
      href={"/" + id}
      className="py-4 px-12 flex justify-between items-center border-2 border-gray-500 rounded-xl text-xl font-semibold"
    >
      <Image src={imageUrl} alt={name} width={40} height={40} />
      <h3 className="italic">{name}</h3>
      <p>{quantity}</p>
    </Link>
  );
};

export default ProductBasketCard;
