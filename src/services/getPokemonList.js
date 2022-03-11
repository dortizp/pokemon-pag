const getPokemonList = async (url, setData) => {
  const response = await fetch(url);
  const data = await response.json();

  setData(data);
};

export default getPokemonList;
