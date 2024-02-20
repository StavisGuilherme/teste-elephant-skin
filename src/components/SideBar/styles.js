import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 96px;
  height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  border-right: 2px solid #ffffff32;

  @media (max-width: 430px) {
    position: absolute;
    top: 0px;
    display: ${({ display }) => display};
    z-index: 90;
    width: 70px;
    height: 70vh;
    justify-content: flex-start;
    backdrop-filter: blur(2px);
    border-radius: 0 0 500px 500px;
    top: 80px;

    @keyframes fadein {
      from {
        left: -100px;
      }
      to {
        left: 0;
      }
    }

    animation: fadein 1s;
    animation-fill-mode: forwards;
  }

  .buttons {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 32px;

    @media (max-width: 430px) {
      margin-top: 20px;
    }

    .unit {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;

      .button {
        :hover {
          cursor: pointer;
        }
      }

      .line {
        height: 37px;

        @media (max-height: 768px) {
          height: 20px;
        }
      }
    }
  }

  .control {
    display: flex;
    flex-flow: column nowrap;

    @media (max-width: 430px) {
      position: absolute;
      bottom: 0;
    }

    img {
      margin-bottom: 32px;
    }
  }
`;
