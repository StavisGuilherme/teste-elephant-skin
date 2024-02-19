import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 780px;
  height: 632px;
`;

export const CarouselItem = styled.div`
  width: 362px;
  box-shadow: 0 4px 4px 0 #00000048;
  border-radius: 19px;
  height: ${(props) => props.height};
  margin-top: ${(props) => props.margin};
  padding: 16px;

  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 300%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;

  .customLegend {
    color: #fff;
    font-family: AauxProBold;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    .img {
      width: 24px;
    }
  }
`;

export const CustomButton = styled.button`
  height: 56px;
  width: 56px;
  border-radius: 1000px;
  border: none;
  box-shadow: inset 1px 1px 5px 1px #ffffff32;
  background: none;
  backdrop-filter: blur(2px);

  position: absolute;
  bottom: 0px;
  left: ${(props) => props.position};

  .arrow {
    width: 28px;
  }
`;
