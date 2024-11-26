import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Props {
  id: number;
  title: string;
  image: StaticImport;
  price: number;
}
const ProductCard = ({ title, image, price }: Props) => {
  return (
    <div className="border-2 border-gray-500 rounded-md flex flex-col items-center gap-4 bg-gray-100">
      <div className="py-2 px-4 flex flex-col items-center gap-4">
        <Image src={image} width={70} height={20} alt={title} />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{price}</p>
        </div>
      </div>
      <Link
        href={"/" + title}
        className="py-2 flex justify-center bg-red-300 self-stretch"
      >
        Подробнее
      </Link>
    </div>
  );
};

export default ProductCard;
