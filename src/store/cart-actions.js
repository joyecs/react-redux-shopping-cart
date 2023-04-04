import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const sendCartData = (cart) => {
  return async (dispatch) => {
  // const dispatch = useDispatch();
    dispatch(uiActions.showNotification({
      type: 'warning',
      msg: 'Sending request',
      open: true
    }));
    const sendrequest = async () => {
      const res = await fetch('https://react-redux-6addd-default-rtdb.firebaseio.com/cartitems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        });
      const data = await res.json();
      // show notification after the request
      dispatch(uiActions.showNotification({
        open: true,
        type: 'success',
        msg: 'Sent request to the database.'
      }));
    };
    try{
      await sendrequest();
    }catch(error){
      console.log("error: ", error);
      dispatch(uiActions.showNotification({
        open: true,
        type: 'error',
        msg: 'Sending request failed.'
      }));
    }
  };
}

export const fetchCartData = () => {
  return async(dispatch) => {
    const fetchHandler = async() =>{
      const res = await fetch('https://react-redux-6addd-default-rtdb.firebaseio.com/cartitems.json');
      const data = await res.json();
      console.log("data: ", data);
      return data;
    }
    try{
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceCartData(cartData));
    }catch(error){
      console.log(error);
      dispatch(uiActions.showNotification({
        open: true,
        type: 'error',
        msg: 'Request data failed.'
      }));
    }
  }
}