// Menu.jsx

import React from "react";
import Nav from "../assets/components/Nav/Nav";
import useProductStore from "../assets/Globals/Products";
import "./Menu.css";

const Menu = () => {
  const { products, updateAmount } = useProductStore();

  const handleProduct = (index) => {
    updateAmount(index, products[index].amount + 1);
  };

  return (
    <>
      <Nav />
      <div className="main-container">
        <div className="Menu">
          {products.map((product, index) => (
            <div key={index} onClick={() => handleProduct(index)}>
              <h1>Meny</h1>
              <h2>{product.title}</h2>
              <p>{product.desc}</p>
              <p>{product.price}kr</p>
              <p>Amount: {product.amount}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Menu;
