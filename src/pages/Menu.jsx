import React, { useState } from "react";
import Header from "../assets/components/Nav/header/Header";
import Nav from "../assets/components/Nav/Nav";
import useProductStore from "../assets/Globals/Products";
import "./Menu.css";
import FooterBackground from "./footer-background.png";

const Menu = () => {
  const { products, updateAmount } = useProductStore();

  const handleProduct = (index) => {
    updateAmount(index, products[index].amount + 1);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="wrapper">
        <Header setIsMenuOpen={setIsMenuOpen} showCartIcon={true} />
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="main-container">
          <div className="Menu">
            <h1 className="Menu-h1">Meny</h1>
            {products.map((product, index) => (
              <div className="menu-item" key={index}>
                <button
                  className="buttonX"
                  onClick={() =>
                    updateAmount(index, products[index].amount + 1)
                  }
                >
                  +
                </button>
                <div>
                  <h2>{product.title}.....</h2>
                  <p>{product.desc}</p>
                </div>
                <p className="price">{product.price}kr</p>
              </div>
            ))}
          </div>
        </div>
        <footer>
          <img src={FooterBackground} alt="" />
        </footer>
      </div>
    </>
  );
};

export default Menu;
