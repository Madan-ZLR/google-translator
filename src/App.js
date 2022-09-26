import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rapidapi from "./components/rapidt/Rapidapi";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/translaor" element={<Rapidapi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
