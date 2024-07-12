import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";





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
