import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { uiActions } from "../store/ui-slice";
const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector( state => state.cart.totalqty);
  const setShowCart = ()=>{
    dispatch(uiActions.setShowCart());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={setShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
