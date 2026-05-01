import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Products from "../components/Products";
import { useState } from "react";
import StartingStep from "../components/StartingStep";
import Pricing from "../components/Pricing";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const Home = ({ carts, handleAddToCart, handleRemoveCart, handleCheckout }) => {
  const [showCart, setShowCart] = useState(false);

  const handleAddAndShowCart = (tool) => {
    handleAddToCart(tool);
    setShowCart(true);
  };

  return (
    <div>
      <Navbar carts={carts} />

      <Banner />
      <About />

      <div className="px-36">
        <Products
          carts={carts}
          showCart={showCart}
          setShowCart={setShowCart}
          handleAddToCart={handleAddAndShowCart}
          handleRemoveCart={handleRemoveCart}
          handleCheckout={handleCheckout}
        />

        <StartingStep />
        <Pricing />
      </div>

      <Explore />
      <Footer />
    </div>
  );
};

export default Home;