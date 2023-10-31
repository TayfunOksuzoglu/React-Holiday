import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="Turquoise waters lapping a pristine white sand beach in the Maldives under a clear blue sky."
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen " />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="text-xl italic mb-4">All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl mb-6">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            ratione ipsum aspernatur inventore tempora veniam. Ad tempora
            officia deleniti autem!
          </p>
          <button className="bg-white text-black ">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
