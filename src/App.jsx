import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  // Show/hide modal my accessing its state
  const { isOpen } = useSelector((state) => state.modal);

  // increase,decrease,remove operation huna saath page ma change value dekhauna , this is done while working on "calculateTotals"
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
