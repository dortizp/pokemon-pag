import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import getPokemonData from "../services/getPokemonData";

const typeColors = {
  electric: "#FFEA70",
  normal: "#B09398",
  fire: "#FF675C",
  water: "#0596C7",
  ice: "#AFEAFD",
  rock: "#999799",
  flying: "#7AE7C7",
  grass: "#4A9681",
  psychic: "#FFC6D9",
  ghost: "#561D25",
  bug: "#A2FAA3",
  poison: "#795663",
  ground: "#D2B074",
  dragon: "#DA627D",
  steel: "#1D8A99",
  fighting: "#2F2F2F",
  default: "#2A1A1F",
};

const StyledDiv = styled.div`
  width: 200px;
  height: 350px;
  -webkit-box-shadow: 2px 8px 10px 5px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 2px 8px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 2px 8px 10px 5px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  padding: 5px;
  .avatarSection {
    border-radius: 50%;
    margin: 20px;
    -webkit-box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.15);
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 10px;
  }
  .avatar {
    width: 150px;
  }
  .textName {
    font-size: 25px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: -5px;
  }
  .textStat {
    font-size: 20px;
    font-weight: 400px;
    margin-bottom: 10px;
  }
  .textType {
    font-size: 15px;
    font-weight: 400px;
    text-transform: capitalize;
    margin-bottom: 5px;
  }
`;
const Card = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    getPokemonData(url, setPokemonData, typeColors);
  }, [url]);

  return (
    <StyledDiv>
      <div
        className="avatarSection"
        style={{
          background: `linear-gradient(
            ${
              typeof pokemonData.color1 !== "undefined"
                ? pokemonData.color1
                : "#fff"
            },#fff)`,
        }}
      >
        {typeof pokemonData.img !== "undefined" ? (
          <img src={pokemonData.img} alt="pokemon_picture" className="avatar" />
        ) : (
          ""
        )}
      </div>
      <div className="textName">{name}</div>
      {typeof pokemonData.type !== "undefined" ? (
        <div>{pokemonData.type}</div>
      ) : (
        ""
      )}
      <div className="statsList">
        stats
        {/* {pokemonData.} */}
      </div>
    </StyledDiv>
  );
};

export default Card;
