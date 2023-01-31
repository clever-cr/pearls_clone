import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";
const Scale = () => {
  const [slider, setSlider] = useState();

  const data = [
    {
      img: "/images/GDPR.png",
      title: "10Pearls 90 DaY",
    },
    {
      img: "/images/Titles_10PU-center-for-learning.png",
      title: "How to Align Enterprise security & Enterprise User Experience",
    },
    {
      img: "/images/Titles_90-Day-mindset-Agile.png",
      title: "New product Development",
    },
    {
      img: "/images/Titles_AlignEnterprise.png",
      title: "10Pearls University:  Center for Continous & Advanced Learning",
    },
  ];

  return (
    <div className="px-[200px] relative py-[65px]">
      <h4 className="text-[26px] leading-[35px] text-[#757575]">
        We help businesses disrupt, accelerate & scale
      </h4>
      <SlArrowLeft
        className="absolute left-24 top-52 z-10 w-[44px] h-[55px] text-gray-400 "
        onClick={() => {
          slider.slidePrev();
        }}
      />
      <SlArrowRight
        className="absolute right-24 top-52 z-10 w-[44px] h-[55px] text-gray-400   "
        onClick={() => {
          slider.slideNext();
        }}
      />
      <Swiper
        onSwiper={(slide) => setSlider(slide)}
        spaceBetween={25}
        slidesPerView={3}
        loop
        className="mt-[26px]"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="group flex flex-col space-y-4">
                <img src={item.img} alt="" />
                <Link
                  className="group-hover:underline  decoration-primary text-base leading-6"
                  href="#"
                >
                  {item.title}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Scale;
