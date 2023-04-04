import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    notification: null,
    showCart: false,
    cartChanged: false
  },
  reducers: {
    showNotification(state, action){
      state.notification ={
        type: action.payload.type,
        msg: action.payload.msg,
        open: action.payload.open
      } 
      console.log("action.payload: ",action.payload);
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
      console.log(state.showCart);
    },
    updateCartChanged(state){
      state.cartChanged = true;
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice;