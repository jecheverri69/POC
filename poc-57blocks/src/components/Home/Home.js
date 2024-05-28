import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Button,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ListItem from "./ListItem";
import { usePokemonList } from "../../hooks/usePokemonData";
import { useFavorites } from "../Favorites/favoriteContext";
import Autocomplete from "@mui/material/Autocomplete";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "8px",
  },
  pagination: {
    marginTop: "2em",
    textAlign: "center",
  },
  searchInput: {
    marginBottom: "1em",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const { data: pokemons, isLoading, isError } = usePokemonList(page);
  const { favorites } = useFavorites();
  const [searchValue, setSearchValue] = useState("");

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleItemClick = (e, pokemon) => {
    e.stopPropagation();
    window.open(`/detail/${pokemon.name}`, "_blank");
  };

  if (isLoading) return <CircularProgress />;
  if (isError) return <div>Error fetching data</div>;

  return (
    <Container className={classes.container}>
      <Typography variant="h2" align="center" gutterBottom>
        Pokemons
      </Typography>
      <Autocomplete
        className={classes.searchInput}
        options={pokemons.results.map((pokemon) => pokemon.name)}
        value={searchValue}
        onChange={(event, newValue) => setSearchValue(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Pokemon"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Grid container spacing={2}>
        {pokemons.results
          .filter((pokemon) =>
            searchValue
              ? pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
              : true
          )
          .map((pokemon) => (
            <Grid item key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
              <ListItem
                pokemon={pokemon}
                onItemClick={(e) => handleItemClick(e, pokemon)}
                isFavorite={favorites.some((item) => item === pokemon.name)}
              />
            </Grid>
          ))}
      </Grid>
      <div className={classes.pagination}>
        <Button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
    </Container>
  );
};

export default Home;
