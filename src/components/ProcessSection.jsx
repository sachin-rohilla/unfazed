import { processSectionData } from "@/constants/constants";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <div className="p-8 lg:p-16  bg-gray_secondary">
      <p className="text-orange text-sm font-bold text-center font-poppins">
        THE PROCESS
      </p>
      <h1 className=" text-2xl lg:text-4xl font-bold text-center mt-3 font-castoro">
        How We Can Benefit You!
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-12">
        {processSectionData?.map((process, index) => (
          <div
            key={process?.id}
            className="flex flex-col items-center text-center lg:w-1/3 px-4 relative"
          >
            <div className="w-24 h-24 mb-4">
              <Image
                src={process?.img}
                alt="service"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-xl font-medium font-castoro">
              {process?.heading}
            </h1>
            <p className="text-sm text-gray mt-2 px-4 font-poppins">
              {process?.description}
            </p>
            {processSectionData.length - 1 !== index && (
              <div className="absolute hidden xl:block right-0 top-12 w-32 border-t border-t-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
