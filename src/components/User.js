import { useState } from "react";

const User = ({name,location, contact}) => {

    const [count] = useState(0)
    const [count2] = useState(2)
    /* behind the scence it will be same as class component 
    
    this.state = {
        count: 0,
        count2 = 2,
    }
    React automatically manages useState variables in a single object this.state 
    */
  return (
    <div className="user-card">
        <h2>{count}</h2>
        <h2>{count2}</h2>

      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
