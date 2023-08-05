import React, { createContext, useContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphQuery/getquery";

const PokemonContext = createContext();

export function usePokemonContext() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [pokemonData, setPokemonData] = useState([]);
  const { data: { getAllPokemon = [] } = {}, loading } = useQuery(
    GET_POKEMONS,
    {
      variables: {
        offset: 0,
        take: 36,
      },
    }
  );

  useEffect(() => {
    setPokemonData(getAllPokemon);
  }, [getAllPokemon]);

  return (
    <PokemonContext.Provider value={{ pokemonData, setPokemonData, loading }}>
      {children}
    </PokemonContext.Provider>
  );
}
