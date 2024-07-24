import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import DropMenu from "./DropMenu";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resID } = useParams();

  // Custom Hook -> return resInfo and menuInfo array -> API call hook
  const [resInfo, menuInfo] = useRestaurantMenu(resID);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null || menuInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="m-5 p-5">
      <div className=" mx-auto  p-2 bg-[#ededd5] w-96 rounded-2xl ">
        <div className="m-4 p-4 w-[250px] h-auto rounded-xl">
          <h1 className="font-extrabold text-5xl text-gray-700">{name}</h1>
          <h3 className="font-medium text-gray-700">{cuisines.join(", ")}</h3>
          <h4 className="font-medium text-gray-700">{costForTwoMessage}</h4>
        </div>
        <div className="m-3 mx-auto p-4 w-[250px] h-auto rounded-xl">
          <img className=" rounded-xl" src={CDN_URL + cloudinaryImageId} />
        </div>
      </div>
      <div className="m-5 p-5 text-center">
        <h2 className="font-extrabold text-2xl text-gray-700">Menu</h2>
        <div className="font-medium ">
          {menuInfo &&
            menuInfo.map((res, idx) => (
              <DropMenu
                key={idx}
                eachMenu={res}
                showItem={idx === showIndex && true}
                setShowIndex = {()=>setShowIndex(idx)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
