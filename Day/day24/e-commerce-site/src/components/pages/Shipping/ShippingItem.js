import React from 'react';
import "./ShippingItem"
import { IoClose } from "react-icons/io5";

function ShippingItem({products}) {
  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };




  return (
    <div className='ShippingItemCard'>
        <h1>Shipping Item</h1>
        <img src= {products.image} alt={products.title} className="ShippingImg" />
        <div className="ShippingItemDetail">
          <h2>{products.title}</h2>
          <h3>{products.description}</h3>
          <h1><strong>${products.price}</strong></h1>
        </div>
        <div className="shippingItemQuantityCard">
            <input type="text" value={0} className='ShippingItemQuantity' />
            <button className='ShippingItemClose' onClick={() => {}}><IoClose /></button>
        </div>
        <hr />
    </div>
  )
}

export default ShippingItem