import React from "react";
import ReactDOM from "react-dom/client";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//   div with class “title”)
const nestedHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, ""),
  React.createElement("h2", {}, ""),
  React.createElement("h3", {}, ""),
]);

const firstRoot = ReactDOM.createRoot(document.getElementById("root"));

firstRoot.render(nestedHeader);
//

// Same Using JSX
const nestedHeaderUsingJsx = (
  <div className="title">
    <h1></h1>
    <h2></h2>
    <h3></h3>
  </div>
);
const secondRoot = ReactDOM.createRoot(document.getElementById("root-two"));
secondRoot.render(nestedHeaderUsingJsx);

// Same using Functional Component:
const NestedHeaderUsingFC = () => (
  <div className="title">
    <h1></h1>
    <h2></h2>
    <h3></h3>
  </div>
);

const thirdRoot = ReactDOM.createRoot(document.getElementById("root-three"));

thirdRoot.render(<NestedHeaderUsingFC />);
