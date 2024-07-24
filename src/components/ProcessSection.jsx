import { processSectionData } from "@/constants/constants";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <div className="p-16  bg-gray_secondary">
      <p className="text-orange text-sm font-bold text-center">THE PROCESS</p>
      <h1 className="text-4xl font-bold text-center mt-3">
        How We Can Benefit You!
      </h1>

      <div className="flex justify-between items-center mt-12">
        {processSectionData?.map((process, index) => (
          <div
            key={process?.id}
            className="flex flex-col items-center text-center w-1/3 px-4 relative"
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
            <h1 className="text-xl font-medium">{process?.heading}</h1>
            <p className="text-sm text-gray mt-2 px-4">
              {process?.description}
            </p>
            {processSectionData.length - 1 !== index && (
              <div className="absolute right-0 top-12 w-32 border-t border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
