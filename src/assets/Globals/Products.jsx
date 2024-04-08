import { create } from "zustand";

const useProductStore = create((set) => ({
  itemsInCart: 0,
  products: [
    {
      id: "coffee-vxig26my4y",
      title: "Bryggkaffe",
      desc: "Bryggd på månadens bönor.",
      price: 39,
      amount: 0,
    },
    {
      id: "coffee-220dodpzmg",
      title: "Caffè Doppio",
      desc: "Bryggd på månadens bönor.",
      price: 49,
      amount: 0,
    },
    {
      id: "coffee-4pdksmrkfa",
      title: "Cappuccino",
      desc: "Bryggd på månadens bönor.",
      price: 49,
      amount: 0,
    },
    {
      id: "coffee-m2h37k2mnh",
      title: "Latte Macchiato",
      desc: "Bryggd på månadens bönor.",
      price: 49,
      amount: 0,
    },
    {
      id: "coffee-0lp6ter3bh",
      title: "Kaffe Latte",
      desc: "Bryggd på månadens bönor.",
      price: 54,
      amount: 0,
    },
    {
      id: "coffee-e8hz0lk7q5",
      title: "Cortado",
      desc: "Bryggd på månadens bönor.",
      price: 39,
      amount: 0,
    },
    {
      id: "pastry-db3gfsuqpr",
      title: "Gustav Adolfsbakelse",
      desc: "En kunglig bakelse.",
      price: 50,
      amount: 0,
    },
    {
      id: "pastry-vkzh17ct2r",
      title: "Semla",
      desc: "En fastlagsbulle i sin rätta form.",
      price: 50,
      amount: 0,
    },
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
