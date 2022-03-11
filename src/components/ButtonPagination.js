import styled from "@emotion/styled";

const ButtonPagination = ({ action, title }) => {
  return (
    <div>
      <button onClick={action}>{title}</button>
    </div>
  );
};

export default ButtonPagination;
