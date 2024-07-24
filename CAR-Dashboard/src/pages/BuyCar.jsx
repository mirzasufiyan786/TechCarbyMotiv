import React from 'react'
import { Link } from 'react-router-dom';
import { PiSeat } from "react-icons/pi";
import { LuCircleDollarSign } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
export default function BuyCar() {
  return (
    <main className='p-4 relative   w-full h-full'>
   <div className='bg-white'>
   <div className='w-full md:h-[300px] h-[300px] grid md:grid-cols-2 md:-space-x-7 space-x-0 grid-cols-1'>
         <div className='md:w-[95%] w-full p-6 h-full bg-white space-y-4 '>
<div>
<h1 className='md:text-[40px] text-[30px] font-bold text-customGray-dark1 '>Buy, sell & rent</h1>
<h2 className='md:text-[40px] text-[30px] font-bold text-secondaryR'>reputable cars</h2>
</div>
<div><p className='md:text-xl text-lg text-customGray-dark3 '>Buy and sell reputable cars. Renting a car is easy</p>
<p className='md:text-xl text-lg  text-customGray-dark3'>and fast with Topcar</p></div>
<div className='flex gap-6'>
    <div>
        <h1 className='text-2xl font-bold text-customGray-dark1'>50+</h1>
        <p className='text-lg text-customGray-dark3'>Car brands</p>
    </div>
    <div className='w-[1px] h-[55px] bg-customGray-dark3'></div>
    <div>
        <h1 className='text-2xl font-bold text-customGray-dark1'>10K+</h1>
        <p className='text-lg text-customGray-dark3'>Clients</p>
    </div>
</div>
</div>
<div className=' md:w-[105%] w-full h-full bg-white '>
<Link to='/cardetails'>
<img src="/buycar.png" alt="img" className='absolute md:h-[500px] md:-ml-52 md:-mt-10 -ml-8 -mt-16 sm:-ml-12 sm:-mt-28 md:w-[780px] lg:ml-32 cursor-pointer sm:w-[650px] sm:h-[400px] h-[350px] w-[450px] ' />
</Link>
</div>
</div>
<div className='w-[100%] flex gap-5 p-6 md:mt-12 mt-64  h-[80px] bg-white'>
<div className='text-white text-xl font-semibold h-[50px] md:w-[20%] w-[45%] bg-customGray-dark3 mid rounded-t-xl'>
Rent car
</div>
<Link to='/cardetails'>
<div className='text-customGray-dark3 text-xl border-[1px] border-customGray-light font-semibold h-[50px] md:w-[300%] w-[155%] bg-white hover:bg-customGray-light cursor-pointer mid rounded-t-xl'>
  <span className='cursor-pointer'>Buy car</span>
</div>
</Link>
</div>
<div className='w-full md:h-[80px] h-[250px] p-6 grid md:grid-cols-3 grid-cols-1 space-y-5 md:space-y-0 bg-white'>
<form>
    <div className='flex w-full'>
    <div className='w-[60px] rounded-s-lg bg-[#F5F4F6] h-[50px] text-xl text-customGray-dark3  border-[1px] border-customGray-light mid '><PiSeat/></div>
    <input placeholder='Number of seat' type="text" name="name" className=' p-4 w-[60%] h-[50px] bg-[#F5F4F6] md:text-xl text-sm   border-customGray-light rounded-e-lg border-[1px] focus:outline-none' />
    </div>
</form>
<form>
    <div className='flex w-full'>
    <div className='w-[60px] rounded-s-lg bg-[#F5F4F6] h-[50px] text-xl text-customGray-dark3  border-[1px] border-customGray-light mid '><LuCircleDollarSign/></div>
    <input placeholder='Price' type="text" name="name" className=' p-4  w-[60%] h-[50px] bg-[#F5F4F6] md:text-xl text-sm   border-customGray-light rounded-e-lg border-[1px] focus:outline-none' />
    </div>
</form>
<form>
    <div className='flex w-full'>
    <div className='w-[60px] rounded-s-lg bg-[#F5F4F6] h-[50px] text-xl text-customGray-dark3  border-[1px] border-customGray-light mid '><IoLocationOutline/></div>
    <input placeholder='Location' type="text" name="name" className=' p-4  w-[60%] h-[50px] bg-[#F5F4F6] md:text-xl text-sm border-customGray-light rounded-e-lg border-[1px] focus:outline-none' />
    </div>
</form>
</div>
   </div>
    </main>
  )
}
