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
          {" "}
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
          <li className="px-4 font-extrabold text-xl">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
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
          <li className="px-4 text-red-600">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
