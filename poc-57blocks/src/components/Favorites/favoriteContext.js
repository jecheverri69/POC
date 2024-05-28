import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = Object.keys(localStorage).filter(
      (key) =>
        key !== "isLoggedIn" &&
        key !== "undefined" &&
        localStorage.getItem(key) === "true"
    );
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (name) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, name];
      localStorage.setItem(name, "true");
      return newFavorites;
    });
  };

  const removeFavorite = (name) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((item) => item !== name);
      localStorage.removeItem(name);
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
