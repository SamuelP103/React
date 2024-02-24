import "./cart.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Cart() {
  const [cartList, setCartList] = useState([]);
  useEffect(function () {
    loadCart();
  }, []);

  function loadCart() {
    let service = new DataService();
    let cart = service.readCart();
    console.log("cart", cart);
    setCartList(cart);
  }

  function getTotal(prod) {
    const total = (prod.price || 0) * (prod.quantity || 0);
    return total.toFixed(2);
  }
  

  function getCartTotal() {
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
      let prod = cartList[i];
      total += (prod.price || 0) * (prod.quantity || 0);
    }

    return total.toFixed(2);
  }

  return (
    <div className="cart">
      <h1>Checkout</h1>
      <div className="parent">
        <div className="list">
          {cartList.map((prod) => (
            <div className="cart-prod" key={prod._id}>
              <img src={"/img/" + prod.image} alt="" />
              <div className="info">
                <h5>{prod.title}</h5>
                <p>{prod.category}</p>
              </div>
              <label>${prod.price}</label>
              <label>{prod.quantity}</label>
              <label>${getTotal(prod)}</label>
              <button className="btn btn-sm btn-info">Remove</button>
            </div>
          ))}
        </div>
        <div className="aside">
          <h4>Your Total</h4>
          <label>${getCartTotal()}</label>
        </div>
      </div>
    </div>
  );
}

export default Cart;
