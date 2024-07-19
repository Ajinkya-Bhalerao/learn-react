import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //state variable -

  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ).catch((e) => console.error(e));
    const jsonData = await data.json();

    // What's in your mind -> Data
    // console.log(jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info)

    resData =
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRes(resData);
    setFilteredRes(resData);
  };



  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>You are Offline</h1>
  }

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }



  return (
    <div className="body">
      <div className="banner-container"></div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //Filter the res cards and update the UI.
              // console.log(searchText);
              const filterRes = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRes(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRes(listOfRes.filter((res) => res?.info?.avgRating > 4));
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurent) => (
          <Link key={restaurent?.info?.id} to={"/restaurants/" + restaurent?.info?.id}>
            <RestaurantCard  resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
