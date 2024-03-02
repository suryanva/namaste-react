import React from "react";
import ReactDOM from "react-dom/client";
// Creating a react element using JSX
//JSX is not part of react

// Using core react below is the creation of react element
// React.createElement => ReactElement-JS Object => HTMLElement(render)
const firstElement = React.createElement(
  "h1",
  { id: "headingTwo" },
  "Namstae React using Core react"
);
const secondRoot = ReactDOM.createRoot(document.getElementById("root-two"));
secondRoot.render(firstElement);

// JSX (Transpiled before it reaches the JS)- Babel converts JSX to React.createElent
// JSX=>React.createElement=>ReactElement-JSObject=>HTMLElement(render)

const jsxElement = (
  <h1 id="headingOne" className="head">
    Welcome to Namastae React using JSX Syntax
  </h1>
); //JSX SYNTAX to create a react element
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(jsxElement);

// React Component
// Class Based Components->>OLD WAY OF DOING
// Functional Components->>NEW WAY OF DOING

const FunctionalComponentOne = () => {
  return (
    <h1 className="functional-component">This is a Functional Component</h1>
  );
};
const thirdRoot = ReactDOM.createRoot(document.getElementById("root-three"));

thirdRoot.render(<FunctionalComponentOne />);

// placing a  component into an other component is called Component Composition

const FunctionalComponentTwo = () => {
  return (
    <div>
      <h1>This is Second Functional Component</h1>
      <FunctionalComponentOne />
    </div>
  );
};
const oneRoot = ReactDOM.createRoot(document.getElementById("root-four"));
oneRoot.render(<FunctionalComponentTwo />);

// Creating a Functional component using Normal javascript Function:
const NormalComponent = function () {
  return <h2>Normal Function</h2>;
};

// Functional Component Three-where we can insert javascript inside the JSX/or an React Element inside Componet
const FunctionalComponentThree = () => (
  <div>
    <span>{jsxElement}</span>
    <h3>{console.log("Hello-World")}</h3>
    <h3>FUnctional component Three</h3>
  </div>
);

oneRoot.render(<FunctionalComponentThree />);
