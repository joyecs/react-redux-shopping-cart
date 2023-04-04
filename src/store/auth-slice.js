import { createSlice } from "@reduxjs/toolkit"; 

const authSlice = createSlice({
  name: 'auth',
  initialState: {isLoggedIn: false},
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      console.log("click")
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  }
})
export const authactions = authSlice.actions;

export default authSlice;