import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemlist: [],
    totalqty: 0,
  },
  reducers: {
    replaceCartData(state, action){
      state.totalqty = action.payload.totalqty;
      state.itemlist = action.payload.itemlist;
      // state.showCart = action.payload.showCart;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemlist.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalprice += newItem.price;
      } else {
        state.itemlist.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalprice: newItem.price,
          name: newItem.name
        })
      }
      state.totalqty++;
    },
    removeFromCart(state, action) {
      const itemid = action.payload;
      // const itemPrice = action.payload.price;
      const existingItem = state.itemlist.find((item) => item.id === itemid);
      if (existingItem.quantity == 1) {
        state.itemlist = state.itemlist.filter((item) => item.id !== itemid);
      } else {
        existingItem.quantity--;
        existingItem.totalprice -= existingItem.price;
      }
      state.totalqty--;
    },
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;