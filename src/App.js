import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import QuantityPicker from "./components/quantityPicker";
import Catalog from "./pages/catalog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/home";
import About from "./pages/about.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from "./admin.jsx";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/catalog' element={ <Catalog/>}/>
        <Route path='/admin' element={ <Admin/>}/>
      </Routes>
      
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}
// <Home></Home> 
      // <About></About>
      // <Catalog></Catalog>
export default App;
