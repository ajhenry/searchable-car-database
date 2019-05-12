import React, { useState } from "react";
import { Header } from "../components";
import "./App.css";
import LoadDb from "./LoadDb/LoadDb";
import Search from "./Search/Search";

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
