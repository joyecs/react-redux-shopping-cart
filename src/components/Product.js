import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { uiActions } from "../store/ui-slice";
import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  // executed more than 1 time
  // const cartItem = useSelector((state) =>state.cart.itemlist);
  // console.log("cart: ", cartItem);
  const addToCart = () =>{
    dispatch(cartActions.addToCart({
      name, id, price
    }));
    dispatch(uiActions.updateCartChanged());
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
