// React
import React from "react";
// React Router
import { Outlet } from "react-router-dom";
// Components
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <>
        <Outlet />
      </>
    </>
  );
};

export default SharedLayout;
