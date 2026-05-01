const Cart = ({ carts, handleRemoveCart, handleCheckout }) => {
const total = carts.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="mt-10 max-w-3xl mx-auto">

      {carts.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <div className="space-y-4">

          {carts.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
              
              <div className="flex items-center gap-3">
                <img src={item.icon} className="w-10 h-10" />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className=" text-[#627382]">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemoveCart(item.id)}
                className="btn btn-sm bg-transparent text-pink-500 rounded-full"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <span className=" text-[#627382]">Total:</span>
            <span className="font-bold">${total}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="btn  bg-linear-to-r from-[#4f39f6] via-[#6a5af9] to-[#8b5cf6] text-white w-full rounded-full"
          >
            Proceed to Checkout
          </button>

        </div>
      )}
    </div>
  );
};

export default Cart;