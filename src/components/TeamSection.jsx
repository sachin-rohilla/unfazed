import Image from "next/image";

import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { teamSectionData } from "@/constants/constants";

const TeamSection = () => {
  return (
    <div className="w-full flex flex-col justify-center py-8 lg:py-16">
      <p className="text-orange text-sm font-bold text-center font-poppins">
        OUR TEAM
      </p>
      <h1 className="text-2xl font-castoro lg:text-4xl font-bold text-center mt-3">
        Meet Our Therapists
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
        {teamSectionData?.map((data) => (
          <div key={data?.id} className="relative">
            <Image
              src={data?.img}
              alt={`Portrait of ${data?.name}`}
              width={300}
              height={300}
              className="w-[250px] h-88 object-cover rounded-xl"
            />
            <div className="absolute bottom-4 px-4 text-white w-full ">
              <h1 className="text-xl font-medium font-castoro">{data?.name}</h1>
              <p className="text-xs mt-2 text-gray-600 font-poppins">
                {data?.title}
              </p>
              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-2 mt-2">
                  <TiSocialLinkedinCircular className="text-3xl" />
                  <TiSocialTwitterCircular className="text-3xl" />
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium font-poppins">
                    View Profile
                  </p>
                  <IoArrowForwardCircleOutline className="text-2xl" />
                </div>
              </div>
              <button className="bg-orange text-sm font-poppins mt-2 lg:hidden text-white w-full py-2 text-center rounded-md">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
