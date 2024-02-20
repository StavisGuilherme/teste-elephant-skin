import * as S from "./styles";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { arrowLeft, arrowRight, plus } from "../../assets";

import { TransparentButton } from "../UI";

const MyCarousel = ({
  carouselBackgrounds,
  setClickedIndex,
  setCarouselState,
}) => {
  const isMobile = window.innerWidth <= 430;
  return (
    <S.OuterContainer>
      <Carousel
        onChange={(index) => {
          setCarouselState(index);
          setClickedIndex(index);
        }}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={isMobile ? 50 : 70}
        autoPlay
        interval={3000}
        infiniteLoop
        onClickItem={(item) => {
          setCarouselState(item);
          setClickedIndex(item);
        }}
        transitionTime={1000}
        renderArrowPrev={(clickHandler) => {
          return (
            <S.CustomButton
              onClick={clickHandler}
              position={isMobile ? "290px" : "180px"}
            >
              <img className="arrow" src={arrowLeft} alt="" />
            </S.CustomButton>
          );
        }}
        renderArrowNext={(clickHandler) => {
          return (
            <S.CustomButton
              onClick={clickHandler}
              position={isMobile ? "430px" : "340px"}
            >
              <img className="arrow" src={arrowRight} alt="" />
            </S.CustomButton>
          );
        }}
        renderItem={renderItem}
      >
        {carouselBackgrounds.map((bg, index) => {
          return (
            <div key={index}>
              <img src={bg.bg} />
              {bg.legend}
            </div>
          );
        })}
      </Carousel>
    </S.OuterContainer>
  );
};

export default MyCarousel;

const renderItem = (item, options) => {
  const windowWidth = window.innerWidth;

  const getHeight = (winWidth, isSelected) => {
    let resReturn = "";

    if (winWidth <= 430) {
      resReturn = "mobile";
    } else if (winWidth < 1367) {
      resReturn = "wide";
    } else {
      resReturn = "fullHD";
    }

    const values = {
      fullHD: {
        true: "532px",
        false: "432px",
      },
      wide: {
        true: "430px",
        false: "330px",
      },
      mobile: {
        true: "340px",
        false: "340px",
      },
    };

    return values[resReturn][isSelected];
  };

  return (
    <S.CarouselItem
      bg={item.props.children[0].props.src}
      height={getHeight(windowWidth, options.isSelected)}
      margin={options.isSelected ? "0" : "100px"}
    >
      {item.props.children[1]}
      <TransparentButton>
        <img src={plus} />
      </TransparentButton>
    </S.CarouselItem>
  );
};
