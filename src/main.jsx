import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { Layout } from "./components/Layout/Layout";
import { LOGIN_PAGE, REGISTER_PAGE, HOME_PAGE } from "./constants/url";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={REGISTER_PAGE} element={<RegisterPage />} />
        <Route path={LOGIN_PAGE} element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path="*" element="404 NOT FOUND" />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
