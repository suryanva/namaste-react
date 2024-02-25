// creating a HTML element and rendering at id root
const headingOne = React.createElement(
  "h1",
  { id: "headingOne", xyz: "abc" },
  "Namaste React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingOne);

// Creating a nested element and rendering at id root-two

const parentElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm H1 Tag")
  )
);

const rootElement = ReactDOM.createRoot(document.getElementById("root-two"));
rootElement.render(parentElement);

// ReactElement(Object) => HTML(browser rendering)

// Now creating React elements nested with siblings at end

const siblingElement = React.createElement(
  "div",
  { id: "parent-two" },
  React.createElement("div", { id: "child-two" }, [
    React.createElement("h1", {}, "Im a h1 Tag with sibling"),
    React.createElement("h2", {}, "Im an h2 tag with a sibling"),
  ])
);

const rootElementWithSibling = ReactDOM.createRoot(
  document.getElementById("root-three")
);
rootElementWithSibling.render(siblingElement);

// Now creating the same as above but double the number of children
const finalElement = React.createElement("div", { id: "parent-final" }, [
  React.createElement("div", { id: "child-final-one" }, [
    React.createElement("h1", {}, "Im a h1 Tag with sibling"),
    React.createElement("h2", {}, "Im an h2 tag with a sibling"),
  ]),
  React.createElement("div", { id: "child-final-two" }, [
    React.createElement("h1", {}, "Im a h1 Tag with sibling"),
    React.createElement("h2", {}, "Im an h2 tag with a sibling"),
  ]),
]);

const rootFinal = ReactDOM.createRoot(document.getElementById("root-four"));
rootFinal.render(finalElement);
