import styled from "styled-components";

const LargeButton = ({ children, width, height, onClick }) => {
  return (
    <Button width={width} height={height} onClick={onClick}>
      {children}
    </Button>
  );
};

export default LargeButton;

const Button = styled.button`
  width: ${({ width }) => width || "56px"};
  height: ${({ height }) => height || "56px"};
  border-radius: 1000px;
  background-color: #fff;
  border: none;
  text-align: center;

  font-family: AauxProBold;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #000;
`;
