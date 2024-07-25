"use client";

import { IoArrowForwardCircleOutline } from "react-icons/io5";

const BookingSessionVerticalForm = () => {
  return (
    <>
      <div className="text-sm w-80 border border-white border-opacity-40 bg-white/25 font-poppins text-white py-6 pl-6 pr-4 rounded-xl">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col  gap-4"
        >
          <div className="flex flex-col ">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="bg-transparent border-b border-b-white outline-none"
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="bg-transparent border-b border-b-white outline-none"
            />
          </div>

          <div className="w-full flex flex-col ">
            <label htmlFor="select">Select</label>
            <select className="bg-transparent border-b border-b-white outline-none">
              <option value={""}></option>
              <option className="text-black" value="option1">
                Option 1
              </option>
              <option className="text-black" value="option2">
                Option 2
              </option>
            </select>
          </div>

          <button
            id="book-session-button"
            title="Book Session"
            className="bg-orange flex items-center justify-center  text-white px-4 py-2 whitespace-nowrap rounded-full"
            type="submit"
          >
            Booking Session
            <IoArrowForwardCircleOutline className="ml-2 text-3xl" />
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingSessionVerticalForm;
