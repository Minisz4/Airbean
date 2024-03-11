import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [
    { name: "Product 1", price: 10, amount: 0 },
    { name: "Product 2", price: 20, amount: 0 },
    { name: "Product 3", price: 30, amount: 0 },
  ],
  updateAmount: (index, amount) =>
    set((state) => {
      const updatedProducts = [...state.products];
      //kopierar state av produkter till en ny array (updatedproducts)
      updatedProducts[index].amount = amount;
      //använder index för den valda produkten
      // = är den nya amounten
      return { products: updatedProducts };
    }),
}));

export default useProductStore;
