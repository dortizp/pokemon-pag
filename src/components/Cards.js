import Card from "./Card";
import styled from "@emotion/styled";

const Grid = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . .";
`;

const Cards = ({ data }) => {
  return (
    <Grid>
      {data.map((e) => (
        <Card key={e.name} name={e.name} />
      ))}
    </Grid>
  );
};

export default Cards;
