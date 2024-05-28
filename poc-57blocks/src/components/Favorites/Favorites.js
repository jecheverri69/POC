import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import { Delete } from "@mui/icons-material";
import { useFavorites } from './favoriteContext';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  const handleRemoveFavorite = (name) => {
    removeFavorite(name);
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length ? (
        <Grid container spacing={2}>
          {favorites.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5">{item}</Typography>
                  <IconButton onClick={() => handleRemoveFavorite(item)} sx={{ marginLeft: 'auto', color: 'red' }}>
                    <Delete />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>No favorites added</p>
      )}
    </div>
  );
};

export default Favorites;
