const list=[
  {
    name:'Audi A3',
    title:'Coupe',
    price:'$400',
    pic:'/BookingCars (1).png'
  },
  {
    name:'Porshe 718 Cayman',
    title:'Coupe',
    price:'$600',
    pic:'/BookingCars (2).png'
  },
  {
    name:'Porshe 718 Cayman',
    title:'Coupe',
    price:'$450',
    pic:'/BookingCars (3).png'
  },
  {
    name:'Porshe 718 Cayman',
    title:'Coupe',
    price:'$620',
    pic:'/BookingCars (1).png'
  },
  {
    name:'Suzuki Baleno',
    title:'Coupe',
    price:'$400',
    pic:'/BookingCars (4).png'
  },
  {
    name:'Porshe 718 Cayman',
    title:'Coupe',
    price:'$710',
    pic:'/BookingCars (5).png'
  },
  {
    name:'Mercedes-Benz GLC',
    title:'Coupe',
    price:'$400',
    pic:'/BookingCars (6).png'
  },
  {
    name:'Porshe 718 Cayman',
    title:'Coupe',
    price:'$580',
    pic:'/BookingCars (7).png'
  },
  {
    name:'BMW 7 Series',
    title:'Coupe',
    price:'$400',
    pic:'/BookingCars (8).png'
  },
 
  
]

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import BookingCarCards from '../cards/BookinCarCards';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
export default function Home() {
  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(false)
const handelclick=()=>{
  setToggle(!toggle)
}
const handelclick2=()=>{
  setToggle2(!toggle2)
}
  return (
    <main className='py-4 px-8'>
        <h1 className='font-bold  p-2 text-[30px] text-customGray-dark1 mb-1'>Booking</h1>
              {/* ----------Header section------------ */}
        <div>
          <div className='grid md:grid-cols-2 items-center md:justify-between md:w-[1029px] grid-cols-1 sm:grid-cols-2 w-[100%] justify-items-center '>
            <div className='flex gap-4'>
              <div className="1stdoendrop relative">
              <button data-ripple-light="true" onClick={handelclick} data-popover-target="menu"
    class=" select-none rounded-3xl  py-3 px-6 bg-white flex items-center gap-2 font-sans md:text-[16px] text-lg font-bold  text-customGray-dark2 shadow-md transition-all hover:shadow-lg hover:shadow-gray-900/20 h-[36px] w-[122px] active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">
    New <span className='text-customGray-dark4'><FaCaretDown/></span>
  </button>
  {toggle && <ul role="menu" data-popover="menu" data-popover-placement="bottom"
    class=" mt-1 absolute  z-10 min-w-[197px] overflow-auto rounded-b-3xl text-customGray-dark2 bg-white p-3 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
    <li role="menuitem" 
      class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
      Audi
    </li>
    <li role="menuitem" 
      class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
      Mercedes
    </li>
    <li role="menuitem" 
      class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
      BMW 
    </li>
  </ul>}
              </div>
              <div className="2nddoendrop relative">
              <button data-ripple-light="true" onClick={handelclick2} data-popover-target="menu"
    class="  select-none rounded-3xl  py-3 px-6 bg-white flex items-center gap-2 font-sans md:text-[16px] text-lg font-bold h-[36px] w-[122px]  text-customGray-dark2 shadow-md transition-all hover:shadow-lg hover:shadow-gray-900/20  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
    Toyota <span className='text-customGray-dark4'><FaCaretDown/></span>
  </button>
  {toggle2 && <ul role="menu" data-popover="menu" data-popover-placement="bottom"
    class=" md:ml-10  -ml-16  mt-1 absolute z-10 min-w-[197px] overflow-auto rounded-b-3xl text-customGray-dark2 bg-white p-3 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
    <li role="menuitem" 
      class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
      Menu Item 1
    </li>
    <li role="menuitem" 
      class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
      Menu Item 1
    </li>
    <li role="menuitem" 
      class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
      Menu Item 1
    </li>
  </ul>}
              </div>
            </div>
            <div className='flex gap-4 md:ml-[410px] ml-40  mt-5  md:mt-0 items-center justify-center'>
              <img src="/bookingIcon (1).png" alt="img" className='md:size-[60px] size-[50px]'  />
              <img src="/bookingIcon (2).png" alt="img" className='md:size-[44px] size-[40px] mb-2' />
            </div>
          </div>
        </div>

        
                          {/* ---------Card Section Start------------- */}
                          <div className='px-2 py-5 grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2  gap-y-4  
                          sm:gap-28 sm:gap-y-5
                          md:gap-y-5 md:gap-x-12 justify-items-center'>
                            {
                              list.map((items,index)=>(
                                <BookingCarCards
                                key={index}
                                items={items}
                                index={index}
                                />
                              ))
                            }
                          </div>
    </main>
  );
}
