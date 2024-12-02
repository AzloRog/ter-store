import { createStore } from 'zustand/vanilla'

export interface Product {
  id: string,
  name: string,
  quantity: number,
  imageUrl: string
}
export type BasketState = {
  goods: Product[]
}

export type BasketActions = {
  addProduct: (product: Product) => void
  removeProduct: (product: string) => void

  increaseProductQuantity: (id: string) => void
  decreaseProductQuantity: (id: string) => void
}

export type BasketStore = BasketState & BasketActions

export const defaultInitState: BasketState = {
  goods: [],
}

export const createBasketStore = (
  initState: BasketState = defaultInitState,
) => {
  return createStore<BasketStore>()((set) => ({
    ...initState,
    addProduct: (product: Product) => set((state) => ({ goods: [...state.goods, product ] })),
    removeProduct: (id: string) => set((state) => ({ goods: state.goods.filter(product => product.id != id)})),
    increaseProductQuantity: (id: string) => set((state) => {
      const newArray = state.goods.map(product => {
        if (product.id == id) {
          return {...product, quantity: product.quantity + 1}
        } else {
          return product
        }
      });
      return {goods: newArray}
    }),
    decreaseProductQuantity: (id: string) => set((state) => {
      const newArray = state.goods.map(product => {
        if (product.id == id) {
          return {...product, quantity: product.quantity + 1}
        } else {
          return product
        }
      });
      return {goods: newArray}
    })

  }))
}

