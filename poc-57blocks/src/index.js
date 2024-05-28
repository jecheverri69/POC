import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./components/Auth/AuthContext";
import App from "./App";
import { FavoritesProvider } from "./components/Favorites/favoriteContext";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <FavoritesProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </FavoritesProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
