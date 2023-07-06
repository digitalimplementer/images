import React from "react";
import classNames from "classnames";

import { IImage } from "../../App.interface";

import { baseURL } from "../../services/axios";

import { CarouselProps } from "./Carousel.types";

import "./Carousel.css";

export const CarouselComponent: React.FC<CarouselProps> = ({
  images,
  activeImage,
  setActiveImage,
  isFullscreen,
}) => {
  const activeIndex = images.findIndex(
    (image: IImage) => image.id === activeImage?.id
  );

  const nextSlide = () => {
    let index = activeIndex + 1;

    if (index > images.length - 1) {
      index = 0;
    }

    setActiveImage(images[index]);
  };

  const prevSlide = () => {
    let index = activeIndex - 1;

    if (index < 0) {
      index = images.length - 1;
    }

    setActiveImage(images[index]);
  };

  return (
    <div className="carousel">
      <button
        onClick={prevSlide}
        className={classNames("arrow", "left")}
      ></button>

      {images.length > 0 && (
        <>
          <img
            src={`${baseURL}/files/${activeImage?.filename}`}
            className={isFullscreen ? "fullscreenImage" : ""}
            alt=""
          />
        </>
      )}
      <button
        onClick={nextSlide}
        className={classNames("arrow", "right")}
      ></button>
    </div>
  );
};
