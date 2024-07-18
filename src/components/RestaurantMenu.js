import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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
    <div className="menu-container">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwoMessage}</h4>
      <h2>Menu</h2>
      <ul>
        {menuInfo && menuInfo.map((res, idx) => (
          <li key={idx}>
            {res?.card?.card?.title}
            <ul>
              {res?.card?.card?.itemCards ? (
                res?.card?.card?.itemCards.map((item) => (
                  <li key={item?.card?.info.id}>
                    {item?.card?.info.name} - Rs.
                    {item?.card?.info.defaultPrice / 100 ||
                      item?.card?.info.price / 100}
                  </li>
                ))
              ) : (
                <ul>
                  {res?.card?.card?.categories.map((item, idx) => (
                    <li key={idx}>
                      {item.title}
                      <ul>
                        {item.itemCards.map((itemCard) => (
                          <li key={itemCard?.card?.info?.id}>
                            {itemCard?.card?.info?.name} - Rs.
                            {itemCard?.card?.info?.defaultPrice / 100 ||
                              itemCard?.card?.info?.price / 100}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
