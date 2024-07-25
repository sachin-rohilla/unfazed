import Image from "next/image";
import BookingSessionVerticalForm from "./BookingSessionVerticalForm";

const Contact = () => {
  return (
    <div className="w-full relative h-screen ">
      <Image
        src="/contact.png"
        alt="contact"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 flex flex-col lg:flex-row items-center justify-center  w-full h-full">
        <div className="lg:w-1/2 flex flex-col ml-4 lg:ml-40 gap-4">
          <p className="text-sm text-orange font-poppins ">
            PSYCHOTHERAPISTS ONLINE
          </p>
          <h1 className="font-bold text-3xl lg:text-5xl text-white font-castoro ">
            Schedule Your Online <br /> Session Today
          </h1>
          <p className="text-white mt-2 lg:mt-6 text-sm lg:text-base font-poppins max-w-[300px] lg:max-w-[500px]">
            Therapists have a minimum of 7 years experience, are accredited and
            insured to practice privately.
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <BookingSessionVerticalForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
