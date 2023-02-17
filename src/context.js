// React
import { useState, useContext, createContext } from "react";
// Cocktail DB URL
const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCocktails = async (url = baseUrl, params = "") => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    try {
      fetch(`${url}${params}`)
        .then((response) => response.json())
        .then((data) => setCocktails(data.drinks))
        .then(setLoading(true));
    } catch (error) {
      console.log(error);
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
