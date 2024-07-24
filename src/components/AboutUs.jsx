import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="relative w-full h-[450px]">
      <Image
        src="/about-us-bg.png"
        alt="about-us"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
      <div className="absolute  flex flex-col lg:flex-row items-center top-4 px-16 py-4 w-full">
        <div className="w-1/2">
          <p className="text-white  ">ABOUT US</p>
          <h1 className="text-4xl font-bold w-[370px] mt-4">
            Licensed, Professional Therapists That You Can Trust
          </h1>
          <p className="text-gray w-[500px] mt-4 text-sm">
            At “Unfazed”, we recognize that not all wounds are visible, and we
            are dedicated to healing the unseen. In today's world, all
            individuals face challenges in their professional and personal
            lives, and we aim to support them by helping them overcome mental
            health challenges.
          </p>
          <button
            id=" get-to-know-our-therapists-button"
            title="Get To Know Our Therapists"
            className="bg-skyblue rounded-full text-sm py-3 flex items-center px-5 mt-6 text-white"
          >
            Get To Know Our Therapists{" "}
            <IoArrowForwardCircleOutline className="ml-2 text-2xl" />
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            src="/about-us-doctor.png"
            alt="cover-image"
            width={1000}
            height={1000}
            className="w-80 h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
