// import { useState } from "react";
import { useEffect } from "react";
const User = (props) => {
  console.log(" Render");

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Good Time");
    }, 1000);
    console.log("useEffect");
    // This setInterval will create an issue -> will not stop even when we change our page
    // therefore we need to clear interval in unmount as shown below -> limitation of single page application.
    // This below return will work as unmounting and called just before component is to be unmount(just befor page changes)

    return () => {
      clearInterval(timer);
      console.log("Timer Stopped");
    };
  }, []);

  const { name, location, contact } = props;
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
