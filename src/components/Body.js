import RestaurentCard from "./RestaurentCard";
import { SWIGGY_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [ListOfRestuarents, setListOfRestuarent] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    //* Optional Chaining
    setListOfRestuarent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  //* Conditional Rendering
  // if(ListOfRestuarents.length === 0) {
  //   return <Shimmer />
  // }

    return ListOfRestuarents.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter">
          <div className="search-items">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search Here...."
              value={searchText} 
              onChange={(e) => {
                setSearchText(e.target.value);
              }}/>
            <button 
              className="search-btn"
              onClick={() => {
                const filterRestaurant = ListOfRestuarents.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filterRestaurant);
              }}>
                Search
            </button>
          </div>
          <button 
            className="filter-btn"
            onClick={() => {
              const filteredList = ListOfRestuarents.filter(
                (res) => res.info.avgRating >= 4
              );
              setListOfRestuarent(filteredList);
            }}
            >
            Top Rated Restuarents
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurent) => ( 
                  <RestaurentCard key={restaurent.info.id} resData={restaurent}/>
          ))}
        </div>
      </div>
    );
};

export default Body;