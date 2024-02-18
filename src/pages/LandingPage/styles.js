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
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
