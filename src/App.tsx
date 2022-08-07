import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import MedicalLink from "./Pages/MedicalLink";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app_body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/medical_link/login/callback"
              element={<MedicalLink />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
