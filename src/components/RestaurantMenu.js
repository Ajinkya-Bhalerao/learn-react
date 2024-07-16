import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const [menuInfo, setMenuinfo] = useState("");

  const { resID } = useParams();
  // only working with 64708, 322540 ids -> not working id res include catagory array.
  console.log(resID);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resID).catch((e) => console.error(e));
    const MenuData = await data.json();
    setResInfo(MenuData.data);
    setMenuinfo(
      MenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
        3,
        -2
      )
    );
  };

  if (resInfo === null) {
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
        {menuInfo.map((res, idx) => (
          <li key={idx}>
            {res?.card?.card?.title}
            <ul>
              {res?.card?.card?.itemCards.map((item) => (
                <li key={item?.card?.info.id}>
                  {item?.card?.info.name} -
                  {item?.card?.info.defaultPrice / 100 ||
                    item?.card?.info.price / 100}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
