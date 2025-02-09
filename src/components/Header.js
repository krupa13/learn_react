import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Header = () => {
  
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isClicked, setIsClicked] = useState(false);

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handlClick = () => {
    setIsClicked(true);
  }


  const onlineStatus = useOnlineStatus();

    return (
      <div className="flex justify-between bg-orange-400 shadow-lg">
        <div className="logo-container">
          <img className="w-56" src={LOGO_URL} />
        </div>
        <div className="flex items-center mr-10">
          <ul className="flex list-none p-4 m-4">
            <li className="px-4 font-bold">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4 font-bold">
              <Link to="/" className="text-black duration-300 transition-all hover:no-underline hover:text-white">
                Home
              </Link>
            </li>
            <li className="px-4 font-bold">
              <Link to="/about" className="text-black duration-300 transition-all hover:no-underline hover:text-white">
                About Us
              </Link>
            </li>
            <li className="px-4 font-bold">
              <Link to="/contact" className="text-black duration-300 transition-all hover:no-underline hover:text-white">
                Contact Us
              </Link>
              </li>
            <li className="px-4 font-bold">
              <Link to="/grocery" className="text-black duration-300 transition-all hover:no-underline hover:text-white">
                Grocery
              </Link>
            </li>
            <li className="px-4 font-bold">
              <Link to='/cart'>
                Cart ({cartItems.length} Items)
              </Link>
            </li>
          </ul>
            <button 
                className="w-24 border-2 border-solid border-white text-white font-bold text-lg px-2 py-2 rounded-xl duration-400 transition-all ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:bg-orange-300 focus:shadow-none active:bg-orange-300 hover:bg-orange-300 active:shadow-none"
                onClick={() => {
                  btnNameReact === "Login" 
                    ? setBtnNameReact("Logout") 
                    : setBtnNameReact("Login")
                }}
                >
                {btnNameReact}
              </button>
              <li className="px-4 font-bold list-none">{loggedInUser}</li>
        </div>
      </div>
    );
};

export default Header;