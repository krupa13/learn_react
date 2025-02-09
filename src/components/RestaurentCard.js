import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
    const { resData } = props;

    const {loggedInUser} = useContext(UserContext);
  
    const {
      name,
      cuisines,
      costForTwo,
      avgRating,
      cloudinaryImageId,
      sla
    } = resData?.info;
  
    return (
      <div className="pt-[35px] pr-[1.25rem] pb-[1.25rem] pl-[1.25rem] mx-4 mt-3 mb-5 w-[250px] max-h-[400px] h-[370px] bg-orange-200 rounded-xl">
        <img
          className="w-[220px] h-[130px] max-h-[150px] rounded-xl"
          src={IMG_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <h3 className="text-black mt-2 font-medium text-lg leading-snug">{name}</h3>
        <h4 className="text-black font-normal text-base">{cuisines.join(", ")}</h4>
        <h4 className="text-black font-normal text-base leading-4">{costForTwo}</h4>
        <h4 className="text-black font-normal text-base leading-4">{avgRating} star</h4>
        <h4 className="text-black font-normal text-base leading-4">{sla?.deliveryTime} minutes</h4>
        <h4 className="text-black font-normal text-base leading-4">User: <span className="font-bold">{loggedInUser}</span> </h4>
      </div>
    );
};

//* Higher Order Component

export const withOfferLabel = (RestaurentCard) => {
  return (props) => {

    const {header, subHeader} = props?.resData?.info?.aggregatedDiscountInfoV3;

    return (
      <div>
        <label className="absolute text-orange-800 font-bold text-2xl z-10 mt-[-1rem] ml-[1rem] p-3 rounded-xl">
          {header} {subHeader}
        </label>
        <RestaurentCard {...props}/>
      </div>
    )
  }
}

export default RestaurentCard;