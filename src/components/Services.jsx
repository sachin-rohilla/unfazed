import Image from "next/image";
import { servicesData } from "@/constants/constants";

const Services = () => {
  return (
    <div className="p-16">
      <p className="text-orange text-sm font-bold text-center ">OUR SERVICES</p>
      <h1 className="text-4xl font-bold text-center mt-3">Our Session Types</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {servicesData?.map((service) => (
          <div
            key={service?.id}
            className="flex flex-col justify-center  gap-4"
          >
            <p className="text-sm text-orange font-medium">{service?.title}</p>

            <div className="flex items-center gap-2">
              <Image
                src={service?.image}
                alt="service"
                width={300}
                height={300}
                className="w-6 h-6 object-cover"
              />
              <h1 className="text-xl font-medium">{service?.heading}</h1>
            </div>
            <p className="text-sm">{service?.descrption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
