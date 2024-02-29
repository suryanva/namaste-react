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
