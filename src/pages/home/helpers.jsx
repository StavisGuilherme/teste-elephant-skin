import {
  background360,
  amenitiesBackgrond,
  galleryBackground,
  surroundingsBackground,
  tourVirtualBackground,
  watchBackground,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
} from "../../assets";

export const carouselText = [
  {
    title: "360° BUILDING",
    paragraph: "View the building and availability",
  },
  {
    title: "TOUR VIRTUAL",
    paragraph: "Take a tour of our building",
  },
  {
    title: "AMENITIES",
    paragraph: "See each floor and it's amenities",
  },
  {
    title: "SURROUNDINGS",
    paragraph: "See what's around",
  },
  {
    title: "GALLERY",
    paragraph: "View images in high resolution",
  },
  {
    title: "WATCH",
    paragraph: "Complete videos of the project",
  },
];

export const carouselBackgrounds = [
  {
    bg: background360,
    legend: (
      <p className="customLegend">
        <img src={first} className="img" /> BUILDING
      </p>
    ),
  },
  {
    bg: tourVirtualBackground,
    legend: (
      <p className="customLegend">
        <img src={second} className="img" /> TOUR VIRTUAL
      </p>
    ),
  },
  {
    bg: amenitiesBackgrond,
    legend: (
      <p className="customLegend">
        <img src={third} className="img" /> AMENITIES
      </p>
    ),
  },
  {
    bg: surroundingsBackground,
    legend: (
      <p className="customLegend">
        <img src={fourth} className="img" /> SURROUNDINGS
      </p>
    ),
  },
  {
    bg: galleryBackground,
    legend: (
      <p className="customLegend">
        <img src={fifth} className="img" /> GALLERY
      </p>
    ),
  },
  {
    bg: watchBackground,
    legend: (
      <p className="customLegend">
        <img src={sixth} className="img" /> WATCH
      </p>
    ),
  },
];
