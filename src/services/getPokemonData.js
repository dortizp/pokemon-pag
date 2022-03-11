const getPokemonData = async (url, setData) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default getPokemonData;
