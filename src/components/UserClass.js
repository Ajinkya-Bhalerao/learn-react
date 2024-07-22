import React from "react";
// import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };

    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ajinkya-Bhalerao");
    const jsonData = await data.json();
    // console.log(jsonData);
    this.setState({
      userData: jsonData,
    });
    console.log( this.props.name + "Mount")
  }
  componentDidUpdate(){
    console.log("Component did Updated")
  }
  componentWillUnmount(){
    console.log("Component unmounted!!!")
  }
  render() {
    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        {/* <User
          name={name +" innerChild"}
          location={"California Class"}
          contact={"ajinkyabhalerao3899@gmail.com"}
        /> */}
        <h2>Name: {this.state.userData.name}</h2>
        <h3>Location: {this.state.userData.location}</h3>
      </div>
    );
  }
}

export default UserClass;
