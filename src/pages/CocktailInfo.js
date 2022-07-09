import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const CocktailInfo = () => {
  const [ingredientsString, setIngredientsString] = useState("");
  const location = useLocation();
  const {
    cocktailName,
    img,
    glassType,
    alcoholic,
    instructions,
    ingredients,
    strCategory,
  } = location.state;

  console.log(ingredients);

  useEffect(() => {
    setIngredientsString(ingredients.join(", "));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <main className="cocktail-info">
        <div className="ci-title-container">
          <Link to={"/"}>
            <button className="ci-btn">BACK HOME</button>
          </Link>
          <h3>{cocktailName}</h3>
        </div>
        <div className="ci-info-container">
          <img src={img} alt={cocktailName} />
          <p>
            <span>Name: </span>
            {cocktailName}
          </p>
          <p>
            <span>Category: </span>
            {strCategory}
          </p>
          <p>
            <span>Info: </span>
            {alcoholic}
          </p>
          <p>
            <span>Glass: </span>
            {glassType}
          </p>
          <p>
            <span>Instructions: </span>
            {instructions}
          </p>
          <p>
            <span>Ingredients: </span>
            {ingredientsString}
          </p>
        </div>
      </main>
    </>
  );
};

export default CocktailInfo;
