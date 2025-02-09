import RestaurentCard, {withOfferLabel} from "./RestaurentCard";
import { SWIGGY_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log("filteredRestaurant", filteredRestaurant);

  const RestuarentCardPromoted = withOfferLabel(RestaurentCard);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);

    const json = await data.json();

    //* Optional Chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //* Conditional Rendering
  if (onlineStatus === false)
    return (
      <div className="internet-off">
        <h1>Dude!!! Your internet connection is off🙅‍♂️..</h1>
        <p>
          <i class="fa-solid fa-spinner spinner"></i>
        </p>
      </div>
    );

  const {loggedInUser, setUserName} = useContext(UserContext); 

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border-solid border-2 border-orange-400 font-bold focus:outline-none py-2 px-3 m-2 rounded-xl"
            placeholder="Search Here...."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border border-transparent bg-orange-400 text-white font-bold text-lg py-2 px-4 rounded-xl duration-200 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:bg-orange-500 focus:shadow-none active:bg-orange-500 hover:bg-orange-500 active:shadow-none"
            onClick={() => {
              const filterRestaurant = ListOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center p-4 m-4">
          <button
            className="border border-transparent bg-gray-400 text-white font-bold text-lg py-2 px-4 rounded-xl duration-200 transition-all shadow-md hover:shadow-lg focus:outline-none focus:bg-gray-500 focus:shadow-none active:bg-gray-500 hover:bg-gray-500 active:shadow-none"
            onClick={() => {
              const filteredList = ListOfRestaurant.filter(
                (res) => res.info.avgRating >= 4
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restuarents
          </button>
        </div>
        <div className="flex items-center p-4 m-4">
          <label>Username: </label>
          <input 
                className="border-solid border-2 border-gray-600 focus:outline-none p-2 ml-2"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurent) => (
          <Link
            className="hover:no-underline"
            key={restaurent?.info?.id}
            to={"/restaurant/" + restaurent?.info?.id}
          >
            {
              restaurent?.info?.aggregatedDiscountInfoV3?.header && restaurent?.info?.aggregatedDiscountInfoV3?.subHeader ? 
              (
                <RestuarentCardPromoted resData={restaurent}/>
              ) : 
              (
                <RestaurentCard resData={restaurent} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
