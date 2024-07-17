import User from "./User";
import UserClass from "./UserClass";

import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Mount")
  }

  componentDidUpdate() {
    console.log("Component Updated Successfully");
  }

  render() {
    // console.log("Parent Render")
    return (
      <div>
        {/* uncomment the below code to see unmounting cycle in functional components */}
        {/* <User name = {"Functional Component"} location={"USA"}/> */}
        <UserClass name = {"Class Component"} location={"USA"} />
      </div>
    );
  }
}
export default About;

/*
  - parent contructor
  - parent render
    
    - first child constructor
    - first render
      - first InnerChild Constructor
      - first InnerChild render
    
    - Second child constructor
    - Second render
      - Second InnerChild Constructor
      - Second InnerChild render

    - Third child constructor
    - Third render
      - Third InnerChild Constructor
      - Third InnerChild render

  Commit Order is Wrong
    - First Mount
    - First InnerChild Mount
    - Second Mount
    - Second InnerChild Mount
    - Thrid Mount
    - Thrid InnerChild Mount
  - Prent Mount
*/

/*
- parent contructor
  - parent render
    
    - first child constructor
    - first render
      - first InnerChild Constructor
      - first InnerChild render
    
    - Second child constructor
    - Second render
      - Second InnerChild Constructor
      - Second InnerChild render

    - Third child constructor
    - Third render
      - Third InnerChild Constructor
      - Third InnerChild render

    Correct Commit Order is this

    - First InnerChild Mount
    - First Mount
    - Second InnerChild Mount
    - Second Mount
    - Thrid InnerChild Mount
    - Thrid Mount
  - Prent Mount
*/

// Commit is costly operation as it involves changing the DOM or Manipulating DOM
// Therefor React batch all the compnents in render phase and triggres reconciliation algo making use of Virtual DOM
// After all the child are resolved then it make changes to DOM by commiting in batch
// ComponentDidMount() -> is in commit phase and involves DOM manipulation that's why it logs output after render()
