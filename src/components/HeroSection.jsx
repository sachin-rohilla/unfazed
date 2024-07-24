import Image from "next/image";
import BookingSessionForm from "./BookingSessionForm";

const HeroSection = () => {
  return (
    <div className="w-full h-screen relative">
      <Image
        src="/main-bg.png"
        alt="bg-image"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
      <div className="absolute text-white bottom-8 md:bottom-0 md:top-1/2 lg:top-1/3 ml-4 md:ml-8 lg:ml-16">
        <h1 className="text-2xl w-[270px] lg:w-[500px] break-words lg:text-4xl font-bold  leading-10">
          Congratulation! You’re already ahead of 16 crore People
        </h1>
        <button className="font-semibold bg-orange text-white px-4 py-2 text-sm mt-6 rounded-md">
          Booking Session Now
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <BookingSessionForm />
      </div>
    </div>
  );
};

export default HeroSection;
