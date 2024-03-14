import React, { useState } from "react";
import Header from "../assets/components/Nav/header/Header";
import Nav from "../assets/components/Nav/Nav";
import useProductStore from "../assets/Globals/Products";
import "./Menu.css";

const Menu = () => {
  const { products, updateAmount } = useProductStore();

  const handleProduct = (index) => {
    updateAmount(index, products[index].amount + 1);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header setIsMenuOpen={setIsMenuOpen} />
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="main-container">
        <div className="Menu">
          <h1>Meny</h1>
          {products.map((product, index) => (
            <div key={index}>
              <div>
                <h2>{product.title}</h2>
                <p>{product.desc}</p>
              </div>
              <p>{product.price}kr</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
