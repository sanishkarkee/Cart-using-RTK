import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal(false));
  };

  const handleClearModal = () => {
    dispatch(clearCart());
    dispatch(closeModal(false));
  };

  return (
    <>
      <aside className='modal-container'>
        <div className='modal'>
          <h4>Remove all items from your shopping cart?</h4>
          <div className='btn-container'>
            <button
              type='button'
              className='btn confirm-btn'
              onClick={() => handleClearModal()}
            >
              confirm
            </button>
            <button
              type='button'
              className='btn clear-btn'
              onClick={() => handleCloseModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Modal;
