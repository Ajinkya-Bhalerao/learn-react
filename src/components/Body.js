import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/RestaurentData";
import { useState } from "react";


const Body = () => {

    //state variable -
    const [listOfRes, setListOfRes] = useState(resList)
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRes(listOfRes.filter((res) => res?.card?.card?.info.avgRating > 4));
            console.log(listOfRes)
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurent) => (
          <RestaurantCard
            key={restaurent?.card?.card?.info?.id}
            resData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
