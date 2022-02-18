import React, { useState, useEffect } from "react";
import Appbar from "./components/Appbar/Appbar";

const App = () => {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Appbar />
    </>
  );
};

export default App;
