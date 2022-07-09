import React, { useEffect, useState } from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";

const CocktailsList = () => {
  const { fetchCocktails, cocktails, url, textValue, loading } =
    useGlobalContext();

  useEffect(() => {
    fetchCocktails(url, textValue);
  }, []);

  if (loading && cocktails) {
    return (
      <>
        <section className="loading">
          <p id="loading-title">Loading</p>
          <div className="loading-hr-container">
            <hr className="loading-hr first" />
            <hr className="loading-hr second" />
            <hr className="loading-hr third" />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <h1 id="cocktails-title">Cocktails</h1>
      {cocktails ? (
        <section className="cocktails-list">
          {cocktails.map((cocktail, index) => {
            let ingredientsKeys = Object.keys(cocktail).filter((key) => {
              return key.startsWith("strIngredient");
            });

            let ingredientsArray = [];
            for (let i = 1; i < ingredientsKeys.length; i++) {
              ingredientsArray.push(cocktail[ingredientsKeys[i - 1]]);
            }

            const ingredients = ingredientsArray.filter((ingredient) => {
              return ingredient !== null;
            });

            console.log(cocktail, "COK");
            return (
              <Cocktail
                {...cocktail}
                key={index}
                ingredients={ingredients}
              ></Cocktail>
            );
          })}
        </section>
      ) : (
        <p id="undefined-msg">No Cocktails Matched Your Search Criteria</p>
      )}
    </>
  );
};

export default CocktailsList;
