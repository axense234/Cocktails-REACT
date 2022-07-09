import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({
  idDrink: id,
  strDrink: cocktailName,
  strGlass: glassType,
  strAlcoholic: alcoholic,
  strDrinkThumb: img,
  strInstructions: instructions,
  strCategory,
  ingredients,
}) => {
  return (
    <article className="cocktail-container">
      <div className="img-container">
        <img src={img} alt={cocktailName} />
      </div>
      <div className="info-container">
        <p id="cocktail-name">{cocktailName}</p>
        <p id="glass-type">{glassType}</p>
        <p id="alcoholic">{alcoholic}</p>
        <Link
          to={`cocktail/${id}`}
          state={{
            cocktailName,
            strCategory,
            alcoholic,
            glassType,
            instructions,
            ingredients,
            img,
          }}
        >
          <button id="details-btn">DETAILS</button>
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
