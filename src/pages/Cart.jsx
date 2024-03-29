import React, { useState } from "react";
import Nav from "../assets/components/Nav/Nav";
import useProductStore from "../assets/Globals/Products";
import useApiResponse from "../assets/Globals/ApiResponse";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import airbeanWelcomeIcon from "./airbean-welcome.png";
import Header from "../assets/components/Nav/header/Header";

const Cart = () => {
  const navigate = useNavigate();
  const { setResponse } = useApiResponse();
  const { products, updateAmount } = useProductStore();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleAmountChange = (index, amount) => {
    updateAmount(index, amount);
  };

  const postOrder = async () => {
    try {
      const response = await fetch(
        "https://airbean-9pcyw.ondigitalocean.app/api/beans/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            details: {
              order: products
                .filter((product) => product.amount > 0)
                .map((product) => ({
                  name: product.title,
                  price: product.price,
                })),
            },
          }),
        }
      );
      const data = await response.json();
      setResponse(data.eta, data.orderNr);
      navigate("/status");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="page-cart">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Header setIsMenuOpen={setIsMenuOpen} />
        <div className="cart-container">
          <div className="cart-overlay"></div>
          <div className="cart-text">
            <h2>Din beställning</h2>
            {products.filter((product) => product.amount > 0).length > 0 ? (
              products
                .filter((product) => product.amount > 0)
                .map((product, index) => (
                  <div key={index}>
                    <h3>{product.title}</h3>
                    <p>Price: {product.price}</p>
                    <p>Amount: {product.amount}</p>
                    <button
                      onClick={() =>
                        handleAmountChange(index, product.amount - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        handleAmountChange(index, product.amount + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                ))
            ) : (
              <p>Ingen beställning är lagd ännu</p>
            )}
            <button className="orderbtn" onClick={postOrder}>
              Take my money!
            </button>
          </div>
          <footer></footer>
        </div>
      </div>
    </>
  );
};

export default Cart;
