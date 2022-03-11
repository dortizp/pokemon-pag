import "./App.css";
import ButtonPagination from "./components/ButtonPagination";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import getPokemonData from "./services/getPokemonData";
import getPokemonList from "./services/getPokemonList";

function App() {
  const [pokemonList, setPokemonList] = useState({});
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  useEffect(() => {
    url
      ? getPokemonList(url, setPokemonList)
      : getPokemonList("https://pokeapi.co/api/v2/pokemon/", setPokemonList);
  }, [url]);

  const prev = () => {
    setUrl(pokemonList.previous);
  };
  const next = () => {
    setUrl(pokemonList.next);
  };

  return (
    <div className="App">
      Hola Pokemon
      {pokemonList ? console.log(pokemonList) : ""}
      <ButtonPagination action={prev} title="< Prev" />
      <ButtonPagination action={next} title="Next >" />
      {pokemonList.results ? <Cards data={pokemonList.results} /> : <div />}
    </div>
  );
}

export default App;
