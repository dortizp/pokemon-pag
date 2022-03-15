const getPokemonData = async (url, setData, colors) => {
  const response = await fetch(url);
  const data = await response.json();

  const pokemonData = {};
  pokemonData["img"] = data.sprites.front_default;
  pokemonData["type"] = data.types[0].type.name;
  pokemonData["color1"] = colors[data.types[0].type.name];
  pokemonData["color2"] = data.types[1] ? data.types[1].type.name : "";
  setData(pokemonData);
};

export default getPokemonData;
