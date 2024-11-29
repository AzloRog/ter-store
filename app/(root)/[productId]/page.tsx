import React from "react";
import goods from "@/app/constants/goods";
import Carousel from "@/app/components/ui/Carousel";
import PurchaseButton from "@/app/components/PurchaseButton";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: number }>;
}) => {
  const productId = (await params).productId;

  const product = goods.find((item) => item.id == productId);

  if (!product) {
    return (
      <div className="absolute top-0 left-0 w-full h-full z-[-1] flex items-center justify-center">
        <h1 className="text-2xl">
          Товар под названием <span className="font-semibold">{productId}</span>{" "}
          не существует
        </h1>
      </div>
    );
  }

  return (
    <section>
      <div className="container pt-40 px-36 flex gap-8">
        <div className="flex-1  ">
          <Carousel images={product.images} />
        </div>
        <div className="flex-1 mt-2 flex flex-col gap-2">
          <h1 className="text-4xl">{product.title}</h1>
          <ul className="mt-2 ml-4 text-xl flex flex-col gap-3">
            <li>цена: {product.price}</li>
            <li>урон: {product.damage}</li>
            <li>критический урон: {product.criticalDamage}</li>
            <li>редкость: {product.rarity}</li>
          </ul>
          <div className="ml-4 mt-8">
            <PurchaseButton
              productId={product.id}
              productTitle={product.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
