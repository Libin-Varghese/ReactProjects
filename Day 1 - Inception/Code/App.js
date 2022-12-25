//Hello World using plain JavaScript
const parentDiv = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
parentDiv.appendChild(h1);

//Namaste React using CDN link
// const rootDiv = document.getElementById("reactroot");
// const root = ReactDOM.createRoot(rootDiv);
const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Heading1"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
  },
  "Heading2"
);
const reactParentDiv = React.createElement(
  "div",
  {
    id: "parentContainer",
  },
  [heading1, heading2]
);
const reactRoot = ReactDOM.createRoot(document.getElementById("reactroot"));
reactRoot.render(reactParentDiv);
