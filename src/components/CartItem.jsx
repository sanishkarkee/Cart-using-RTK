import React from 'react';
import { TbChevronCompactDown, TbChevronCompactUp } from 'react-icons/tb';

const CartItem = (props) => {
  const { id, title, price, img, amount } = props;

  return (
    <article className='cart-item'>
      <img src={img} alt='title' />

      <div>
        <h4>{title}</h4>
      </div>

      <h4 className='item-price'>$ {price}</h4>

      <button className='remove-btn'>Remove</button>

      <div>
        <button className='amount-btn'>
          <TbChevronCompactUp />
        </button>

        <p className='amount'>{amount}</p>

        <button className='amount-btn'>
          <TbChevronCompactDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
