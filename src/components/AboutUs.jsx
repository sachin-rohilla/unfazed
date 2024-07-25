import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { aboutusData } from "@/constants/constants";

const AboutUs = () => {
  return (
    <div className="relative w-full min-h-screen lg:min-h-[650px]">
      <Image
        src="/about-us-bg.png"
        alt="about-us"
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
      />
      <div className="absolute top-0 left-0 right-0 flex flex-col lg:flex-row items-center px-4 lg:px-16 py-8 lg:py-14">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-white font-poppins ">ABOUT US</p>
          <h1
            className="text-2xl lg:text-5xl font-semibold  mt-4 lg:mt-6 font-castoro max-w-xl lg:max-w-lg"
            style={{ lineHeight: 1.2 }}
          >
            Licensed, Professional Therapists That You Can Trust
          </h1>
          <p className="text-gray mt-6 text-sm lg:text-base font-poppins max-w-xl lg:max-w-2xl">
            At “Unfazed”, we recognize that not all wounds are visible, and we
            are dedicated to healing the unseen. In today's world, all
            individuals face challenges in their professional and personal
            lives, and we aim to support them by helping them overcome mental
            health challenges.
          </p>

          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 lg:mt-12 max-w-xl lg:max-w-2xl mx-auto">
            {aboutusData?.map((data) => (
              <div key={data?.id} className="flex items-center gap-2">
                <Image
                  src={"/checkbox.png"}
                  width={20}
                  height={20}
                  alt="checkbox"
                />
                <p className="font-semibold ">{data?.title}</p>
              </div>
            ))}
          </div>
          <button
            id="get-to-know-our-therapists-button"
            title="Get To Know Our Therapists"
            className="bg-skyblue font-poppins rounded-full text-sm py-3 lg:flex items-center px-5 mt-8 text-white hidden lg:inline-flex"
          >
            Get To Know Our Therapists{" "}
            <IoArrowForwardCircleOutline className="ml-2 text-2xl" />
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <Image
            src="/about-us-doctor.png"
            alt="cover-image"
            width={300}
            height={300}
            className="w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
