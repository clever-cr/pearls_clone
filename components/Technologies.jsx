import React from "react";

const Technologies = () => {
  return (
    <div className="bg-[#F5F6F8] px-[200px] py-[80px]">
      <h3 className="text-[22px] leading-[22px] text-primary">
        TECHNOLOGY PLATFORMS
      </h3>
      <div className="grid grid-cols-4 items-center gap-y-[64px] pt-[75px]">
        {[
          "/images/l1.svg",
          "/images/l2.svg",
          "/images/l3.svg",
          "/images/l4.svg",
          "/images/l5.svg",
          "/images/l6.svg",
          "/images/l7.svg",
          "/images/l8.svg",
        ].map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt="logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
