import React from "react";
// Components
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import CocktailsList from "../components/CocktailsList";
// React Router

const Cocktails = () => {
  return (
    <>
      <Navbar />
      <Form />
      <CocktailsList />
    </>
  );
};

export default Cocktails;
