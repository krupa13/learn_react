import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const toggleAcordion = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const resMenu = useRestuarantMenu(resId);

  if (resMenu === null) return <Shimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = resMenu?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="flex justify-center text-center flex-col mt-5">
      <div className="text-start ml-[20.5rem]">
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <div className="border-solid border-2 border-orange-200 w-[800px] mt-[7px] mb-[30px] ml-[20.5rem] rounded-xl shadow-xl shadow-orange-300">
        <div className="text-start ml-3">
          <h2 className="text-xl font-bold">
            {avgRating} ({totalRatingsString}){" "}
            <span className="relative bottom-[3px] text-gray-400 text-3xl font-bold ml-1">
              .
            </span>
            <span className="ml-2">{costForTwoMessage}</span>
          </h2>
          <h3 className="text-base text-orange-600 font-bold">{cuisines.join(", ")}</h3>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col items-center mt-[10px] ml-4">
            <div className="w-[7px] h-[7px] rounded-[50%] bg-gray-500"></div>
            <div className="w-[1px] h-[23px] bg-gray-500"></div>
            <div className="w-[7px] h-[7px] rounded-[50%] bg-gray-500"></div>
          </div>
          <div className="text-start ml-4">
            <h3 className="text-lg font-bold">
              Outlet:{" "}
              <span className="text-base font-medium text-gray-600">
                {areaName}
              </span>
            </h3>
            <h3 className="text-lg font-bold">{sla?.slaString?.toLowerCase()}</h3>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-14">
        {categories.map((category, index) => (
          <RestuarantCategory 
            key={category?.card?.card?.title} 
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            onShow={() => toggleAcordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
