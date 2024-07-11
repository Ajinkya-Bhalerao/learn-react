import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Span element</span>

// title Component
const Title = (
  <h1 className="heading" tabIndex="5">
    {elem}
     This is Title Element
  </h1>
);

// Footer Compopnent
const Footer = () => <h2 className="heading"> copyright@ajinkya</h2>;

const number = 1000;
// component composition -> compnents inside another compnent.
const HeadingComponent = () => {
  return (
    <div className="container">
      {Title}
      <h1 className="heading">
        Hello from functional component!!!</h1>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
