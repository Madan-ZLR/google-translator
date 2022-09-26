import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Rapidapi from "../rapidt/Rapidapi";

const HomePage = () => {
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <>
      {isUserAuthenticated ? <Rapidapi /> : <Navigate to="/login"></Navigate>}
    </>
  );
};

export default HomePage;
