import Image from "next/image";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export const CommunitySection = () => {
  return (
    <div className="py-8 flex flex-col lg:flex-row items-center">
      <div className="relative flex flex-col gap-4  lg:left-36 ">
        <p className="text-sm text-orange font-semibold font-poppins ">
          JOIN OUR COMMUNITY
        </p>
        <h1 className=" text-3xl lg:text-5xl font-castoro font-bold">
          Together We Can Make <br /> Great Progress
        </h1>
        <button
          id=" get-to-know-our-therapists-button"
          title="Get To Know Our Therapists"
          className="bg-skyblue rounded-full w-fit text-sm py-2 flex items-center px-5  lg:mt-6 text-white"
        >
          Apply Today <IoArrowForwardCircleOutline className="ml-2 text-2xl" />
        </button>
      </div>
      <div className="flex-grow mt-4 lg:mt-0">
        <Image
          src="/comunity.png"
          alt="community-section"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
