import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Props {
  id: string;
  name: string;
  image: string;
  price: number;
}
const ProductCard = ({ id, name, image, price }: Props) => {
  console.log(image);
  return (
    <div className="border-2 border-gray-500 rounded-md flex flex-col gap-4 bg-gray-100 h-full">
      <div className="flex-1 py-2 px-4 flex flex-col items-center gap-4">
        <Image src={image} width={70} height={20} alt={name} />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p>{price}</p>
        </div>
      </div>
      <Link
        href={"/" + id}
        className="py-2 flex justify-center bg-red-300 self-stretch"
      >
        Подробнее
      </Link>
    </div>
  );
};

export default ProductCard;
