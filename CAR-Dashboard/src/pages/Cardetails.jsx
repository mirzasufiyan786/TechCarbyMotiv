import React from 'react'
const CarDetails = () => {
  return (
   <main className=' relative p-4 h-[700px]'>
     <div className="  grid md:grid-cols-2 grid-cols-1 h-full">
      <div className="w-full md:w-[120%] bg-customGray-dark1 md:order-first p-4 relative">
        <h1 className="text-[56px] font-bold text-[#fff] mb-2">Alpha Romeo <span className='text-[#967766]'>4C</span></h1>
        <p className="text-lg text-[#967766] mb-4">"Efficient, reliable, and versatile."</p>
        <ul className=" pl-5 space-y-2 mb-4">
          <li className="text-lg text-[#967766]">Mileage</li>
          <li className="text-xl font-bold text-white">25 miles per gallon</li>
          <li className="text-lg text-[#967766]">Fuel Consumption</li>
          <li className="text-xl font-bold text-white">8 liters per 100 kilometers</li>
          <li className="text-lg text-[#967766]">Top Speed </li>
          <li className="text-xl font-bold text-white">220 km/h</li>
        </ul>
        <div>
          <h2 className="text-3xl text-white md:mt-28 font-bold mb-2">About the Car</h2>
          <p className="text-base text-[#967766]">
          "Cars combine utility with freedom, offering efficient transportation and personalized mobility solutions. From compact city commuters to rugged off-road vehicles, cars cater to diverse lifestyles and preferences, providing comfort, convenience, and reliability on the road."
          </p>
        </div>
      </div>
      <div className=" w-full md:h-full h-[180px] sm:h-[250px] md:w-[100%] order-first  bg-[#3c312b]">
        <div className=''>
        <img
          src="/alpha.png"
          alt="Car"
          className="absolute inset-0 mt-3   md:inset-auto md:mt-5 md:left-24  h-[200px] w-[300px] md:w-[750px] md:h-[500px] sm:w-[400px] sm:h-[350px] sm:ml-20 lg:w-[450px] lg:h-[350px] lg:mt-2 lg:ml-52 "
        />
        </div>
      </div>
    </div>
   </main>
  );
};

export default CarDetails;