import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";
import {
  FavoritesPokemons,
  PokemonsResponse,
  SimplePokemon,
} from "@/app/pokemons";
import { notFound } from "next/navigation";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
  title: "Favoritos",
  description: "Listado de Favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons favoritos <small className="text-blue-500">Global State</small>
      </span>

      {/* <PokemonGrid pokemons={[]} /> */}
      <FavoritesPokemons />
    </div>
  );
}
