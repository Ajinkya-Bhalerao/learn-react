// nested react element using third paramenter as child element in createElement.

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "heading 1"),
    React.createElement("h2", { id: "heading" }, "heading 2"),
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "heading 1"),
    React.createElement("h2", { id: "heading" }, "heading 2"),
  ]),React.createElement("button",{id:"btn"},"submit")
]);

// we place everything inside root in react and to create root we have ReactDOM.createRoot methode
const root = ReactDOM.createRoot(document.getElementById("root"));

// finally we will render heading tag in root using render() method
root.render(heading);
