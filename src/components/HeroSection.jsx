import Image from "next/image";
import BookingSessionHorizontalForm from "./BookingSessionHorizontalForm";

const HeroSection = () => {
  return (
    <div className="relative mt-22 lg:mt-22">
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      <Image
        src="/main-bg.png"
        alt="bg-image"
        width={1000}
        height={1000}
        className="w-full h-screen object-cover"
      />
      <div className="absolute text-white bottom-8 md:bottom-0 md:top-1/2 lg:top-1/3 ml-4 md:ml-8 lg:ml-16 z-10">
        <h1
          className="text-2xl font-poppins w-[270px] lg:w-[550px] break-words lg:text-5xl font-bold"
          style={{ lineHeight: 1.2 }}
        >
          Congratulation! You’re already ahead of 16 crore People
        </h1>
        <button className="font-semibold bg-orange text-white px-4 py-2 text-sm mt-6 rounded-md">
          Booking Session Now
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <BookingSessionHorizontalForm />
      </div>
    </div>
  );
};

export default HeroSection;
