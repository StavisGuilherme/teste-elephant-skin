import styled from "styled-components";

export const OuterContainer = styled.div`
  @keyframes appearFromRight {
    from {
      margin-left: 150vw;
    }
    to {
      margin-left: 0;
    }
  }

  @keyframes mobile {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  margin-left: 150vw;
  display: flex;
  flex-flow: column nowrap;
  max-width: 484px;
  animation: appearFromRight 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  overflow: hidden;

  @media (max-width: 430px) {
    width: 100%;
    opacity: 0;
    margin-left: 0;
    animation: mobile 3s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;

    .logo {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  margin-top: 80px;

  span {
    margin-bottom: 32px;
    font-family: "Open Sans";
    font-size: 24px;
    line-height: 32.68px;
    color: #f6f6f6;
    letter-spacing: 4px;
  }
`;

export const Button = styled.button`
  background: #00000020;
  box-shadow: inset 1px 1px 5px 1px #ffffff32;
  box-shadow: 0 4 4 0 #00000025;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  color: white;
  border: none;

  :hover {
    cursor: pointer;
  }

  .img {
    width: 28px;
  }
`;
