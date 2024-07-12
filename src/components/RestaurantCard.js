import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.card?.card?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="res-name">{name}</h3>
        <h4 className="res-type">{cuisines.join(", ")}</h4>
        <div className="rate-container">
          <h4 className="res-rating">{avgRating} Star</h4>
          <h4 className="res-delivery-time">{sla.deliveryTime} min</h4>
        </div>
      </div>
    );
  };

  export default RestaurantCard