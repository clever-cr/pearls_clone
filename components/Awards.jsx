import React from "react";

const Awards = () => {
  const data = [
    {
      image: "/images/ey-logo.webp",
      description:
        "EY Announced Imran Aftab as an Entrepreneur Of The Year® 2022 Mid-Atlantic Award Winner",
      link: "Learn more",
    },
    {
      image: "/images/inc-500.svg",
      description:
        "Recognized on the Inc. 5000 list of fastest growing private companies in America for 4 years in a row (2022, 2021, 2020 & 2019)",
      link: "Learn more",
    },
    {
      image: "/images/ft-logo-12.webp",
      description:
        "Recognized on The Financial Times list of The Americas’ Fastest Growing Companies 2022",
      link: "Learn more",
    },
    {
      image: "/images/GARTNER-2.svg",
      description:
        "Recognized for DevOps, Agile, and Artificial Intelligence and Machine Learning Expertise",
      link: "Learn more",
    },
    {
      image: "/images/FORRESTER-2.svg",
      description:
        "Top Partner for Custom Software Development, Enterprise Mobile, and Digital Experiences",
      link: "Learn more",
    },
    {
      image: "/images/Microsoft.webp",
      description:
        "Top Partner for Custom Software Development, Enterprise Mobile, and Digital Experiences",
      link: "Learn more",
    },
    {
      image: "/images/logo8.webp",
      description:
        "Top Partner for Custom Software Development, Enterprise Mobile, and Digital Experiences",
      link: "Learn more",
    },
    {
      image: "/images/post.svg",
      description:
        "Top Partner for Custom Software Development, Enterprise Mobile, and Digital Experiences",
      link: "Learn more",
    },
  ];
  return (
    <div className="px-[210px] pt-[100px]">
      <h3>RECOGNITION & AWARDS</h3>
      <div className="grid grid-cols-2 items-center gap-x-5 gap-y-[59px] pt-[49px]">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="border px-[29px] pb-[43px]- space-y-[18px] hover:border-primary w-[540px] h-[203px]">
                <picture>
                  <img
                    className={`${index == [0] ? "w-[280px] h-[74px] " : ""} ${
                      index == [2] ? "w-[230px] h-[75px]" : ""
                    } ${index == [5] ? "w-[149px] h-[86px]" : ""} ${
                      index == [6] ? "w-[212px] h-[85px] -mt-8" : ""
                    }  ${index == [7] ? " -mt-5" : ""}  ${
                      index == [4] ? " -mt-5" : ""
                    }  ${index == [3] ? " -mt-8" : ""}  ${
                      index == [1] ? "-mt-8" : ""
                    }  -mt-12 bg-white `}
                    src={item.image}
                    alt="image"
                  />
                </picture>
                <div className="space-y-[20px]">
                  <p className="text-[20px] leading-8 text-grayi">
                    {item.description}
                  </p>
                  <p className="text-base leading-4 text-primary hover:underline">
                    {item.link}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Awards;
