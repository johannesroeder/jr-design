import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/globals.css";
import LandingPage from "./views/landing/LandingPage.jsx";
import PrivacyPolicy from "./views/gdpr/PrivacyPolicy.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);
