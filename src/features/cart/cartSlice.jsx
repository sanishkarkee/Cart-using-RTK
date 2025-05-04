import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems, //individual cart items
  amount: 10, // no of cart items
  total: 1000, // total of all prices
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer;
