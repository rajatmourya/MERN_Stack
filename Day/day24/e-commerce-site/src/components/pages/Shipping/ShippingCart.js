import React from "react";
import "./ShippingCart.css";
import { useLocation} from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import ShippingItem from "./ShippingItem";
import { useSelector } from "react-redux"

function ShippingCart() {

  
  const products = useSelector((state) => state.ProductReducer.cart);  
  const cart = useSelector((state) => state.CartReducer.cart);
  
  let count = 0;
  cart.forEach((item) => {count += item.quantity});

  const location = useLocation();
  const curLocation = decodeURI(location.pathname).substring(1);
  return (
    <div className="ShippingCart">
      <div className="ShippingTitle">
        <h1 className="Shipping" >Shopping Cart</h1>

        <div className="ShippingSubTitle">
          <h4 className="ShippingUrl" >{curLocation}</h4>
          <h4 className="beg">{count} item in the bag</h4>
        </div>
        <hr />
      </div>

      <div className="ShippingItems">
      {products.map((item) => (
        <ShippingItem key={item.id} products={item} />
      ))}
      </div>

      <div className="ShippingTotalPrice">
        <div className="Promo">
          <label for="promo-code" class="promoLabel">
            Have A Promo Code?
          </label>
          <div class="inputContainer">
            <input type="text" class="promo-input" className="PromoInput" />
            <button className="PromoCodeButton">
              <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="TotalAmout">
          <div class="row">
            <span class="label">Subtotal</span>
            <span class="value">$21.97</span>
          </div>
          <div class="row">
            <span class="label">Tax</span>
            <span class="value">$5.00</span>
          </div>
          <div class="row total">
            <span class="label">Total</span>
            <span class="value">$26.97</span>
          </div>
          <button class="checkout-button">
            Check Out <FaGreaterThan style={{ alignContent: "center" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShippingCart;
