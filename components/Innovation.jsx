import React from "react";
import Link from "next/link";
const Innovation = () => {
  const data = [
    {
      title: "Innovation",
      description:
        "We design transformational digital products and experiences that drive real business value and customer impact—so you can create innovative products faster and at scale.",
      link: "learn more",
      img: "/images/Innovation.webp",
    },
    {
      title: "Modernization",
      description:
        "Unleash the value of your existing technology by re-architecting it for the future. We help you modernize platforms and applications for high performance, better user experience, scale, and security. ",
      link: "learn more",
      img: "/images/Modernization.webp",
    },
    {
      title: "Digitalization",
      description:
        "Automate manual business processes and optimize the customer experience for better efficiency and engagement. We implement intelligent digital platforms and solutions that drive productivity.",
      link: "learn more",
      img: "/images/Digitalization.webp",
    },
    {
      title: "Augmentation",
      description:
        "Extend your agile development teams with a high-performance partner. We help you accelerate your digital journey through faster software delivery to outpace the competition.",
      link: "learn more",
      img: "/images/Augmentation.webp",
    },
  ];

  return (
    <div className="px-[61px]  gap-40">
      {data.map((item, index) => {
        return (
          <div key={index} className={` pt-[30px] relative flex`}>
            <div className="py-8 ">
              <div
                className={`flex absolute  flex-col space-y-[25px] bg-[#FAFAFA]  w-full h-[301px] px-[81px] pt-[81px] py-12 ${
                  index == 1 || index == 3 ? "pl-[644px]" : ""
                } `}
              >
                <h4 className="text-[26px] leading-9 text-gray">
                  {item.title}
                </h4>
                <p className="text-[20px] leading-8 text-secondary max-w-2xl">
                  {item.description}
                </p>
                <Link
                  className="text-base leading-6 text-primary hover:underline"
                  href="#"
                >
                  {item.link}
                </Link>
              </div>
            </div>
            <div className=" z-10">
              <img
                className={`w-[587px] h-[391px]  ${
                  index == 1 || index == 3 ? "" : "ml-[812px]"
                }`}
                src={item.img}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Innovation;
