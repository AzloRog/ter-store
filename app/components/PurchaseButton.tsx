"use client";
import React from "react";
import { useBasketStore } from "@/app/stores/providers/basket-store-provider";
import Link from "next/link";
import { product } from "../constants/goods";

interface Props {
  productId: number;
  productTitle: string;
  productImageUrl: string;
}
const PurchaseButton = ({
  productId,
  productTitle,
  productImageUrl,
}: Props) => {
  const {
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    goods,
  } = useBasketStore((store) => store);

  const quantity = goods.find((item) => item.id == productId)?.quantity || 0;
  console.log(productId);
  return (
    <div className="inline-block text-2xl rounded-md overflow-hidden">
      {quantity > 0 ? (
        <div className="flex items-center">
          <Link
            href="/basket"
            className="w-[260px] text-white bg-cyan-800 py-4 px-6"
          >
            В корзине
          </Link>
          <div className="py-4 px-6 flex gap-4 items-center bg-gradient-to-r from-slate-300 to-slate-200">
            <button
              onClick={
                quantity > 1
                  ? () => decreaseProductQuantity(productId)
                  : () => removeProduct(productId)
              }
              className="chevron_revert"
            ></button>
            <div
              className={`w-8 flex-grow-0 text-2xl flex items-center justify-center`}
            >
              {quantity}
            </div>
            <button
              onClick={() => increaseProductQuantity(productId)}
              className="chevron"
            ></button>
          </div>
        </div>
      ) : (
        <button
          onClick={() =>
            addProduct({
              id: productId,
              name: productTitle,
              quantity: 1,
              imageUrl: productImageUrl,
            })
          }
          className="py-4 px-6 bg-gradient-to-r from-slate-300 to-slate-200"
        >
          Добавить в корзину
        </button>
      )}
    </div>
  );
};

export default PurchaseButton;
