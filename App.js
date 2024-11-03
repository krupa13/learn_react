import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
            cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} star</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
    {
        info: {
            id: "11091",
            name: "Pizza Hut",
            cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ea1daf5-b64e-43d2-80db-b460ed92e05c_11091.jpg",
            locality: "Attapur",
            areaName: "Attapur",
            costForTwo: "₹350 for two",
            cuisines: ["Pizzas"],
            avgRating: 4.1,
            parentId: "721",
            avgRatingString: "4.1",
            totalRatingsString: "19K+",
            sla: {
            deliveryTime: 41,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
            nextCloseTime: "2024-11-03 04:00:00",
            opened: true,
            }
        }
    },
    {
        info: {
            id: "655339",
            name: "KFC",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG",
            locality: "Gudimalkapur",
            areaName: "Inner Ring Road",
            costForTwo: "₹400 for two",
            cuisines: [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
            ],
            avgRating: 4.1,
            parentId: "547",
            avgRatingString: "4.1",
            totalRatingsString: "1.5K+",
            sla: {
            deliveryTime: 28,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2024-11-03 01:00:00",
            opened: true
            },
        }
    },
    {
        info: {
            id: "547809",
            name: "Theobroma",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/860230a7-ae23-497a-9e5e-82f232538c20_547809.JPG",
            locality: "Himayath Nagar",
            areaName: "Himayath Nagar",
            costForTwo: "₹400 for two",
            cuisines: [
            "Desserts"
            ],
            avgRating: 4.6,
            parentId: "1040",
            avgRatingString: "4.6",
            totalRatingsString: "3.0K+",
            sla: {
            deliveryTime: 62,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            slaString: "60-65 mins",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2024-11-03 01:00:00",
            opened: true
            },
        }
    },
    {
        info: {
            id: "68325",
            name: "LunchBox - Meals and Thalis",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/5ff2a356-f154-452e-ac1e-53b5f49b141c_68325.jpg",
            locality: "Ground floor, Mehdipatnam (Behind Mina Hospital)",
            areaName: "Humayun Nagar",
            costForTwo: "₹200 for two",
            cuisines: [
            "Biryani",
            "North Indian",
            "Punjabi",
            "Healthy Food",
            "Desserts",
            "Beverages"
            ],
            avgRating: 4.2,
            parentId: "4925",
            avgRatingString: "4.2",
            totalRatingsString: "8.6K+",
            sla: {
            deliveryTime: 36,
            lastMileTravel: 2.8,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "2.8 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2024-11-02 23:59:00",
            opened: true
            },
        }
    },
    {
        info: {
            id: "150646",
            name: "Cream Stone Ice Cream",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/a58a5016-6fd8-47dc-9681-bd5e912e31c2_150646.jpg",
            locality: "Begum Bazaar",
            areaName: "Himayath Nagar",
            costForTwo: "₹250 for two",
            cuisines: [
            "Ice Cream",
            "Desserts",
            "Beverages",
            "Ice Cream Cakes"
            ],
            avgRating: 4.4,
            parentId: "289",
            avgRatingString: "4.4",
            totalRatingsString: "30K+",
            sla: {
            deliveryTime: 44,
            lastMileTravel: 4.3,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "4.3 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2024-11-02 23:59:00",
            opened: true
            },
        }
    }
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurent) => ( 
                <RestaurentCard resData={restaurent}/>
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
