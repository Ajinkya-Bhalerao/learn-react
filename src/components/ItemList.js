import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  const { id, name, defaultPrice, price, description, imageId } = props.itemDes;

  const dispatch = useDispatch();
  const handleAddItem = (itemData) => {
    dispatch(addItem({ itemData }));
  };

  return (
    <div className="mx-2 my-3 p-2 shadow-sm rounded-xl border-b-2 flex justify-between">
      <div id={id} className="w-10/12 m-3 text-left">
        <div className="py-2">
          <span className="text-gray-800 my-5 py-2 font-semibold text-[15px]">
            {name}
          </span>
          <span> - ₹ {price / 100 || defaultPrice / 100}</span>
        </div>
        <p className=" text-gray-800 text-xs">{description}</p>
      </div>
      {imageId ? (
        <div className="w-2/12 p-2">
          <div className="absolute">
            <button
              className="p-1 broder bg-white ring-1 ring-red-500 rounded-lg hover:text-red-500"
              onClick={() => handleAddItem(props.itemDes)}
            >
              Add +
            </button>
          </div>
          <img
            className="px-1 w-full rounded-xl"
            src={CDN_URL + imageId}
            alt=""
          />
        </div>
      ) : (
        <div className="m-7">
          <button
            className="p-1 broder bg-white ring-1 ring-red-500 rounded-lg hover:text-red-500"
            onClick={() => handleAddItem(props.itemDes)}
          >
            Add +
          </button>
        </div>
      )}
    </div>
  );
};


export const inCartItemList = () => {
  return (props) => {
    
    const dispatcher = useDispatch();
    const handleRemoveItem = () =>{
      dispatcher(removeItem())
    }
    
    return (
      <div className="mx-2 my-3 p-2 rounded-xl border-b-1">
        <ItemList {...props} />
        <button className="ml-11 p-1 broder bg-white ring-1 ring-red-500 rounded-lg hover:text-red-500" onClick={handleRemoveItem}>Remove From Cart</button>
      </div>
    );
  };
};

export default ItemList;
