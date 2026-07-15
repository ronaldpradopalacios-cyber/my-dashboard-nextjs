import { Action, MiddlewareAPI } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch<Action>) => (action: Action) => {
    next(action);
    // console.log({ state: state.getState() });
    console.log({ action });

    if (action.type === "favoritePokemons/toggleFavorite") {
      const { pokemons, counter } = state.getState() as RootState;
      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
      return;
    }
  };
};
