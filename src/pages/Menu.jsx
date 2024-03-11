import React from "react";
import Nav from "../assets/components/Nav/Nav";
import useProductStore from "../assets/Globals/Products";

const Menu = () => {
  const { products, updateAmount } = useProductStore();
  // hämtar våra produkter från vår global state
  const handleProduct = (index) => {
    updateAmount(index, products[index].amount + 1);
    // ökar antalet av den valda produkten
  };

  // loopar igenom produkterna och skapar ett click-event
  //där vi anropar handleProduct funktionen

  return (
    <>
      <Nav />
      <div>
        {products.map((product, index) => (
          <div key={index} onClick={() => handleProduct(index)}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>Amount: {product.amount}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
