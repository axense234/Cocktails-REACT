// React
import React, { StrictMode } from "react";
// Root
import { createRoot } from "react-dom/client";
// Pages
import Cocktails from "./pages/Home";
import About from "./pages/About";
import CocktailInfo from "./pages/CocktailInfo";
// Context
import { AppProvider } from "./context";
// CSS
import "./styles.css";
// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import SharedLayout from "./components/SharedLayout";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Cocktails />} />
            <Route path='about' element={<About />} />
            <Route path='cocktail/:id' element={<CocktailInfo />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
