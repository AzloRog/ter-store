"use client";
import React from "react";
import { useBasketStore } from "@/app/stores/providers/basket-store-provider";
import Link from "next/link";
interface Props {
  targetProductId: number;
}
const PurchaseButton = ({ targetProductId }: Props) => {
  const { addProduct, removeProduct, goodsIds } = useBasketStore(
    (store) => store
  );

  const count = goodsIds.filter((id) => id == targetProductId).length;

  return (
    <div className="inline-block text-2xl rounded-md overflow-hidden">
      {count > 0 ? (
        <div className="flex items-center">
          <Link
            href="/basket"
            className="w-[260px] text-white bg-cyan-800 py-4 px-6"
          >
            В корзине
          </Link>
          <div className="py-4 px-6 flex gap-4 items-center bg-gradient-to-r from-slate-300 to-slate-200">
            <button
              onClick={() => removeProduct(targetProductId)}
              className="chevron_revert"
            ></button>
            <div
              className={`w-8 flex-grow-0 text-2xl flex items-center justify-center`}
            >
              {count}
            </div>
            <button
              onClick={() => addProduct(targetProductId)}
              className="chevron"
            ></button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => addProduct(targetProductId)}
          className="py-4 px-6 bg-gradient-to-r from-slate-300 to-slate-200"
        >
          Добавить в корзину
        </button>
      )}
    </div>
  );
};

export default PurchaseButton;
