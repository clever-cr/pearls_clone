import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";

import "swiper/css";
const Work = () => {
  const [slide, setSlide] = useState();
  const card = [
    {
      title: "AARP",
      img: "/images/grannies.webp",
      description: "Developing a comunity experience for caregivers",
    },
    {
      title: "Decisiv",
      img: "/images/truck.webp",
      description: "Developing a comunity experience for caregivers",
    },
    {
      title: "PayPal",
      img: "/images/Paypal.webp",
      description: "Developing a comunity experience for caregivers",
    },
    {
      title: "MedStar Health",
      img: "/images/health.webp",
      description: "Developing a comunity experience for caregivers",
    },
  ];
  return (
    <div className="px-[200px] py-[80px] relative">
      <div className="space-y-[15px]">
        <h3 className="text-[22px] leading-[34px] text-primary">Our Work</h3>
        <h4 className="text-[26px] text-grayi leading-[34px]">
          Featured case studies
        </h4>
      </div>
      <SlArrowLeft
        className="w-[44px] h-[55px] text-grayi hover:text-primary hover:cursor-pointer absolute z-10 left-[132px] top-96"
        onClick={() => {
          slide.slidePrev();
        }}
      />
      <SlArrowRight
        className="w-[44px] h-[55px] text-grayi hover:text-primary hover:cursor-pointer absolute z-10 right-[132px] top-96"
        onClick={() => {
          slide.slideNext();
        }}
      />
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop
        className="mt-[55px]  h-[35rem] "
        onSwiper={(slide) => setSlide(slide)}
      >
        {card.map((item, index) => {
          return (
            <SwiperSlide key={index} className="group  ">
              <h4 className="text-[26px] leaing-[34px] text-grayi">
                {item.title}
              </h4>
              <div className=" relative">
                <img className="pt-[12px]" src={item.img} alt="image" />
                <div className="absolute bg-neutral-100 w-[318px] h-[104px] -bottom-16 right-0 p-[20px] group-hover:bg-primary ">
                  <p className="text-xl leading-8 text-secondary group-hover:text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="text-center pt-[32px]">
        <button className="border border-blue text-blue px-[22px] py-[10px] hover:bg-primary hover:text-white text-[17px] leading-[24px]">
          see case studies
        </button>
      </div>
    </div>
  );
};

export default Work;
