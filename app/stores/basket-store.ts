import { createStore } from 'zustand/vanilla'

export type BasketState = {
  goodsIds: number[]
}

export type BasketActions = {
  addProduct: (id: number) => void
  removeProduct: (id: number) => void
}

export type BasketStore = BasketState & BasketActions

export const defaultInitState: BasketState = {
  goodsIds: [],
}

export const createBasketStore = (
  initState: BasketState = defaultInitState,
) => {
  return createStore<BasketStore>()((set) => ({
    ...initState,
    addProduct: (id: number) => set((state) => ({ goodsIds: [...state.goodsIds, id] })),
    removeProduct: (id: number) => set((state) => {
      const targetIndex = state.goodsIds.findIndex(_id => _id == id);
      const newArray = [...state.goodsIds].splice(targetIndex, 1);

      return {goodsIds: newArray}
    }),
  }))
}

