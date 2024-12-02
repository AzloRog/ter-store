import React from "react";
import ProductCardsList from "../components/ProductCardsList";
import goods from "../constants/goods";
import { databases, storage } from "../db/appwrite";
import { Product } from "../types/db";
import { unstable_cache } from "next/cache";

const goodsData = unstable_cache(
  async () =>
    await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_COLLECTION_GOODS_ID || ""
    ),
  ["goods"],
  { revalidate: 60, tags: ["goods"] }
); //Caching static data

const page = async () => {
  const bucketId = process.env.NEXT_PUBLIC_BUCKET_STORAGE_ID || "";
  const data = (await goodsData()).documents as Product[];
  console.log(data);
  const goods = data.map((product) => {
    console.log();
    const image = storage.getFileView(bucketId, product.images_urls[0]);
    return { ...product, image, id: product.$id };
  });

  return (
    <section>
      <div className="container px-12 py-4">
        <h2 className="text-4xl">Товары:</h2>
        <div className="mt-12 mx-16">
          <ProductCardsList goodsList={goods} />
        </div>
      </div>
    </section>
  );
};

export default page;
