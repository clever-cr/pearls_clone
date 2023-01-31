import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Hero = () => {
  const [slide, setSlide] = useState();

  return (
    <>
      <Swiper
        slidesPerView={1}
        onSwiper={(slide) => setSlide(slide)}
        loop
        className="relative"
      >
        <SlArrowLeft
          className="w-[44px] h-[55px] text-gray-400 hover:cursor-pointer absolute z-10 left-0 top-72"
          onClick={() => {
            slide.slidePrev();
          }}
        />
        <SlArrowRight
          className="w-[44px] h-[55px] text-gray-500 absolute z-10 right-0 top-72"
          onClick={() => {
            slide.slideNext();
          }}
        />
        <SwiperSlide>
          <div className="bg-[url('/images/hero-1-img.png')] bg-cover bg-no-repeat h-screen w-full  flex items-center justify-between-">
            <div className="flex flex-col space-y-[45px] pl-[93px] pr-[843px]">
              <div className="space-y-[16px]">
                <h2 className="text-[30px] leading-[42px] text-secondary ">
                  Reimagine with Purpose
                </h2>
                <p className="text-[20px] leading-[32px] text-secondary max-w-lg">
                  We help businesses digitally transform, build new products,
                  and accelerate digital teams.
                </p>
              </div>

              <div>
                <button className="border border-blue text-blue px-[22px] py-[10px] hover:bg-primary hover:text-white text-[17px] leading-[24px]">
                  lets build something
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/hero-3-img.png')] bg-cover bg-no-repeat h-screen w-full  flex items-center ">
            <div className="flex flex-col space-y-[45px] pl-[830px]">
              <div className="space-y-[16px]">
                <h2 className="text-[30px] leading-[42px] text-secondary max-w-lg">
                  A recognized tech partner that guarantees performance
                </h2>
                <div></div>
                <div className="grid grid-rows-2 grid-cols-4  items-center gap-x-4">
                  {[
                    "/images/logo1.svg",
                    "/images/logo2.svg",
                    "/images/logo3.svg",
                    "/images/logo4.svg",
                    "/images/logo5.svg",
                    "/images/logo6.webp",
                    "/images/logo7.webp",
                    "/images/logo8.webp",
                  ].map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={item} alt="logo" />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <button className="border border-blue text-blue px-[22px] py-[10px] hover:bg-primary hover:text-white text-[17px] leading-[24px]">
                  lets build something
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
