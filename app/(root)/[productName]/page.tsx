import React from "react";
import goods from "@/app/constants/goods";
const ProductPage = async ({
  params,
}: {
  params: Promise<{ productName: string }>;
}) => {
  const productName = (await params).productName;

  const product = goods.find((item) => item.title == productName);

  if (!product) {
    return (
      <div className="absolute top-0 left-0 w-full h-full z-[-1] flex items-center justify-center">
        <h1 className="text-2xl">
          Товар под названием{" "}
          <span className="font-semibold">{productName}</span> не существует
        </h1>
      </div>
    );
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </>
  );
};

export default ProductPage;
