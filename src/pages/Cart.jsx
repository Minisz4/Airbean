import React from "react";
import Nav from "../assets/components/Nav/Nav";
import useProductStore from "../assets/Globals/Products";

const Cart = () => {
  const { products, updateAmount } = useProductStore();
  // hämtar uppdateringen från global store
  const handleAmountChange = (index, amount) => {
    updateAmount(index, amount);
    //uppdaterar antalet för produkterna
  };

  return (
    <>
      <Nav />
      <div>
        <h2>Cart</h2>
        {products
          .filter((product) => product.amount > 0)
          // filtrerar bort de produkter som inte är "valda" dvs antalet är större än 0
          .map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>Amount: {product.amount}</p>
              <button
                onClick={() => handleAmountChange(index, product.amount - 1)}
                //skapar ett click-event där den minskar antalet
              >
                -
              </button>
              <button
                onClick={() => handleAmountChange(index, product.amount + 1)}
                //skapar ett click-event där den ökar antalet antalet
              >
                +
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cart;
