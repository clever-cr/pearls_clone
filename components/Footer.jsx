import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black px-[151px] pt-[89px]">
      <div className="items-center flex ">
        <div className="pr-[32px] space-y-8">
          <picture>
            <img className="w-44" src="/images/white-logo.svg" alt="" />
          </picture>
          <p className="text-white text-[20px] leading-[27px] max-w-lg ">
            10Pearls is an award winning digital development company, helping
            business with product design, development and technology
            acceleration.
          </p>
        </div>
        <div className="grid grid-cols-2 border-l px-[64px] border-r py-8 gap-x-20">
          {[
            "company",
            "services",
            "work",
            "insights",
            "careers",
            "contact",
          ].map((item, index) => {
            return (
              <Link
                key={index}
                href="#"
                className="text-white text-[15px] leading-[38px]"
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="grid grid-cols-2 pl-[20px] gap-x-[35px]">
          {[
            "USA (HQ in Wash DC)",
            "Costa Rica",
            "Pakistan",
            "Canada",
            "Colombia",
            "Peru",
            "UK",
            "UAE",
          ].map((item, index) => {
            return (
              <Link
                key={index}
                href="#"
                className="text-white text-[15px] leading-[38px] "
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      <div className=" pt-12">
        <div className="flex justify-between border-t text-white py-5">
          <div className="flex items-center gap-x-9 ">
            <Link href="#">+1-703-935-1919</Link>
            <Link href="#">info@10pearls.com</Link>
            <div className="w-[45px] border h-[45px] flex flex-col justify-center items-center rounded-full">
              <FaFacebookF />
            </div>
            <div className="w-[45px] border h-[45px] flex flex-col justify-center items-center rounded-full">
              <FaTwitter />
            </div>
            <div className="w-[45px] border h-[45px] flex flex-col justify-center items-center rounded-full">
              <FaLinkedinIn />
            </div>
          </div>

          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
