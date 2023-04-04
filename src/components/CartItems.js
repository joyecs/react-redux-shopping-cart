import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
import { fetchCartData } from "../store/cart-actions";
const CartItems = () => {
  const items = useSelector( state => state.cart.itemlist);
  // const items = fetchCartData();
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {items.map( (item)=>(
          <li>
            <CartItem key={item.id} id={item.id} price={item.price} name={item.name}
            quantity={item.quantity} total={item.totalprice}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
