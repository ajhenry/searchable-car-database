import React, { useState } from "react";
import "./App.css";
import { Container } from "reactstrap";
import Search from "./Search/Search";
import { Header } from "../components";
import LoadDb from "./LoadDb/LoadDb";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="h-100 d-flex flex-column">
      <Header />
      {!loaded ? <LoadDb setLoaded={setLoaded} /> : <Search />}
    </div>
  );
};

export default App;
