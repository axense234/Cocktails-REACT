import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cocktails from "./pages/Home";
import About from "./pages/About";
import CocktailInfo from "./pages/CocktailInfo";
import { AppProvider } from "./context";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Cocktails></Cocktails>} />
          <Route path="about" element={<About></About>} />
          <Route path="cocktail/:id" element={<CocktailInfo></CocktailInfo>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
