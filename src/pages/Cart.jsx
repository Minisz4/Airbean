import React, { useState } from "react";
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
        <App />
      </div>
    </>
  );
};

const App = () => {
  const [response, setResponse] = useState(null);

  const postOrder = async () => {
    //funktionen för att skicka beställningen
    try {
      const response = await fetch(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            //skicka till apiet
            details: {
              order: [
                {
                  name: "Bryggkaffe",
                  price: 39,
                },
                {
                  name: "Bryggkaffe",
                  price: 39,
                },
              ],
            },
          }),
        }
      );
      const data = await response.json(); //göra api:et till Json
      setResponse(data); // uppdaterar det nya värdet med api svaret
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={postOrder}>Make Order</button>
      {response && (
        <div>
          <p>ETA: {response.eta}</p>
          <p>Order Number: {response.orderNr}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
