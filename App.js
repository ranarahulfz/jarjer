const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Its an H1 tag."),
    React.createElement("h2", {}, "Its an H2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Its an H1 tag."),
    React.createElement("h2", {}, "Its an H2 tag."),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
