import styled from "styled-components";
import { landingBackground } from "../../assets";

export const OuterContainer = styled.div`
  height: 100vh;

  background-color: #000000;
  background-image: url(${landingBackground});
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 430px) {
    background-size: 290%;
    background-position: -100px;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 430px) {
    width: 100%;
  }
`;
