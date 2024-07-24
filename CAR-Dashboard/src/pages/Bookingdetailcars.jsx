import React from 'react';
import { useLocation } from 'react-router-dom';

const Bookingdetailcars = () => {
  const location = useLocation();
  const { imageSrc,carname } = location.state || {};
  return (
    <main className='relative p-4 h-[700px]'>
      <div className="grid md:grid-cols-2 grid-cols-1 h-full">
        <div className="w-full md:w-[120%] bg-white md:order-first p-4 relative">
          <h1 className="text-[56px] font-bold text-[#917769] mb-2">{carname}<span className='text-[#6e5b50]'></span></h1>
          <p className="text-lg text-[#967766] mb-4">"Efficient, reliable, and versatile."</p>
          <ul className="pl-5 space-y-2 mb-4">
            <li className="text-lg text-[#967766]">Mileage</li>
            <li className="text-xl font-bold text-customGray-dark1">25 miles per gallon</li>
            <li className="text-lg text-[#967766]">Fuel Consumption</li>
            <li className="text-xl font-bold text-customGray-dark1">8 liters per 100 kilometers</li>
            <li className="text-lg text-[#967766]">Top Speed</li>
            <li className="text-xl font-bold text-customGray-dark1">220 km/h</li>
          </ul>
          <div>
            <h2 className="text-3xl text-customGray-dark1 md:mt-28 font-bold mb-2">About the Car</h2>
            <p className="text-base text-[#967766]">
              "Cars combine utility with freedom, offering efficient transportation and personalized mobility solutions. From compact city commuters to rugged off-road vehicles, cars cater to diverse lifestyles and preferences, providing comfort, convenience, and reliability on the road."
            </p>
          </div>
        </div>
        <div className="w-full md:h-full h-[180px] sm:h-[250px] md:w-[100%] order-first bg-[#3c312b]">
          <div className=''>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Car"
                className="absolute inset-0 mt-10 transform rotate-6 md:inset-auto md:mt-24 md:left-44 h-[170px] w-[300px] md:w-[550px] md:h-[300px] sm:w-[350px] sm:h-[250px] sm:ml-20 lg:w-[450px] lg:h-[250px] lg:mt-9 lg:ml-52"
              />
            ) : (
              <p className="text-black">Image not available</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bookingdetailcars;
