import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Slider = ({
  children,
  className = "",
  spaceBetween = 10,
  speed = 700,
  delay = 2500,
  ...props
}) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={"auto"}
      spaceBetween={spaceBetween}
      loop
      speed={speed}
      autoplay={{
        delay,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: true,
      }}
      onSwiper={(swiper) => swiper.autoplay?.start?.()}
      className={`mySwiper ${className}`}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
