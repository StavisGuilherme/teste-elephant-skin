import styled from "styled-components";

export const OuterContainer = styled.div`
  height: 100vh;

  background-color: #000000;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.bg});

  @media (max-width: 430px) {
    justify-content: space-between;
    position: relative;
  }

  .showButton {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 99;

    @media (min-width: 431px) {
      display: none;
    }
  }
`;

export const InnerContainer = styled.div`
  height: 100vh;
  width: 1270px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 430px) {
    width: 100%;
  }

  span {
    align-self: flex-end;
    margin-right: 32px;

    @media (max-height: 768px) {
      margin-bottom: 16px;
    }

    @media (max-width: 430px) {
      align-self: center;
      margin-left: 40px;
    }
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  @media (max-width: 430px) {
    flex-flow: column nowrap;
    height: 600px;
  }

  .text {
    margin-left: 76px;

    @media (max-width: 430px) {
      margin: 0 0 16px 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }

    h1 {
      font-family: "Open Sans";
      font-size: 48px;
      font-weight: 400;
      line-height: 65px;
      letter-spacing: 0.5px;
      text-align: left;
      color: #fff;

      @media (max-width: 430px) {
        font-size: 38px;
        text-align: center;
      }
    }

    p {
      font-family: "Open Sans";
      font-size: 24px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0px;
      text-align: left;
      color: #fff;

      @media (max-width: 430px) {
        font-size: 20px;
        text-align: center;
        margin: 0 0 8px 0;
      }
    }
  }

  .carousel,
  .carousel-slider {
    height: 632px;

    @media (max-height: 768px) {
      height: 100%;
    }

    @media (max-width: 430px) {
      height: 100%;
    }
  }
`;
