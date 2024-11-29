import React from "react";
import ProductCardsList from "../components/ProductCardsList";
import goods from "../constants/goods";
import { databases, storage } from "../db/appwrite";
import { Product } from "../types/db";
const page = async () => {
  const data = (
    await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_COLLECTION_GOODS_ID || ""
    )
  ).documents as Product[];

  const bucketId = process.env.NEXT_PUBLIC_BUCKET_STORAGE_ID || "";

  const goods = data.map((product) => {
    const image = storage.getFileView(bucketId, product.image_id);
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
