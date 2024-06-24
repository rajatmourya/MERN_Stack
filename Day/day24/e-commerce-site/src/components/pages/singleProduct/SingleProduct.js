import "./SingleProduct.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { addToCart, removeFromCart } from "../../redux/Slices/CartSlice";

function SingleProduct({ products }) {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.CartReducer.cart);
  const CurItem = cart.find(item => item.id == products.id);
  const curQuantity = CurItem ? CurItem.quantity : 0;
  
  
  return (
    <div className="SingleProduct">
      <img src={products.image} alt={products.title} className="productImg" />
      <div className="productInfo">
        <h2 className="productTitle">{products.title}</h2>
        <p className="productPrice"><strong>${products.price}</strong></p>
      </div>
      <div className="cartInfo">
        <button className="button" onClick={() => dispatch(removeFromCart(products.id))}>-</button>
        <h4>{curQuantity}</h4>
        <button className="button" onClick={() => dispatch(addToCart(products.id))}>+</button>
      </div>
    </div>
  );
}

export default SingleProduct;
