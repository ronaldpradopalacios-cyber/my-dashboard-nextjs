import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/app/pokemons";

/* 
    // LISTA DE POKEMONS FAVORITOS (ESTRUCTURA)
    {
        '1': { id: 1, name: 'Bulvasaur'},
        '2': { id: 2, name: 'Charmander'},
        '3': { id: 3, name: 'Pikachu'},
    }
*/

interface PokemonsFavoriteStates {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsFavoriteStates = {
  // "1": {
  //   id: "1",
  //   name: "bulbasaur",
  // },
  // "3": {
  //   id: "3",
  //   name: "venusaur",
  // },
  // "5": {
  //   id: "5",
  //   name: "charmeleon",
  // },
};

const favoritePokemonsSlice = createSlice({
  name: "favoritePokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      // Si existe ese pokemon como favorito, lo elimino (hago NO FAVORITO)
      if (!!state[id]) {
        delete state[id];
        return;
      }

      // Si no existe ese pokemon como favorito, lo agrego como FAVORITO
      state[id] = pokemon;
    },
  },
});

export const { toggleFavorite } = favoritePokemonsSlice.actions;

export default favoritePokemonsSlice.reducer;
