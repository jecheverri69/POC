import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useFavorites } from "../Favorites/favoriteContext";

const ListItem = ({ pokemon, onItemClick, isFavorite }) => {
  const { addFavorite, removeFavorite } = useFavorites();

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(pokemon.name);
    } else {
      addFavorite(pokemon.name);
    }
  };

  return (
    <Card onClick={onItemClick} sx={{ cursor: "pointer" }}>
      <CardContent>
        <Typography variant="h5" align="center">
          {pokemon.name}
        </Typography>
        <IconButton
          onClick={handleFavoriteToggle}
          sx={{
            display: "block",
            margin: "0 auto",
            color: isFavorite ? "red" : "inherit",
          }}
        >
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ListItem;
