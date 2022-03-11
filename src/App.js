import "./App.css";
import ButtonPagination from "./components/ButtonPagination";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState({});
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  useEffect(() => {
    const getPokemon = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonList(data);
    };
    url ? getPokemon(url) : getPokemon("https://pokeapi.co/api/v2/pokemon/");
  }, [url]);

  const prev = () => {
    setUrl(pokemonList.previous)
  }
  const next = () => {
    setUrl(pokemonList.next)
  }

  return (
    <div className="App">
      Hola Pokemon
      {pokemonList ? console.log(pokemonList) : ""}
      <ButtonPagination action={prev}/>
      <ButtonPagination action={next}/>
      {(pokemonList.results) ? <Cards data={pokemonList.results} /> : <div />} 
    </div>
  );
}

export default App;
