import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "title1" }, "This is Namaste React 🚀."),
    React.createElement("h2", { id: "subTitle1" }, "By Rahul Rana"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "title2" }, "Its an H1 tag."),
    React.createElement("h2", { id: "subTitle2" }, "Its an H2 tag."),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
