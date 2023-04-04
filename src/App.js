import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";
let firstRender = true;
function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const changed = useSelector(state => state.ui.cartChanged)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    if(changed){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <div className="App">
      {notification && <Notification type={notification.type} msg={notification.msg} open={notification.open} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
