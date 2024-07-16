import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child Constructor");
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log(this.props.name + "Child Mount");
  }
  render() {
    console.log(this.props.name + "Child Render");

    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2> {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              count: count - 1,
            });
          }}
        >
          -
        </button>
        <User
          name={name +" innerChild"}
          location={"California Class"}
          contact={"ajinkyabhalerao3899@gmail.com"}
        />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
