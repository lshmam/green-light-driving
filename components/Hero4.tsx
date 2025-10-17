import React from "react";

const Hero4 = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0 text-white text-xl">
              <a
                href="#"
                title="Green Light Driving School"
                className="inline-flex items-center gap-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary"
              >
                <img
                  className="w-auto h-32"
                  src="GL-Logo.png"
                  alt="Green Light Driving School Logo"
                />
                {/* <span className="font-semibold">Green Light</span> */}
              </a>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Call to action button in header */}
            <div className="hidden md:flex">
              <a
                href="tel:+12366626363"
                className="inline-flex items-center justify-center px-6 py-3 font-sans text-base font-semibold leading-6 transition-all duration-200 border-2 border-white rounded-full text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black"
              >
                +1 236-662-6363
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="https://res.cloudinary.com/dy8zpplau/video/upload/f_auto,q_auto/f7auziyrilc4nylspju6"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Radial Overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="w-full h-full bg-gradient-radial from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6 sm:px-8 lg:px-12">
        <h1 className="text-5xl font-serif tracking-tight md:text-7xl">
          Let's get you driving today
        </h1>
        <p className="mt-6 font-sans text-lg font-normal text-white text-opacity-80 max-w-2xl">
          We provide high-quality driving lessons in Surrey, Delta & Lower Mainland
        </p>
        <div className="flex items-center justify-center mt-10">
          <a
            href="tel:+16047511404"
            className="inline-flex items-center justify-center px-8 py-4 font-sans text-lg font-semibold transition-all duration-200 border-2 border-transparent rounded-full bg-white text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black"
          >
            Book a lesson today!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero4;