// React
import { useState, useContext, createContext } from "react";
// Cocktail DB URL
const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCocktails = async (url = baseUrl, params = "a") => {
    setLoading(true);
    try {
      fetch(`${url}${params}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.drinks?.length >= 1) {
            setCocktails(data.drinks);
            console.log(data.drinks);
          } else {
            setCocktails([]);
          }
        })
        .then(() => {
          setTimeout(() => {
            setLoading(false);
          }, 500);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFilter = (value) => {
    setTextValue(value);
    fetchCocktails(baseUrl, value);
  };

  return (
    <AppContext.Provider
      value={{
        fetchCocktails,
        cocktails,
        setTextValue,
        textValue,
        handleFilter,
        baseUrl,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
