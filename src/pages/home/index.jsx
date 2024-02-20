import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import {
  SideBar,
  Header,
  LandingFooter,
  MyCarousel,
  HomeText,
} from "../../components";
import { LargeButton, TransparentButton } from "../../components/UI";

import { landingBackground } from "../../assets";

import { carouselBackgrounds, carouselText } from "./helpers";

import { CarouselContext } from "../../contexts";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [carouselState, setCarouselState] = useState(0);

  return (
    <S.OuterContainer
      clicked={clicked}
      bg={clicked ? carouselBackgrounds[clickedIndex].bg : landingBackground}
    >
      <div className="showButton">
        <TransparentButton onClick={() => setShowSideMenu(!showSideMenu)}>
          {showSideMenu ? (
            <FontAwesomeIcon icon={faArrowLeft} />
          ) : (
            <FontAwesomeIcon icon={faArrowRight} />
          )}
        </TransparentButton>
      </div>
      <SideBar showSideMenu={showSideMenu} />

      <S.InnerContainer>
        <Header />

        {clicked ? (
          <CarouselContext.Provider value={carouselState}>
            <S.CarouselContainer>
              <div className="text">
                <h1>{carouselText[carouselState].title}</h1>
                <p>{carouselText[carouselState].paragraph}</p>
                <LargeButton width={"206px"} height={"48px"}>
                  LET ME IN <FontAwesomeIcon icon={faArrowRight} />
                </LargeButton>
              </div>

              <MyCarousel
                carouselBackgrounds={carouselBackgrounds}
                setClickedIndex={setClickedIndex}
                setCarouselState={setCarouselState}
              />
            </S.CarouselContainer>
          </CarouselContext.Provider>
        ) : (
          <HomeText setClicked={setClicked} />
        )}

        <LandingFooter />
      </S.InnerContainer>
    </S.OuterContainer>
  );
};

export default Home;
