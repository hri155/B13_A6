import './App.css'
import Home from './pages/Home';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts, setCarts] = useState([]);
  console.log(carts);

  const handleAddToCart = (tool) => {
  setCarts(prev => [...prev, tool]);
  toast.success(`${tool.name} added to cart`);
};

 const handleRemoveCart = (id) => {
  setCarts(prev => prev.filter(item => item.id !== id));
  toast.info("Product removed from cart");
};

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Checkout complete. Cart cleared!");
  };

  return (
    <>
      <Home
        carts={carts}
        handleAddToCart={handleAddToCart}
        handleRemoveCart={handleRemoveCart}
        handleCheckout={handleCheckout}
      />

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
}

export default App;