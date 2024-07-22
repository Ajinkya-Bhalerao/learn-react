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

  if (onlineStatus === false) {
    return (
      <div className="px-[10px] py-[25px] m-auto mt-[200px] w-[500px] h-[100px] font-bold bg-slate-100 rounded-3xl text-center text-red-500">
        <h2>Something Went Wrong!</h2>
        <h2>Please Check You Internet Connection...</h2>
      </div>
    );
  }

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex">
        <div className="m-3 p-4 flex items-center">
          <input
            type="text"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full m-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 text-sm text-green-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={() => {
              setFilteredRes(
                listOfRes.filter((res) => res?.info?.avgRating > 4)
              );
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurent) => (
          <Link
            key={restaurent?.info?.id}
            to={"/restaurants/" + restaurent?.info?.id}
          >
            <RestaurantCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
