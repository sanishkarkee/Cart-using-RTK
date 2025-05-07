import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from '../features/modal/modalSlice';
import { TbRuler } from 'react-icons/tb';
// import { clearCart } from '../features/cart/cartSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const clearCartModalHandler = () => {
    dispatch(openModal(true));
  };

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your cart</h2>
          <h4 className='empty-cart'>
            is currently <strong style={{ color: 'Red' }}>Empty</strong>
          </h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your cart</h2>
      </header>

      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            Total
            <span>${total}</span>
          </h4>
        </div>

        <div className='btn clear-btn' onClick={() => clearCartModalHandler()}>
          Clear cart
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
