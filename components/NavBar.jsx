import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
const NavBar = () => {
  const [isHover, setIsHover] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const whenIsClosed = () => {
    setIsClosed(!isClosed);
  };

  const whenIsHover = () => {
    setIsHover(!isHover);
  };
  return (
    <div>
      {!isClosed ? (
        <div className="fixed z-50 w-full">
          <div className="relative ">
            <div className="px-[135px] py-[20px] fixed- bg-white">
              <div className="flex items-center justify-between- gap-[434px]">
                <picture>
                  <img className="w-44" src="/images/10P-Logo.svg" alt="" />
                </picture>
                <div className="flex items-center gap-[44px]">
                  <div className="flex gap-[44px] text-secondary">
                    {["company", "services", "work", "insights", "careers"].map(
                      (item, index) => {
                        return (
                          <div
                            onMouseOver={whenIsHover}
                            className="hover:text-primary text-base leading-4"
                            key={index}
                          >
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div>
                    <button className="border border-black px-[22px] py-[10px] hover:bg-primary hover:text-white text-base leading-4 text-secondary">
                      Contact
                    </button>
                  </div>
                  <div>
                    <BiSearch
                      onClick={whenIsClosed}
                      className="text-[#0045A6] w-12 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` ${
                isHover
                  ? "bg-white backdrop-blur-lg bg-opacity-75 backdrop-filter absolute z-50  w-full h-[185px] flex pl-[713px] gap-x-[53px] py-[18px]"
                  : "hidden"
              }`}
            >
              <div className="flex flex-col gap-y-[10px] text-secondary">
                {[
                  "our story",
                  "people",
                  "awards",
                  "partnership",
                  " locations",
                ].map((item, index) => {
                  return (
                    <Link href={"#"} key={index}>
                      {item}
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-col gap-y-[10px] text-secondary">
                {[
                  "10pearls Labs",
                  "10pearls university",
                  "Empower Foundation",
                ].map((item, index) => {
                  return (
                    <Link href={"#"} key={index}>
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-between px-[135px] py-[20px] items-center h-[86px]">
          <input placeholder="search..." className="text-black outline-none" />
          <AiOutlineClose onClick={whenIsClosed} className="w-12 h-6" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
