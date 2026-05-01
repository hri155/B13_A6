import ToolsCard from "./ToolsCard";
import Cart from "./Cart";

const Products = ({
  carts,
  showCart,
  setShowCart,
  handleAddToCart,
  handleRemoveCart,
  handleCheckout,
}) => {
  return (
    <div className="mt-20">
      <div className="text-center space-y-5">
        <h1 className="text-3xl text-black font-bold">Premium Digital Tools</h1>

        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products designed<br />
          to boost your productivity and creativity.
        </p>

        <div className="inline-flex px-2 py-1.5 gap-4">
          <button
            onClick={() => setShowCart(false)}
            className={`btn rounded-full ${
              !showCart ? "btn-primary" : ""
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setShowCart(true)}
            className={`btn rounded-full ${
              showCart ? "btn-primary" : ""
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      <div className="mt-10">
        {showCart ? (
          <Cart
            carts={carts}
            handleRemoveCart={handleRemoveCart}
            handleCheckout={handleCheckout}
          />
        ) : (
          <ToolsCard
            carts={carts}
            handleAddToCart={handleAddToCart}
          />
        )}
      </div>
    </div>
  );
};

export default Products;