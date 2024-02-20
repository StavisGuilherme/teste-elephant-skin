import { logoSVG, arrowRight } from "../../assets";
import { TransparentButton } from "../UI";

import * as S from "./styles";

const LandingLogo = ({ setClicked }) => {
  return (
    <S.OuterContainer>
      <img src={logoSVG} className="logo" />

      <S.TextContainer>
        <span>START EXPERIENCE</span>

        <TransparentButton onClick={() => setClicked(true)}>
          <img src={arrowRight} className="img" />
        </TransparentButton>
      </S.TextContainer>
    </S.OuterContainer>
  );
};

export default LandingLogo;
