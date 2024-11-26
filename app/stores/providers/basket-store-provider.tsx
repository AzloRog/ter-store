"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { type BasketStore, createBasketStore } from "../basket-store";

export type BasketStoreApi = ReturnType<typeof createBasketStore>;

export const BasketStoreContext = createContext<BasketStoreApi | undefined>(
  undefined
);

export interface BasketStoreProviderProps {
  children: ReactNode;
}

export const BasketStoreProvider = ({ children }: BasketStoreProviderProps) => {
  const storeRef = useRef<BasketStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createBasketStore();
  }

  return (
    <BasketStoreContext.Provider value={storeRef.current}>
      {children}
    </BasketStoreContext.Provider>
  );
};
export const useBasketStore = create(
  persist<BasketStore>(
    (set, get) => ({
      goodsIds: [],
      addProduct: (id: number) =>
        set((state) => ({ goodsIds: [...state.goodsIds, id] })),
      removeProduct: (id: number) =>
        set((state) => {
          const targetIndex = state.goodsIds.findIndex((_id) => _id == id);
          const newArray = [...state.goodsIds];
          newArray.splice(targetIndex, 1);
          return { goodsIds: newArray };
        }),
    }),
    {
      name: "basket",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// export const useBasketStore = <T,>(selector: (store: BasketStore) => T): T => {
//   const basketStoreContext = useContext(BasketStoreContext);
//
//   if (!basketStoreContext) {
// throw new Error(`useCounterStore must be used within basketStoreProvider`);
//   }
//
//   return useStore(basketStoreContext, selector);
// };
