import { CartStore } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (product) =>
        set((state) => {
          const existingProductIndex = state.cart.findIndex(
            (item) =>
              item.id === product.id &&
              item.selectedSize === product.selectedSize &&
              item.selectedColor === product.selectedColor
          );

          if (existingProductIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingProductIndex].quantity += product.quantity || 1;
            return { cart: updatedCart };
          } else {
            return {
              cart: [
                ...state.cart,
                {
                  ...product,
                  quantity: product.quantity || 1,
                  selectedSize: product.selectedSize,
                  selectedColor: product.selectedColor,
                },
              ],
            };
          }
        }),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              !(
                item.id === product.id &&
                item.selectedSize === product.selectedSize &&
                item.selectedColor === product.selectedColor
              )
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore;
