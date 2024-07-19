import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const online = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
      <Link to="/"> <img className="w-7/12 rounded-e-full" src={LOGO_URL} /> </Link>
      </div>
      <div className="flex items-center text-lg font-semibold">
        <ul className="flex p-4 m-5" >
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
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
