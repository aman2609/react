import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Namaste Guys"
);
const heading2 = React.createElement(
  "h2",
  { id: "title", key: "h2" },
  "Namaste Guys"
);
const container1 = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const Heading3 = ()=> (<h3>heading3</h3>)
const Container = () => {
  return (
    <div>
      <h1 id="h1" key="h1">
        NAMASTE AMAN
      </h1>
      <Heading3/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
