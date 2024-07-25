import React from "react";
import Image from "next/image";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { blogSectionData } from "@/constants/constants";

const BlogSection = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-gray_secondary mt-12 justify-center py-8 lg:py-16">
        <p className="text-orange font-poppins text-sm font-bold text-center">
          PSYCHOTHERAPISTS ONLINE
        </p>
        <h1 className="text-2xl lg:text-4xl font-castoro font-bold text-center mt-3">
          Today's Essential Reads
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   max-w-[1200px] mx-auto   gap-8 mt-8">
          {blogSectionData?.map((data, index) => (
            <div
              key={data?.id}
              className={`${
                index !== 0 && index !== 2 && index !== 4 && "relative"
              } h-full rounded-xl overflow-hidden `}
            >
              <Image
                src={data?.img}
                alt={`Portrait of ${data?.name}`}
                width={300}
                height={300}
                className={`w-[270px] object-cover  ${
                  index !== 0 && index !== 2 && index !== 4 ? "h-96" : "h-44"
                }`}
              />
              <div
                className={`${
                  index !== 0 && index !== 2 && index !== 4
                    ? "absolute bottom-4 text-white"
                    : "bg-white text-black pb-4 h-full  "
                } px-4  w-[270px] `}
              >
                <h1 className="text-xs pt-2 font-poppins font-medium">
                  {data?.name}
                </h1>
                <p className="text-xl font-medium break-words mt-2 text-gray-600 font-castoro">
                  {data?.title}
                </p>
                {index !== 1 && index !== 3 && index !== 6 && (
                  <p className="font-poppins text-gray mt-2 text-xs break-words">
                    {data?.desc}
                  </p>
                )}
                <div className="flex items-center space-x-2 mt-4">
                  <p className="text-sm font-medium">View More</p>
                  <IoArrowForwardCircleOutline className="text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
