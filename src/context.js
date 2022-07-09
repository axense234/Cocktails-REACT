import React, { useState, useRef, useContext, useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCocktails = async (url, params) => {
    try {
      fetch(`${url}${params}`)
        .then((response) => response.json())
        .then((data) => setCocktails(data.drinks))
        .then(setLoading(true));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textValue) {
      setAlert(true);
    }
  };

  const handleFilter = (value, e) => {
    setTextValue(value);
    fetchCocktails(url, textValue);
  };

  useEffect(() => {
    if (cocktails) {
      let timeout = setTimeout(() => {
        setLoading(false);
      }, 300);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [cocktails]);

  return (
    <AppContext.Provider
      value={{
        fetchCocktails,
        cocktails,
        alert,
        setAlert,
        setTextValue,
        textValue,
        handleSubmit,
        handleFilter,
        url,
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
