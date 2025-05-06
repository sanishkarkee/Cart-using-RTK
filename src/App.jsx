import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();

  // increase,decrease,remove operation huna saath page ma change value dekhauna , this is done while working on "calculateTotals"
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
