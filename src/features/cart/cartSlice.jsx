import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
import { toast } from 'react-toastify';
import { openModal } from '../modal/modalSlice';
import { useDispatch } from 'react-redux';

const initialState = {
  cartItems: cartItems, //individual cart items
  amount: 1, // no of cart items
  total: 0, // total of all prices
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    clearCart: () => {
      // state.cartItems = [];
      // state.total = 0;
      // state.amount = 0;
      // OR

      /*
      return(tala) bata j kura send garinxa tyo aba new
       state value hunxa so must be careful while returning
      */
      toast.success('Cart cleared');

      return {
        cartItems: [],
      };
    },

    removeItem: (state, action) => {
      const { itemId, itemTitle } = action.payload;

      //  state.cartItem ko bhitra gayera filter garne
      state.cartItems = state.cartItems.filter(
        (allCartItems) => allCartItems.id !== itemId
      );

      toast.success(`${itemTitle} removed`);
    },

    increase: (state, action) => {
      const itemId = action.payload;

      const cartItem = state.cartItems.find(
        (individualCartItem) => individualCartItem.id === itemId
      );

      if (cartItem.amount < 10) {
        cartItem.amount = cartItem.amount + 1;
      } else {
        toast.error('No more than 10 allowed');
      }
    },

    decrease: (state, action) => {
      const itemId = action.payload;

      const cartItem = state.cartItems.find(
        (individualCartItem) => individualCartItem.id === itemId
      );

      if (cartItem.amount > 1) {
        cartItem.amount = cartItem.amount - 1;
      } else {
        //if the amount is 0 removing from the cart
        state.cartItems = state.cartItems.filter(
          (individualArrayItem) => individualArrayItem.id !== itemId
        );
        toast.error(`${cartItem.title} removed`);
      }
    },

    // For showing total and amount
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((allCartItems) => {
        amount = amount + allCartItems.amount;
        total = total + allCartItems.price * allCartItems.amount;
      });

      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
