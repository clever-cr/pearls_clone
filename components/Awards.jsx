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
      image: "/images/FORRESTER-2.svg",
      description:
        "Top Partner for Custom Software Development, Enterprise Mobile, and Digital Experiences",
      link: "Learn more",
    },
    {
      image: "/images/FORRESTER-2.svg",
      description:
        "Top Partner for Custom Software Development, Enterprise Mobile, and Digital Experiences",
      link: "Learn more",
    },
  ];
  return (
    <div>
      <h3>RECOGNITION & AWARDS</h3>
      <div>
        {data.map((item, index) => {
          return <div key={index}></div>;
        })}
      </div>
    </div>
  );
};

export default Awards;
