import DataService from "../services/dataService";
import "./product.css";
import QuantityPicker from "../components/quantityPicker";
import { useEffect, useState } from "react";

function Product(props) {
  const[quantity, setQuantity] = useState(1);
  
  useEffect(function () {
    console.log("hello product");
  }, []);

  function onQuantityChange(qty) {
    setQuantity((prevQuantity) => prevQuantity + qty);
  }

  function getTotal() {
    const total = props.data.price * quantity;
    return total.toFixed(2);
  }
  function adding() {
    console.log('adding');

    const prod4Cart = {
      ...props.data
    };
    console.log('adding', prod4Cart);
  
  let service = new DataService();
  service.addToCart(prod4Cart);
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

        <button onClick={adding}className="btn btn-small btn-primary">Add</button>
    </div>
    </div>
);
}

export default Product;
// spread operator 
