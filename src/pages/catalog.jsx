import "./catalog.css"
import Product from "./product.jsx";
import{ useEffect, useState } from "react";
import DataService from "../services/dataService.js";


function Catalog(){

    const [productState, setProducts] = useState([]);



        useEffect(function(){
        console.log("component is loaded");
        loadCatalog();
    },[]);
    function loadCatalog(){
        let service =  new DataService;
        let products = service.getProducts();
        setProducts(products);console.log(products);
    };
    return (
        <div className="catalog">
        <h1>Here look at my {productState.length} cool products</h1>
        {productState.map((productData, index) => <Product key={index} data={productData} />)}

        
        
        </div>
    );
}
export default Catalog;