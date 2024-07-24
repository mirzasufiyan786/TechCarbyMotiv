import React from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { LuWrench } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
export default function About() {
  return (
    <main className='px-8 py-4'>
      <h1 className='p-1 text-[30px] font-bold text-customGray-dark1 mb-5'>Assets</h1>
      <div className='md:flex  gap-6 '>
        <div className="left md:w-[361px] w-[100%] md:h-[674px] h-[400px]">
          <div className='w-full bg-secondaryB h-[90%] rounded-lg'>
<div className='grid grid-cols-2 text-[20px] gap-3 p-3 te justify-items-center  '>
<div>
  <h1 className='text-[16px]'>Fuel Usage</h1>
  <p>2903.89 Ltr</p>
</div>
<div>
  <h1 className='text-[16px]'>KM Driven</h1>
  <p>2903,89 KM</p>
</div>
<div>
  <h1 className='text-[16px]'>Total Cost</h1>
  <p>$3,54,334.0</p>
</div>
<div>
  <h1 className='text-[16px]'>Top Speed</h1>
  <p>$5.2 K</p>
</div>
</div>
<div className='flex justify-center items-center' >
  <img src="/AssetsCar.png" alt="car" className='md:h-[615px] sm:h-[400px] h-[450px] md:w-[316px] sm:w-[200px] w-[260px]' />
</div>
          </div>
        </div>
        {/* -----------Right side ecode--------------- */}
        <div className="right sm:mt-10 md:w-[639px] w-[100%] mt-48 md:mt-0">
          <div className="right1 py-[27px] px-[24px]  bg-white w-[100%] h-[270px] rounded-lg">
<div className='flex items-center h-[26px] md:w-[580px] w-[100%] justify-between  p-2'>
  <h1 className='text-[20px] font-semibold text-customGray-dark1'>Activity</h1>
  <h2 className='text-[14px] text-[#949596] '>View All</h2>
</div>
<div className=''>
  <img src="/Assetsgraph.png" alt="img" className='md:w-[581px] w-[100%] md:h-[178px] h-[170px] ' />
</div>
          </div>
          <div className="Righ2  md:flex md:space-y-0    space-y-4 justify-between mt-5 ">
            <div className="Right2A bg-white md:h-[314px] h-[350px] md:w-[311px] rounded-lg p-4">
              <div className='md:text-2xl text-[20px] font-semibold text-customGray-dark1 mb-3'>Noties</div>
             <div className='flex flex-col gap-3'>
             <div className='flex items-center h-[66px] w-[271px] gap-3'>
                <div className='md:size-[44px] size-[44px] bg-white rounded-full md:text-[20px] text-lg text-customGray-dark1 mid shadow-md shadow-[#7e7b7b]'><FiMessageCircle/></div>
                <div className='flex flex-col gap-1'>
                  <h1 className='md:text-[13px] text-[13px] text-black'>Monday, 6th April 2020</h1>
                <h2 className='text-customGray-dark3 text-[11px] '>Book for General Service</h2>
                <div className='bg-secondaryG  md:w-[81px] md:h-[21px] w-24 flex justify-center text-sm  md:text-[10px] items-center rounded-lg'>COMPLETED</div>
                </div>
              </div>
              <div className='flex items-center h-[66px] w-[271px] gap-[14px]'>
                <div className='md:size-[44px] size-[44px] bg-white rounded-full md:text-[20px] text-lg text-secondaryR flex justify-center items-center shadow-md shadow-[#7e7b7b]'><MdErrorOutline/></div>
                <div className='flex w-[213px] flex-col gap-1'>
                  <h1 className='md:text-[13px] text-[13px] text-black'>Thursday, 24th October 2020</h1>
                <h2 className='text-customGray-dark3 text-[11px] '>Vehicle has been remarked for recall</h2>
                <div className='bg-[#ECEEF0] md:w-[99px] md:h-[21px]  w-24 flex justify-center text-sm  md:text-[10px] items-center rounded-lg'>14:07-21/11/2012</div>
                </div>
              </div>
              <div className='flex items-center h-[66px] w-[271px] gap-3'>
                <div className='md:size-[44px] size-[44px] bg-white rounded-full md:text-[20px] text-lg text-customGray-dark3 flex justify-center items-center shadow-md shadow-[#7e7b7b]'><LuWrench/></div>
                <div className='flex flex-col w-[167px] gap-1'>
                  <h1 className='md:text-[13px] text-[13px] text-black'>Monday, 13th August 2020</h1>
                <h2 className='text-customGray-dark3 text-[11px] '>Maintenance completed,collect</h2>
                <div className='bg-[#ECEEF0]  md:w-[99px] md:h-[21px] w-24 flex justify-center text-sm  md:text-[10px] items-center rounded-lg'>14:07-21/11/2012</div>
                </div>
              </div>
             </div>
            </div>
            <div className="Right2B  bg-white md:h-[314px] sm:h-[360px] h-[350px] md:w-[305px] rounded-lg p-[20px]">
           <div className='flex justify-between items-center'>
            <h1 className='text-customGray-dark1 font-semibold md:text-2xl text-[18px] sm:text-xl'>Available Sensors</h1>
           <div className='flex items-center gap-2 text-[12px]  text-customGray-dark3'> <h2>Assets</h2>
           <span><IoMdArrowDropdown/></span></div>
           </div>
           <div className='h-[1px] w-[265px] bg-[#F3F3F3] mt-3'>

           </div>
<div class="w-[258px] text-center  flex flex-col justify-center sm:text-[18px] mt-3 p-2">

<div class=" w-[258px] h-[20px] mr-4 mb-4">
    <input id="radio2" type="radio" name="radio" value = "radio2" class="hidden" />
    <label for="radio2" class="flex  items-center justify-between w-full cursor-pointer">
     <div className='md:text-[13px] 
     sm:text-[16px] text-[12px]'><span class="w-4 h-4 inline-block mr-1 border border-grey "></span>
     Assets - Fuel Consumed(10)</div>
     <div className='ml-10 sixe-[17px]  icon-container'><BsGraphUp/></div>
     </label>
   </div>

   <div class=" w-[258px] h-[20px] mr-4 mb-4">
    <input id="radio2" type="radio" name="radio" value = "radio2" class="hidden" />
    <label for="radio2" class="flex  items-center justify-between w-full cursor-pointer">
     <div className='md:text-[13px] 
     sm:text-[16px] text-[12px]'><span class="w-4 h-4 inline-block mr-1 border border-grey "></span>
     Assets - Odometer(km)</div>
     <div className='ml-10 sixe-[17px]  icon-container'><BsGraphUp/></div>
     </label>
   </div>

  
   <div class=" w-[258px] h-[20px] mr-4 mb-4">
    <input id="radio2" type="radio" name="radio" value = "radio2" class="hidden" />
    <label for="radio2" class="flex  items-center justify-between w-full cursor-pointer">
     <div className='md:text-[13px] 
     sm:text-[16px] text-[12px]'><span class="w-4 h-4 inline-block mr-1 border border-grey "></span>
     Assets - Runtime(km)</div>
     <div className='ml-10 sixe-[17px]  icon-container'><BsGraphUp/></div>
     </label>
   </div>
  
   
   <div class=" w-[258px] h-[20px] mr-4 mb-4">
    <input id="radio2" type="radio" name="radio" value = "radio2" class="hidden" />
    <label for="radio2" class="flex  items-center justify-between w-full cursor-pointer">
     <div className='md:text-[13px] 
     sm:text-[16px] text-[12px]'><span class="w-4 h-4 inline-block mr-1 border border-grey "></span>
    Assets - Speed(hr)</div>
     <div className='ml-10 sixe-[17px]  icon-container'><BsGraphUp/></div>
     </label>
   </div>
 
   <div class=" w-[258px] h-[20px] mr-4 mb-4">
    <input id="radio2" type="radio" name="radio" value = "radio2" class="hidden" />
    <label for="radio2" class="flex  items-center justify-between w-full cursor-pointer">
     <div className='md:text-[13px] 
     sm:text-[16px] text-[12px]'><span class="w-4 h-4 inline-block mr-1 border border-grey "></span>
    Engine Temperature(deg C)</div>
     <div className='ml-10 sixe-[17px]  icon-container'><BsGraphUp/></div>
     </label>
   </div>
   <div className='md:w-[71px] w-20 md:h-[26px] h-7  bg-secondaryR flex justify-center items-center rounded-lg md:text-[14px] text-sm text-white'>See All</div>
 </div>
            </div>
          </div>
          {/* -----------Remainder code------------ */}
          <div className='md:hidden block'>
          <div className="flex md:hidden bg-white p-4 flex-col gap-3 mt-5 rounded-lg">
  <div className='flex items-center justify-between'>
    <h1 className='text-customGray-dark1 text-xl font-semibold'>Reminder</h1>
    <div className='w-20 h-7 bg-secondaryB flex justify-center text-sm items-center rounded-lg text-white'>+ Add New</div>
  </div>
  <hr />
  <div>
    <ul className='flex flex-col space-y-2 text-sm sm:text-xl text-customGray-dark3'>
      <li className='flex justify-between'><span>Description</span> <span>Urgent Safety Recall</span></li>
      <li className='flex justify-between'><span>Due</span> <span>06/04/2022</span></li>
      <li className='flex justify-between'><span>Overdue</span> <span>08/05/2020</span></li>
      <li className='flex justify-between'><span>Notify</span> <span>David Demo</span></li>
      <li className='flex justify-between'><span>Status</span> <span>Completed</span></li>
    </ul>
  </div>
  <hr />
  <div>
    <ul className='flex flex-col space-y-2 text-sm sm:text-xl text-customGray-dark1'>
      <li className='flex justify-between'><span>Description</span> <span>Urgent Safety Recall</span></li>
      <li className='flex justify-between'><span>Due</span> <span>06/04/2022</span></li>
      <li className='flex justify-between'><span>Overdue</span> <span>08/05/2020</span></li>
      <li className='flex justify-between'><span>Notify</span> <span>David Demo</span></li>
      <li className='flex justify-between'><span>Status</span> <span>Completed</span></li>
    </ul>
  </div>
</div>
          </div>
                          {/* ---------REmainder code ------------------ */}
          <div className="md:flex w-[639px] h-[201px]  hidden Right3 bg-white p-6  flex-col gap-3 mt-5 rounded-lg ">
            <div className='flex items-center justify-between'>
              <h1 className='text-customGray-dark1 md:text-[18px] text-lg font-semibold'>Reminder</h1>
              <div className='md:w-24 w-20 md:h-8 h-7 bg-secondaryP flex justify-center md:text-[14px] text-sm items-center rounded-lg text-white'>+ Add New</div>
            </div>
<hr />
<div>
  <ul className='items-center justify-between text-[14px] text-customGray-dark3 flex '>
    <li>Description</li>
    <li>Due</li>
    <li>Overdue</li>
    <li>Notify</li>
    <li>Status</li>
  </ul>
</div>
<hr />
<div>
  <ul className='flex text-[13px] items-center justify-between text-customGray-dark1'>
    <li>
      Urgent Safety Recall
    </li>
    <li>
      06/04/2022
    </li>
    <li>
      08/05/2020
    </li>
    <li>
      David Demo
    </li>
    <li>
      Completed
    </li>
  </ul>
</div>
<hr />
<div>
<ul className='flex text-[13px] items-center justify-between text-customGray-dark1'>
    <li>
      Urgent Safety Recall
    </li>
    <li>
      06/04/2022
    </li>
    <li>
      08/05/2020
    </li>
    <li>
      David Demo
    </li>
    <li>
      Completed
    </li>
  </ul>
</div>
          </div>
        </div>
      </div>
    </main>
  )
}
