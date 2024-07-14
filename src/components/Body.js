import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //state variable -

  const [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    resData = jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    
    console.log(resData)
    setListOfRes(resData)
  };

  if(listOfRes.length === 0){
    return(<Shimmer />)
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRes(
              listOfRes.filter((res) => res?.info?.avgRating > 4)
            );
            console.log(listOfRes);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurent) => (
          <RestaurantCard
            key={restaurent?.info?.id}
            resData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
