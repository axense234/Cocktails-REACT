import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const { alert, setAlert, textValue, handleSubmit, handleFilter } =
    useGlobalContext();

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  useEffect(() => {
    handleFilter(textValue);
  }, [textValue]);

  return (
    <form action="#" id="form-container" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="search-bar">Search Your Favorite Cocktail</label>
      <input
        type="text"
        id="search-bar"
        style={{ borderColor: alert ? "red" : "white" }}
        value={textValue}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </form>
  );
};

export default Form;
