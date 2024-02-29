import React from "react";
import ReactDOM from "react-dom/client";
// Creating a react element using JSX
//JSX is not part of react

// Using core react below is the creation of react element
const firstElement = React.createElement(
  "h1",
  { id: "headingTwo" },
  "Namstae React using Core react"
);
const secondRoot = ReactDOM.createRoot(document.getElementById("root-two"));
secondRoot.render(firstElement);

const jsxElement = (
  <h1 id="headingOne">Welcome to Namastae React using JSX Syntax</h1>
); //JSX SYNTAX to create a react element
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(jsxElement);
