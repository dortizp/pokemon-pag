import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import getPokemonData from "../services/getPokemonData";

const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid grey;
  border-radius: 5px;
`;
const Card = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    getPokemonData(url, setPokemonData);
    console.log(url);
  }, [url]);

  return (
    <StyledDiv>
      <h2>{name}</h2>
      <p>Weight: {pokemonData.weight ? pokemonData.weight : ""}</p>
      <p>
        Picture: {pokemonData.sprites ? pokemonData.sprites.front_default : ""}
      </p>
      <p>
        Types:{" "}
        {pokemonData.types
          ? pokemonData.types.map((type) => <p>{type.type.name}</p>)
          : ""}
      </p>
    </StyledDiv>
  );
};

export default Card;
