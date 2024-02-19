import styled from "styled-components";

const TransparentButton = ({ children, width, height, className, onClick }) => {
  return (
    <Button
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default TransparentButton;

const Button = styled.button`
  width: ${({ width }) => width || "56px"};
  height: ${({ height }) => height || "56px"};
  border-radius: 1000px;
  color: #fff;
  box-shadow: inset 1px 1px 5px 1px #ffffff32;
  border: none;
  backdrop-filter: blur(2px);
  outline: none;
  background: transparent;
`;
