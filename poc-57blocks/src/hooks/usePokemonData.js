import { useQuery } from "react-query";
import { fetchPokemons, fetchPokemonDetail } from "../utils/api";

export const usePokemonList = (page = 1, limit = 20) => {
  return useQuery(["pokemonList", page], async () => {
    return fetchPokemons(page, limit);
  });
};

export const usePokemonDetail = (name) => {
  return useQuery(["pokemon", name], () => fetchPokemonDetail(name));
};
