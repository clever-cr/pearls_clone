import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[url('/images/hexagon.jpeg')] bg-cover bg-no-repeat py-[61px] ">
      <h4 className="text-[26px] leading-[34px] text-grayi text-center">
        Ready to get started?
      </h4>
      <div className="text-center pt-[41px]">
        <button className="border border-blue text-blue px-[22px] py-[10px] hover:bg-primary hover:text-white text-[17px] leading-[24px]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
