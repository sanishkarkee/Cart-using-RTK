import React from 'react';
import { TbChevronCompactDown, TbChevronCompactUp } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../features/cart/cartSlice';

const CartItem = (props) => {
  const { id, title, price, img, amount } = props;

  const dispatch = useDispatch();

  const removeSingleItem = (id, title) => {
    dispatch(removeItem({ itemId: id, itemTitle: title }));
  };

  const increaseQuantity = (itemId) => {
    dispatch(increase(itemId));
  };

  const decreaseQuantity = (itemId) => {
    dispatch(decrease(itemId));
  };

  return (
    <article className='cart-item'>
      <img src={img} alt='title' />

      <div>
        <h4>{title}</h4>
      </div>

      <h4 className='item-price'>$ {price}</h4>

      <button
        className='remove-btn'
        onClick={() => removeSingleItem(id, title)}
      >
        Remove
      </button>

      <div>
        <button className='amount-btn' onClick={() => increaseQuantity(id)}>
          <TbChevronCompactUp />
        </button>

        <p className='amount'>{amount}</p>

        <button className='amount-btn' onClick={() => decreaseQuantity(id)}>
          <TbChevronCompactDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
