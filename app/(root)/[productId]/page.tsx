import React from "react";
import goods from "@/app/constants/goods";
import Carousel from "@/app/components/ui/Carousel";
import PurchaseButton from "@/app/components/PurchaseButton";
import { databases, storage } from "@/app/db/appwrite";
import { Query } from "appwrite";
import { Product, ProductInfo } from "@/app/types/db";
import { unstable_cache } from "next/cache";

const getImages = async (imagesIds: string[]) => {
  const images = [];
  for (const id of imagesIds) {
    const image = await storage.getFileView(
      process.env.BUCKET_STORAGE_ID || "null",
      id
    );
    images.push(image);
  }
  return images;
};
const getCachedProduct = unstable_cache(
  async (productId: string) => {
    return (await databases.getDocument(
      process.env.DATABASE_ID || "",
      process.env.COLLECTION_GOODS_ID || "",
      productId
    )) as Product;
  },
  ["product"],
  { revalidate: 60, tags: ["product"] }
);
const getCachedImages = unstable_cache(
  async (imagesIds: string[]) => {
    return await getImages(imagesIds);
  },
  ["images"],
  { revalidate: 60, tags: ["images"] }
);

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;

  const product = await getCachedProduct(productId);
  const productInfo = product.product_id as ProductInfo;
  const images = await getCachedImages(product.images_urls);

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
          <Carousel images={images} />
        </div>
        <div className="flex-1 mt-2 flex flex-col gap-2">
          <h1 className="text-4xl">{product.name}</h1>
          <ul className="mt-2 ml-4 text-xl flex flex-col gap-3">
            <li>цена: {product.price}</li>
            <li>урон: {productInfo.damage}</li>
            <li>критический урон: {productInfo.critical_damage}</li>
            <li>редкость: {productInfo.rarity}</li>
          </ul>
          <div className="ml-4 mt-8">
            <PurchaseButton
              productId={product.$id}
              productTitle={product.name}
              productImageUrl={images[0]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
