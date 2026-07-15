import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/app/pokemons";

/* 
    // LISTA DE POKEMONS FAVORITOS (ESTRUCTURA)
    favorites: {
        '1': { id: 1, name: 'Bulvasaur'},
        '2': { id: 2, name: 'Charmander'},
        '3': { id: 3, name: 'Pikachu'},
    }
*/

interface PokemonsFavoriteStates {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsFavoriteStates => {
//   if (typeof localStorage === "undefined") return { favorites: {} };

//   const favorites = JSON.parse(
//     localStorage.getItem("favorite-pokemons") ?? "{}",
//   );

//   return favorites;
// };

const initialState: PokemonsFavoriteStates = {
  favorites: {},
  // ...getInitialState(),
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
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>,
    ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      // Si existe ese pokemon como favorito, lo elimino (hago NO FAVORITO)
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        // Si no existe ese pokemon como favorito, lo agrego como FAVORITO
        state.favorites[id] = pokemon;
      }

      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites),
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } =
  favoritePokemonsSlice.actions;

export default favoritePokemonsSlice.reducer;
