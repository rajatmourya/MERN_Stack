import React from "react";
// import "./SingleProduct.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/slices/CartSlice";

function SingleProduct({ product }) {

  const dispatach = useDispatch();

  const cart = useSelector(state => state.CartReducer.cart);
  const curItem = cart.find(item => item.id == product.id);
  const curQuantity = curItem ? curItem.quantity : 0;


  return (
    <div className="SingleProduct">
      <img className="productImg" src={product.images[0]} alt={product.title} />
      {/* <img className="productImg" src={product.image} alt={product.title} /> */}
      <div className="productInfo">
        <h2 className="productTitle">{product.title}</h2>
        <p className="productPrice"><strong>${product.price}</strong></p>
      </div>
      <div className="cardInfo">
        <button className="button" onClick={() => dispatach(removeFromCart(product.id))}>-</button>
        <h4>{curQuantity}</h4>
        <button className="button" onClick={() => dispatach(addToCart(product.id))}>+</button>
        
      </div>
      {/* <div className="productInfo">
        <p className="productPrice">total Price: {product.price * curQuantity}$</p>
      </div> */}
    </div>
  );
}

export default SingleProduct;
