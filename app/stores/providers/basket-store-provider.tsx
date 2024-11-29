"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { type BasketStore, createBasketStore, Product } from "../basket-store";

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
      goods: [],
      addProduct: (product: Product) =>
        set((state) => ({ goods: [...state.goods, product] })),
      removeProduct: (id: number) =>
        set((state) => ({
          goods: state.goods.filter((product) => product.id != id),
        })),
      increaseProductQuantity: (id: number) =>
        set((state) => ({
          goods: state.goods.map((product) => {
            if (product.id == id) {
              return { ...product, quantity: product.quantity + 1 };
            } else {
              return product;
            }
          }),
        })),
      decreaseProductQuantity: (id: number) =>
        set((state) => ({
          goods: state.goods.map((product) => {
            if (product.id == id) {
              return { ...product, quantity: product.quantity - 1 };
            } else {
              return product;
            }
          }),
        })),
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
