import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import AppRoute from "./components/Routers.js";
import { useState } from "react";

function App() {
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);
  return (
    <div className="App">
      {isUserAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
}

export default App;
