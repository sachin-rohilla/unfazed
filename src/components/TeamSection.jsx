import Image from "next/image";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { teamSectionData } from "@/constants/constants";

const TeamSection = () => {
  return (
    <div className="w-full flex flex-col justify-center py-16">
      <p className="text-orange text-sm font-bold text-center">OUR TEAM</p>
      <h1 className="text-4xl font-bold text-center mt-3">
        Meet Our Therapists
      </h1>

      <div className="flex justify-center items-center space-x-8 mt-8">
        {teamSectionData?.map((data) => (
          <div key={data?.id} className="relative">
            <Image
              src={data?.img}
              alt={`Portrait of ${data?.name}`}
              width={300}
              height={300}
              className="w-[270px] h-96 object-cover rounded-xl"
            />
            <div className="absolute bottom-4 px-4 text-white w-full ">
              <h1 className="text-xl font-medium">{data?.name}</h1>
              <p className="text-xs mt-2 text-gray-600">{data?.title}</p>
              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-2 mt-2">
                  <TiSocialLinkedinCircular className="text-3xl" />
                  <TiSocialTwitterCircular className="text-3xl" />
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">View Profile</p>
                  <IoArrowForwardCircleOutline className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
