import * as S from "./styles";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { arrowLeft, arrowRight, plus } from "../../assets";

import { TransparentButton } from "../UI";

const MyCarousel = ({ carouselBackgrounds, setClickedIndex }) => {
  return (
    <S.OuterContainer>
      <Carousel
        onChange={(index) => setClickedIndex(index)}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={50}
        autoPlay
        interval={3000}
        infiniteLoop
        onClickItem={(item) => setClickedIndex(item)}
        transitionTime={1000}
        renderArrowPrev={(clickHandler) => {
          return (
            <S.CustomButton onClick={clickHandler} position={"100px"}>
              <img className="arrow" src={arrowLeft} alt="" />
            </S.CustomButton>
          );
        }}
        renderArrowNext={(clickHandler) => {
          return (
            <S.CustomButton onClick={clickHandler} position={"200px"}>
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
  return (
    <S.CarouselItem
      bg={item.props.children[0].props.src}
      height={options.isSelected ? "532px" : "432px"}
      margin={options.isSelected ? "0" : "100px"}
    >
      {item.props.children[1]}
      <TransparentButton width={"56px"} height={"56px"}>
        <img src={plus} alt="" />
      </TransparentButton>
    </S.CarouselItem>
  );
};
