import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/pages/nav/Navbar';
import ProductList from './components/pages/productList/ProductList';
import ShippingCart from './components/pages/Shipping/ShippingCart';

function App() {
  return (
    <div className="App">

      <Navbar  />
      <Routes >
        <Route path='/' element = {<ProductList />} />
        <Route path='/Home > Shipping Cart' element = {<ShippingCart />} />
      </Routes>
    </div>
  );
}

export default App;
