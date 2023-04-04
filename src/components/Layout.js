import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { fetchCartData } from "../store/cart-actions";
const Layout = () => {
  fetchCartData();

  let items = useSelector( state => state.cart.itemlist);
  let showcart = useSelector( state => state.ui.showCart);
  let total = 0;
  console.log("Items: ", items);
  items.forEach((item)=>{
    total += parseFloat(item.totalprice);
  });

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        { showcart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
