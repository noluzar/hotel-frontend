import React from "react";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppWrapper: React.FC = () => {
  return (
    <div className="bg-black/50">
      <div className="bg-[var(--primary-color)] font-lora md:mx-20">
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
};

export default App;
