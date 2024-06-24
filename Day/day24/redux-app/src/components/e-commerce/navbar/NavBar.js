import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import "./NavBar.css"
import { useSelector} from 'react-redux';
import { Link} from 'react-router-dom';



function NavBar() {
    const cart = useSelector(state => state.CartReducer.cart);

    let count = 0;
    cart.forEach(element => count+=element.quantity);
  return (
    <nav>
        <Link to= './' style={{color:"white", textDecoration:"none"}}><h2 className="banner">My Mantra</h2></Link>
        <div className="rigth-layout"></div>
        <div className="card-layout">
            {/* <Link to={ShippingCart} >
                <AiOutlineShoppingCart />
                </Link> */}
                <AiOutlineShoppingCart />
            {/* <Link to='/Home > Shipping Cart'  style={{color:"white"}} ><AiOutlineShoppingCart  /></Link> */}
            
            
            <h3>{count}</h3>
        </div>
    </nav>
  )
}

export default NavBar