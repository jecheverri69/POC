import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import { Home, Favorite, ExitToApp } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../Favorites/favoriteContext";
import { AuthContext } from "../Auth/AuthContext";

const Navbar = () => {
  const { favorites } = useFavorites();
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PokeApp
        </Typography>
        <Button color={"inherit"} component={Link} to="/home">
          <Home />
          Home
        </Button>
        <Button color={"inherit"} component={Link} to="/favorites">
          <Favorite />
          Favorites
          <Badge
            badgeContent={favorites.length}
            sx={{ margin: "0 10%" }}
            color="error"
          ></Badge>
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          <ExitToApp />
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
