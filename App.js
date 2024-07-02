// createElement will create h1 tag element in react
const heading = React.createElement("h1",{id: "heading", xyz:"abc"},"Hello World From React")

// we place everything inside root in react and to create root we have ReactDOM.createRoot methode
const root = ReactDOM.createRoot(document.getElementById("root"));

// finally we will render heading tag in root using render() method
root.render(heading)