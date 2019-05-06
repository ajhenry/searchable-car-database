import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import Search from "./Search/Search";
import { Header } from "../components/Header";

const App = () => {
  return (
    <div className="h-100 d-flex flex-column">
      <Header />
      <Search />
    </div>
  );
};

export default App;
