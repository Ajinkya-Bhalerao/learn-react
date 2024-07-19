import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
    cloudinaryImageId,
    costForTwo,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] h-auto rounded-xl bg-[#16dd5580] shadow-xl hover:bg-[#56d0c28c]">
      <img className=" rounded-xl" src={CDN_URL + cloudinaryImageId} />
      <h3 className="m-2 font-bold text-pretty">{name}</h3>
      <h4 className="m-1 p-1">{costForTwo}</h4>
      <h4 className="m-1 px-2 py-1 bg-[#408d5967] rounded-lg font-thin">
        {cuisines.join(", ")}
      </h4>
      <div className="px-2 py-1  flex justify-between">
        <div className="p-0">
          <h4 className="font-extrabold">{avgRating} Star</h4>
          <h4 className="font-semibold">{"(" + totalRatingsString + ")"}</h4>
        </div>
        <h4 className="font-semibold">{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
