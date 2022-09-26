import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import Rapidapi from "../rapidt/Rapidapi";

const AppRoute = () => {
  return (
    <Router>
<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/translaor" element={<Rapidapi />} />
      </Routes>      
    </Router>
  );
};

export default AppRoute;
