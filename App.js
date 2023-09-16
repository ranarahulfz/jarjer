import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/HeaderComp";
import SearchInputField from "./components/SearchInputField";

// React Element = Javascript Object
const HomePage = () => {
  return (
    <div className="app">
      <Header />
      <SearchInputField />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomePage />);
