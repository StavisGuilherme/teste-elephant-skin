import { TransparentButton } from "../../components/UI";
import { arrowRight } from "../../assets";
import * as S from "./styles";

const HomeText = ({ setClicked }) => {
  return (
    <S.OuterContainer>
      <h1>INNOVATION IN YOUR HANDS</h1>
      <h2>
        Explore, Interact and Transform the Real Estate Market with Our Smart
        Interactive Table.
      </h2>

      <div className="startButton">
        <span className="text">START EXPERIENCE</span>
        <TransparentButton onClick={() => setClicked(true)}>
          <img src={arrowRight} className="img" />
        </TransparentButton>
      </div>
    </S.OuterContainer>
  );
};

export default HomeText;
