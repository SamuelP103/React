import DataService from "../services/dataService";
import "./product.css";
import QuantityPicker from "../components/quantityPicker";
import { useEffect, useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  

  useEffect(function () {
    console.log("Hello im a product");
  }, []);

  function onQuantityChange(qty) {
    setQuantity(qty);
    console.log("the quantity has changed", qty);
  }

  function getTotal() {
    const total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function addItem() {
    const itemCart = {
      ...props.data,
      quantity: quantity,
    };

    let service = new DataService();
    service.addToCart(itemCart);
    console.log("item added", itemCart);
  }

  return (
    <div className="product">
    <img src={"/img/" + props.data.image} alt=""></img>
    <h5>{props.data.title}</h5>
    <div className="prices">
        <label className="total">${getTotal()}</label>
        <label className="price">${props.data.price.toFixed(2)}</label>
    </div>
    <div className='controls'>
        <QuantityPicker onQuantityChange={onQuantityChange}></QuantityPicker>

        <button onClick={addItem}className="btn btn-small btn-primary">Add</button>
    </div>
    </div>
);
}

export default Product;
// spread operator 