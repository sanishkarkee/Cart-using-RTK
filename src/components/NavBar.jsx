import React from 'react';
import { SlHandbag } from 'react-icons/sl';
import { useSelector } from 'react-redux';

const NavBar = () => {
  // console.log(useSelector((store) => store?.cart?.amount));
  const { amount } = useSelector((store) => store?.cart);

  return (
    <>
      <nav className='nav-center'>
        <h3>Redux Toolkit</h3>
        <div className='nav-container'>
          <SlHandbag className='img-cart' />
          <p className='total-amount'>{amount}</p>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
