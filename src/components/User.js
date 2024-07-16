// import { useState } from "react";
import React from "react";

class User extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.name+" constructor called")
  }

  componentDidMount(){
    console.log(this.props.name+" Mount")
  }
  render(){
    console.log(this.props.name+" Render")
    const {name,location, contact} = this.props
    return (

      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}
export default User;
