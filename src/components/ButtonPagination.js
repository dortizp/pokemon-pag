import styled from "@emotion/styled";

const ButtonPagination = ({action}) => {
  return (
    <div>
      <button onClick={action}>Prev</button>
    </div>
  );
};

export default ButtonPagination;
