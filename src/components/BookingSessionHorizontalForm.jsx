"use client";

const BookingSessionHorizontalForm = () => {
  return (
    <div className="text-sm font-poppins bg-white/40 hidden lg:block text-white py-6 pl-6 pr-4 rounded-xl">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-4"
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

        <div className="flex flex-col ">
          <label htmlFor="service">Service</label>
          <input
            id="service"
            type="text"
            className="bg-transparent border-b border-b-white outline-none"
          />
        </div>

        <button
          id="book-session-button"
          title="Book Session"
          className="bg-orange font-poppins text-white px-4 py-2 whitespace-nowrap rounded-md"
          type="submit"
        >
          Booking Session
        </button>
      </form>
    </div>
  );
};

export default BookingSessionHorizontalForm;
