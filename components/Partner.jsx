import React from "react";

const Partner = () => {
  return (
    <div className="bg-[url('/images/10p-icon.png')] bg-no-repeat bg-right bg-[#FAFAFA] pt-[85px]">
      <h4 className="text-[26px] opacity-75 leading-6 text-secondary pl-[198px] ">
        We partner with global enterprises and high-growth companies
      </h4>
      <div className="  px-[208px] grid grid-cols-5 items-center gap-[53px] py-[70px]">
        {[
          "/images/j1.svg",
          "/images/p-logo.svg",
          "/images/cnx.svg",
          "/images/uber.svg",
          "/images/int.svg",
          "/images/med.svg",
          "/images/capital.svg",
          "/images/discovery.svg",
          "/images/survey.svg",
          "/images/black.svg",
          "/images/national.svg",
          "/images/k1.svg",
          "/images/decisiv.svg",
          "/images/dock.svg",
          "/images/AARP.svg",
        ].map((item, index) => {
          return (
            <div key={index} className="">
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
