import "./App.css";
import ButtonPagination from "./components/ButtonPagination";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setPokemonList(data.results);
    };

    getPokemon();
  }, []);

  return (
    <div className="App">
      Hola Pokemon
      {pokemonList ? console.log(pokemonList) : ""}
      <ButtonPagination />
      <Cards data={pokemonList} />
    </div>
  );
}

export default App;
