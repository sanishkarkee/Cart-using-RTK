import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
import { toast } from 'react-toastify';

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
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
