import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" />
          <Route path="/" />
          <Route path="*" element = "404 NOT FOUND" />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
