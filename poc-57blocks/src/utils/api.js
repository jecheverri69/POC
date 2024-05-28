import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const fetchPokemons = async (page = 1, limit = 20) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchPokemonDetail = async (name) => {
  const response = await axios.get(`${API_URL}/pokemon/${name}`);
  return response.data;
};
