import styled from "styled-components";

export const OuterContainer = styled.div`
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

  @media (max-width: 430px) {
    width: 100%;
    margin: 0;

    @keyframes mobile {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: mobile 2s;
  }

  .startButton {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    margin-top: 204px;

    @media (max-height: 720px) {
      margin-top: 78px;
    }

    @media (max-width: 430px) {
      margin-top: 50px;
    }

    .text {
      font-family: "Open Sans";
      font-size: 24px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0px;
      text-align: center;
      color: #fff;
      margin: 0;
      margin-bottom: 24px;
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

    @media (max-height: 720px) {
      font-size: 32px;
    }
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

    @media (max-height: 720px) {
      font-size: 18px;
      margin-top: 26px;
    }
  }
`;
