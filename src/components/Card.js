import styled from "@emotion/styled";
const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid grey;
  border-radius: 5px;
`;
const Card = ({ name }) => {
  return <StyledDiv>{name}</StyledDiv>;
};

export default Card;
