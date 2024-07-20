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
      <div className="px-1 py-1  flex justify-between">
        <div class="flex items-center">
          <svg
            class="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p class="ms-2 text-sm font-bold text-gray-900 dark:text-gray-900">
          {avgRating}
          </p>
          <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full text-gray-900"></span>
          <h4
            href="#"
            class="text-sm font-medium underline hover:no-underline text-gray-900"
          >
            {"(" + totalRatingsString + ")"}
          </h4>
        </div>
        {/* <div className="p-0">
          <h4 className="font-extrabold">{avgRating} Star</h4>
          <h4 className="font-semibold">{"(" + totalRatingsString + ")"}</h4>
        </div> */}
        <h4 className="font-semibold">{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
