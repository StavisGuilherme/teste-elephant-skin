import styled from "styled-components";
import { landingBackground } from "../../assets";

export const OuterContainer = styled.div`
  height: 100vh;

  background-color: #000000;
  background-image: url(${landingBackground});
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  height: 100vh;
  width: 1270px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  span {
    align-self: flex-end;
    margin-right: 32px;
  }
`;

export const StartText = styled.div`
  @keyframes animate {
    from {
      margin-left: 130vw;
    }
    to {
      margin-left: 0;
    }
  }

  margin-left: 130vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 597px;

  animation: animate 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  .startButton {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    margin-top: 204px;

    .text {
      font-family: "Open Sans";
      font-size: 24px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0px;
      text-align: center;
      color: #fff;
      margin: 0;
    }

    .start {
      border-radius: 1000px;
      width: 56px;
      height: 56px;
      color: #fff;
      box-shadow: inset 1px 1px 5px 1px #ffffff32;
      box-shadow: 0 4px 4px 0 #00000025;
      background: #00000020;
      margin-top: 24px;
    }
  }

  h1 {
    font-family: "Open Sans";
    font-size: 48px;
    font-weight: 400;
    line-height: 65px;
    letter-spacing: 0.03em;
    text-align: center;
    color: #fff;
  }

  h2 {
    font-family: "Open Sans";
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #fff;
    margin-top: 32px;
  }
`;
