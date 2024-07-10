import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// Traditinal way to create react element but not used now
// const heading = React.createElement("h1",{id: "root"}, "Welcome React")

// JSX -> its not a part of react or it is not html in js.
// Can be written in single line
const jsxHeading = <h1 id="heading">This is from JSX </h1>;

// For multiple line we should use ( ).
const multiJSX = (
  <h1 className="heading" tabIndex="5">
    Hello From React Using JSX
  </h1>
);
console.log(jsxHeading);
console.log(multiJSX)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(multiJSX);
