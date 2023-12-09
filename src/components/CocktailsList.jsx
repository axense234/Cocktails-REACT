// React
import React, { useEffect } from "react";
// Components
import Cocktail from "./Cocktail";
// Context
import { useGlobalContext } from "../context";

const CocktailsList = () => {
  const { fetchCocktails, cocktails, loading } = useGlobalContext();

  useEffect(() => {
      fetchCocktails();
  }, []);

  if (loading) {
    return (
      <>
        <section className='loading'>
          <p id='loading-title'>Loading</p>
          <div className='loading-hr-container'>
            <hr className='loading-hr first' />
            <hr className='loading-hr second' />
            <hr className='loading-hr third' />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <h1 id='cocktails-title'>Cocktails</h1>
      {cocktails?.length >= 1 ? (
        <section className='cocktails-list'>
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
        <p id='undefined-msg'>No Cocktails Matched Your Search Criteria</p>
      )}
    </>
  );
};

export default CocktailsList;
