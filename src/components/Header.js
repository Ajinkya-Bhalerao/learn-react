import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const data = useContext(UserContext);
  const online = useOnlineStatus();

  //subscribing our store using useSelector Hook-> this will give access to our store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
        <Link to="/">
          <img className="w-7/12 rounded-e-full" src={LOGO_URL} />{" "}
        </Link>
      </div>
      <div className="flex items-center text-lg font-semibold">
        <ul className="flex p-4 m-5">
          <li className="px-4">Online Status: {online ? "✅" : "🔴"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="pl-3 pr-6">
            <Link to="/cart">
              <div className="flex flex-wrap">
                <div
                  className={
                    cartItems.length === 0
                      ? "mr-1 px-3 w-auto content-center bg-red-400 rounded-full text-white"
                      : "mr-1 px-3 w-auto content-center bg-red-400 rounded-full text-white"
                  }
                >
                  {cartItems.length === 0 ? "0" : cartItems.length}
                </div>
                <div className="">
                  <svg
                    className="w-9 h-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#e65656"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#3b3535"
                      strokeWidth="0.048"
                    >
                      <path
                        d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19"
                        stroke="#e65656"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        opacity="0.5"
                        d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                        stroke="#e65656"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        opacity="0.5"
                        d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                        stroke="#e65656"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
                        stroke="#e65656"
                        strokeWidth="1.5"
                      ></path>
                    </g>
                    <g id="SVGRepo_iconCarrier"></g>
                  </svg>
                </div>
                <div className="">cart</div>
              </div>
            </Link>
          </li>
          <button
            className="px-4 text-white bg-orange-400 rounded-full text-center"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          {/* use of react useContect -> golably store data to access from any of the component inside application */}
          <li className="px-4 text-red-600">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
