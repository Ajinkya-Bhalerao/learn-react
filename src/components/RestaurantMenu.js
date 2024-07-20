import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import DropMenu from "./DropMenu";
const RestaurantMenu = () => {
  const { resID } = useParams();

  // Custom Hook -> return resInfo and menuInfo array -> API call hook
  const [resInfo, menuInfo] = useRestaurantMenu(resID);

  if (resInfo === null || menuInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="m-5 p-5">
      <div className="m-3 p-2 bg-[#ededd5] w-auto rounded-2xl ">
        <h1 className="font-extrabold text-5xl text-gray-700">{name}</h1>
        <h3 className="font-medium text-gray-700">{cuisines.join(", ")}</h3>
        <h4 className="font-medium text-gray-700">{costForTwoMessage}</h4>
      </div>
      <div className="m-5 p-5 text-center">
        <h2 className="font-extrabold text-2xl text-gray-700">Menu</h2>
        <div className="font-medium ">
          <ul className="m-2 p-2 list-decimal">
            {menuInfo &&
              menuInfo.map((res, idx) => (
                <DropMenu key={idx} eachMenu={res}/>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
