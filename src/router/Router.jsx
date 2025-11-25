import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { InputForm } from "../pages/InputForm";
import { Confirm } from "../pages/ConfirmForm";
import App from "../App";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<InputForm />} />
          <Route path="confirm" element={<Confirm/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
