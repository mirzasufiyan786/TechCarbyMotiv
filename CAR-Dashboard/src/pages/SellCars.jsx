  
  import React, { useState } from 'react'
  import { FaArrowRightLong } from "react-icons/fa6";
  import { FaCaretDown } from "react-icons/fa6";
  import { FaCar } from "react-icons/fa";
  import { HiOutlineArrowUturnRight } from "react-icons/hi2";
  import { BsCurrencyDollar } from "react-icons/bs";
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
          <h1 className='p-1 text-[30px] font-bold text-customGray-dark1 '>Sell Cars</h1>
          {/* ------------Card section---------- */}

          <div className='grid md:grid-cols-2 md:space-x-12  grid-cols-1 items-center md:gap-64 gap-14 mt-5'>
            <div className='md:w-[657px] sm:h-[370px] lg:h-[500px] md:h-[398px] w-[100%] h-[398px] bg-white  rounded-lg py-[25px] px-[43px]'>
                <h1 className='text-[30px] text-customGray-dark1'>2022 Oddy Eron</h1>
               <div className='  '>
               <img src="/Salecar.png" alt="car" className='w-[100%]  h-[216px]  md:h-[316px] hover:scale-110 transition-all duration-300 ease-out cursor-pointer '/>
               </div>
            </div>
            <div className='md:w-[345px] w-[100%] md:h-[398px] sm:h-[370px] bg-white py-[26px] 
            px-[24px] rounded-lg'>
            <h1 className='text-[24px] text-customGray-dark1'>Tracking History</h1>
            <img src="/salegraph.png" alt="graph" className='w-[297px] h-[286px]' />
            </div>
         
          </div>
                {/* ----------Offer section------------ */}
          <div>
            <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center  justify-between mt-5 space-y-3 md:space-y-0 md:space-x-64 md:w-[1031px] w-[100%] '>
            <div className='' >
                <h1 className='text-[30px] font-bold text-customGray-dark1'>Offers</h1>
              </div>
              <div className='flex gap-4'>
                <div className="1stdoendrop relative">
                <button data-ripple-light="true" onClick={handelclick} data-popover-target="menu"
      class="w-[120px] h-[36px] select-none rounded-3xl  py-3 px-6 bg-white flex items-center gap-2 font-sans text-[16px] font-semibold  text-secondaryP shadow-md transition-all hover:shadow-lg hover:shadow-gray-900/20  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">
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
      class="w-[120px] h-[36px]  select-none rounded-3xl  py-3 px-6 bg-white flex items-center gap-2 font-sans text-[16px] font-semibold  text-secondaryP shadow-md transition-all hover:shadow-lg hover:shadow-gray-900/20  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Toyota <span className='text-customGray-dark4'><FaCaretDown/></span>
    </button>
    {toggle2 && <ul role="menu" data-popover="menu" data-popover-placement="bottom"
      class=" ml-10 mt-1 absolute z-10 min-w-[197px] overflow-auto rounded-b-3xl text-customGray-dark2 bg-white p-3 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
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
            </div>
          </div>

          {/* ----------offer section cards------------------ */}

          <div className=' bg-white rounded-lg md:w-[1035px] w-[100%] md:justify-between md:items-center justify-items-center mt-5 md:h-[147px]  h-[700px]'>
         
          <div className='grid md:grid-cols-6 grid-cols-1 md:justify-items-start justify-items-center gap-y-10 '>
          <div className='bg-white h-[147px] rounded-s-lg md:w-[270px] w-[200px] p-5 md:space-y-1 space-y-3'>
                <h1 className='text-customGray-dark1 text-[20px] font-bold'>Killan James</h1>
                <h2 className='text-[18px] text-secondaryR font-semibold'>$16,605 <span className='text-customGray-dark5 text-[12px]'>avarage price</span></h2>
                <h3 className='text-customGray-dark3 text-[12px]'>market avarage is $16,224</h3>
                <div className='bg-secondaryR h-5 w-12 text-white rounded-xl flex justify-center items-center'><FaArrowRightLong/></div>
            </div>
            <div className='flex items-center flex-col justify-center bg-white h-full w-44'>
                <div> <img src="/chart.png" alt="" /></div>
                <h1 className='text-[14px] text-customGray-dark3'>Impression Share</h1>
            </div>
            <div className=' flex justify-center items-center bg-white h-full w-44'>
                <img src="/circle.png" alt="#" />
            </div>
            <div className='flex flex-col items-center justify-center h-full'>
            <div className='size-10 bg-[rgb(216,212,250)] rounded-md flex justify-center items-center text-secondaryB text-2xl'><FaCar/></div>
            <p className='text-[20px] text-secondaryB font-semibold'>$1,174</p>
            <p className='text-customGray-dark4 text-[12px]'>Modal Spend</p>
           </div>
           <div className='flex flex-col items-center justify-center h-full'>
            <div className='size-10 bg-[#f7d3d3] rounded-md flex justify-center items-center text-2xl text-secondaryO'><BsCurrencyDollar/></div>
            <p className='text-[20px] text-secondaryO font-semibold'>$1,374</p>
            <p className='text-customGray-dark4 text-[12px]'>Modal Spend</p>
           </div>
           <div className='flex flex-col items-center justify-center h-full'>
            <div className='size-10 bg-[#f5d4f5] rounded-md flex justify-center items-center text-2xl text-secondaryP'><HiOutlineArrowUturnRight/></div>
            <p className='text-[20px] text-secondaryP font-semibold'>$881</p>
            <p className='text-customGray-dark4 text-[12px]'>Modal Spend</p>
           </div>
          </div>
          </div>

          <div className=' bg-white rounded-lg md:w-[1035px] w-[100%] md:justify-between md:items-center justify-items-center mt-5 md:h-[147px]  h-[850px]'>
            
          <div className='grid md:grid-cols-6 grid-cols-1 md:justify-items-start justify-items-center gap-y-10'>
          <div className='bg-white h-[147px] rounded-s-lg md:w-[270px] w-[200px] p-5 md:space-y-1 space-y-3'>
                <h1 className='text-customGray-dark1 text-[20px] font-bold'>Killan James</h1>
                <h2 className='text-[18px] text-secondaryR font-semibold'>$16,605 <span className='text-customGray-dark5 text-[12px]'>avarage price</span></h2>
                <h3 className='text-customGray-dark3 text-[12px]'>market avarage is $16,224</h3>
                <div className='bg-secondaryR h-5 w-12 text-white rounded-xl flex justify-center items-center'><FaArrowRightLong/></div>
            </div>
            <div className='flex items-center flex-col justify-center bg-white h-full w-44'>
                <div> <img src="/chart2.png" alt="" /></div>
                <h1 className='text-[14px] text-customGray-dark3'>Impression Share</h1>
            </div>
            <div className=' flex justify-center items-center bg-white h-full w-44'>
                <img src="/circle2.png" alt="#" />
            </div>
            <div className='flex flex-col items-center justify-center h-full'>
            <div className='size-10 bg-[rgb(216,212,250)] rounded-md flex justify-center items-center text-secondaryB text-2xl'><FaCar/></div>
            <p className='text-[20px] text-secondaryB font-semibold'>$1,174</p>
            <p className='text-customGray-dark4 text-[12px]'>Modal Spend</p>
           </div>
           <div className='flex flex-col items-center justify-center h-full'>
            <div className='size-10 bg-[#f7d3d3] rounded-md flex justify-center items-center text-2xl text-secondaryO'><BsCurrencyDollar/></div>
            <p className='text-[20px] text-secondaryO font-semibold'>$1,374</p>
            <p className='text-customGray-dark4 text-[12px]'>Modal Spend</p>
           </div>
           <div className='flex flex-col items-center justify-center h-full'>
            <div className='size-10 bg-[#f5d4f5] rounded-md flex justify-center items-center text-2xl text-secondaryP'><HiOutlineArrowUturnRight/></div>
            <p className='text-[20px] text-secondaryP font-semibold'>$881</p>
            <p className='text-customGray-dark4 text-[12px]'>Modal Spend</p>
           </div>
          </div>
          </div>

          

      </main>
    );
  }
  