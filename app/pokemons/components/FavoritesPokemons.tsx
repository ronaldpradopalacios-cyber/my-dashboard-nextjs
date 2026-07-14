"use client";

import React, { useState } from "react";
import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/app/store";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesPokemons = () => {
  const favoritesPokemons = useAppSelector((state) =>
    Object.values(state.pokemons),
  );
  const [pokemons, setPokemons] = useState(favoritesPokemons);

  return (
    <>
      {pokemons.length > 0 ? (
        <PokemonGrid pokemons={pokemons} />
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
