import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { SideBar, Header, LandingFooter, MyCarousel } from "../../components";
import { TransparentButton, LargeButton } from "../../components/UI";

import { landingBackground, arrowRight } from "../../assets";

import { carouselBackgrounds } from "./helpers";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  return (
    <S.OuterContainer
      clicked={clicked}
      bg={clicked ? carouselBackgrounds[clickedIndex].bg : landingBackground}
    >
      <>
        <SideBar />

        <S.InnerContainer>
          <Header />

          {clicked ? (
            <S.CarouselContainer>
              <div className="text">
                <h1>360° BUILDING</h1>
                <p>View the building and availability</p>
                <LargeButton width={"206px"} height={"48px"}>
                  LET ME IN <FontAwesomeIcon icon={faArrowRight} />
                </LargeButton>
              </div>

              <MyCarousel
                carouselBackgrounds={carouselBackgrounds}
                setClickedIndex={setClickedIndex}
              />
            </S.CarouselContainer>
          ) : (
            <S.StartText>
              <h1>INNOVATION IN YOUR HANDS</h1>
              <h2>
                Explore, Interact and Transform the Real Estate Market with Our
                Smart Interactive Table.
              </h2>

              <div className="startButton">
                <span className="text">START EXPERIENCE</span>
                <TransparentButton onClick={() => setClicked(true)}>
                  <img src={arrowRight} className="img" />
                </TransparentButton>
              </div>
            </S.StartText>
          )}

          <LandingFooter />
        </S.InnerContainer>
      </>
    </S.OuterContainer>
  );
};

export default Home;
