import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./RestaurentData";

/*
App
  Header
    - logo
    - Nav items
    - cart
  Body
    - search
    - restaurentContainer
      - restaurent card
      - time to delivery
      - type of cusin
      - star rating
  Footer
    - copyright
    - links
    - address
    - contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJ8giiCmiHq5_yA_zwouIXEt0mkAkDyM-ww&s"
        />
      </div>
      <div className="nav-item">
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

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData.card.card.info);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.card.card.info.cloudinaryImageId}`}
      />
      <h3 className="res-name">{resData.card.card.info.name}</h3>
      <h4 className="res-type">{resData.card.card.info.cuisines.join(", ")}</h4>
      <div className="rate-container">
        <h4 className="res-rating">{resData.card.card.info.avgRating} Star</h4>
        <h4 className="res-delivery-time">
          {resData.card.card.info.sla.deliveryTime} min
        </h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        
        {resList.map((key) => (
          <RestaurantCard resData={key} />
        ))}

        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} /> */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="copyright-container"> copyright @ajinkyabhalerao</div>
      <div className="footer-links">
        <ul>
          <li>Contact US</li>
          <li>About US</li>
          <li>Email</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div className="Address-container">
        <h3>2650 College Place, Fullerton, CA 92831</h3>
      </div>
      <div className="feedback-container">
        <a href="/">Feedback</a>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
