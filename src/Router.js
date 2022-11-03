import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
