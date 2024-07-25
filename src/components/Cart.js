import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  // For changing the state of store while removing Item and clearing cart we need dispatcher
  const dispatcher = useDispatch();
  // Subscribe to the Store using Selector Now we can Access the data in Cart Item array -> array of updated cart items
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  const handleClearCart = () => {
    dispatcher(clearCart());
    console.log(cartItem);
  };

  return (
    <div className="m-2 p-2 text-center">
      <h1 className="font-bold font-mono text-[40px]">Cart</h1>
      <div className=" w-auto mx-auto mt-10 p-2 text-center">
        {cartItem.map((listItem) => {
          return (
            <ItemList
              key={listItem?.itemData?.id}
              itemDes={listItem?.itemData}
            />
          );
        })}
      </div>
      <div className=" p-2 w-40 mx-auto">
        <button
          className="px-4 py-2 text-sm text-red-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
