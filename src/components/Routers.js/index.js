import React from "react";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<HomePage />} />
          <Route path="/login" component={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
