import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/RestaurentData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((restaurent) => (
            <RestaurantCard key={restaurent?.card?.card?.info?.id} resData={restaurent} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;