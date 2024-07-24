import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaNetworkWired } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { GiAutoRepair } from "react-icons/gi";
import { SiCcleaner } from "react-icons/si";
export default function Services() {
  return (
    <main className='py-4 px-8'>
      {/* --------------full page------------ */}
      <div className='w-full gap-[80px] grid md:grid-cols-2 grid-cols-1'>
        {/* -------------Left half page---------- */}
        <div className=' md:w-[590px] md:h-[211px] h-[900px] w-[100%] space-y-6'>
        <h1 className='text-[24px] font-bold text-customGray-dark1 '>Service Station</h1>
            <div className=' w-full md:h-[20px]h-[220px]'>
<ul className='grid md:grid-cols-10 sm:grid-cols-5 grid-cols-5 text-customGray-dark3 text-xl justify-items-center gap-3'>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>A1 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>A2 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>A3 </li>
    <li className='bg-secondaryR text-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>A4 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>A5 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>A6 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>A7 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>A8 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>A9 </li>
    <li className='bg-secondaryR text-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>A10 </li>
    <li className='bg-secondaryR text-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>B1 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>B2 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>B3 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>B4 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>B5 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>B6</li>
    <li className='bg-secondaryR text-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>B7</li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>B8 </li>
    <li className='bg-secondaryB text-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>B9 </li>
    <li className='bg-white w-[50px] h-[70px] flex justify-center items-center rounded-md'>B10 </li>
</ul>
    </div>
                        {/* ------------------ */}
            <div className=' md:w-[367px] w-[100%] h-[21px] grid  md:grid-cols-3 md:ml-32 ml-0 grid-cols-2 '>
                <div className='flex items-center gap-1'>
                <div className='size-2 bg-white border-customGray-dark5 border-[1px] rounded-full'></div>
                <h1 className='text-customGray-dark3 md:text-[16px] text-[16px]'>Ready</h1>
                </div>
                <div className='flex items-center gap-1'>
                <div className='size-2 bg-secondaryR  rounded-full'></div>
                <h1 className='text-customGray-dark3 md:text-[16px] text-[16px]'>Booked</h1>
                </div>
                <div className='flex items-center gap-1'>
                <div className='size-2 bg-secondaryB  rounded-full'></div>
                <h1 className='text-customGray-dark3 md:text-[16px] text-[16px]'>Current Station</h1>
                </div>
            </div>
                      {/* ----------------------- */}
            <div className='grid md:-space-x-16 space-x-0 md:grid-cols-2  grid-cols-1  md:w-[590px] w-[100%] md:h-[290px] h-[600px]  '>
<div className='md:w-[216px] w-[100%] bg-white rounded-lg font-semibold h-[268px] flex flex-col gap-5 items-center justify-center py-[30px] px-[34px]'>
    <h1 className='text-[24px] text-customGray-dark1'>Your Order</h1>
    <img src="/services.png" alt="pic" className='w-[148px] h-[153px]' />
</div>
<div className='md:w-[354px] w-[100%] h-[268px] space-y-[14px]'>
    <div className='flex items-center justify-between gap-4 w-full h-[56px]  p-3 bg-white rounded-lg'>
       <div className='flex items-center gap-2'> <div className='size-3 bg-secondaryG rounded-full'></div>
       <h1 className='text-customGray-dark2 text-[20px] font-semibold'>Brake Fluid Change</h1></div>
        <div className='bg-[#e6e1e1] text-secondaryP text-[20px] h-6 rounded-md flex justify-center items-center font-bold w-12'>$32</div>
    </div>
    <div className='flex items-center justify-between gap-4 w-full h-[56px]  p-3 bg-white rounded-lg'>
       <div className='flex items-center gap-2'> <div className='size-3 bg-secondaryR rounded-full'></div>
       <h1 className='text-customGray-dark2 text-[20px] font-semibold'>Diagnostics</h1></div>
        <div className='bg-[#e6e1e1] text-secondaryP text-[20px] h-6 rounded-md flex justify-center items-center font-bold w-12'>$32</div>
    </div>
    <div className='flex items-center justify-between gap-4 w-full h-[56px]  p-3 bg-white rounded-lg'>
       <div className='flex items-center gap-2'> <div className='size-3 bg-secondaryB rounded-full'></div>
       <h1 className='text-customGray-dark2 text-[20px] font-semibold'>External Washing</h1></div>
        <div className='bg-[#e6e1e1] text-secondaryP text-[20px] h-6 rounded-md flex justify-center items-center font-bold w-12'>$10</div>
    </div>
    <div className='flex items-center justify-between gap-4 w-full h-[56px] p-3 bg-[#e6e1e1]  rounded-lg border-dashed border-[1px] border-[#c5c0c0]'>
      <h1 className='text-customGray-dark2 text-[20px] font-semibold flex justify-center items-center w-full'>Add Services</h1>
    </div>
</div>
</div>
<div className='md:w-[590px] w-[100%] bg-secondaryP rounded-lg   h-[59px] flex justify-center items-center'>
    <h1 className='text-white text-2xl font-semibold'>Pay $86</h1>
</div>
            
        </div>
        {/* ------------------Righr halfe page---------------- */}
        <div className='md:w-[451px]  md:ml-[54px] mt-40 md:mt-0 w-[100%] p-4 space-y-4'>
        <h1 className='p-1 text-2xl font-bold text-customGray-dark1 '>Service Required</h1>
            <div className='w-full '>
            <VerticalTimeline>
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  iconStyle={{ background: '#f5f4f6', color: '#70CF97' }}
  icon={<BsPersonLinesFill />}
>
  <h3 className="vertical-timeline-element-title text-xl font-bold text-customGray-dark3">Center Care</h3>
  <h4 className="vertical-timeline-element-subtitle text-[16px] text-customGray-dark1 font-semibold">Price:$48</h4>
  <p className='vertical-timeline-element-subtitle text-sm text-customGray-dark3'>
    Processing:1hr
  </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#f5f4f6', color: '#A162F7' }}
    icon={<GiAutoRepair />}
  >
    <h3 className="vertical-timeline-element-title text-xl font-bold text-customGray-dark3">Diagnostics</h3>
    <h4 className="vertical-timeline-element-subtitle text-[16px] text-customGray-dark1 font-semibold">Price:478</h4>
    <p className='vertical-timeline-element-subtitle text-customGray-dark3 text-sm'>
      processing:2hr
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#f5f4f6', color: '#FF6370' }}
    icon={<SiCcleaner />}
  >
    <h3 className="vertical-timeline-element-title text-[16px] font-bold text-customGray-dark3">Inner Cleaning</h3>
    <h4 className="vertical-timeline-element-subtitle text-[16px] text-customGray-dark1 font-semibold">Price:$78</h4>
    <p className='vertical-timeline-element-subtitle text-customGray-dark3 text-sm'>
      Processing:1hr
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
            </div>
            <div></div>
        </div>
      </div>
        {/* ---------------fotter of service page------------ */}

      <div className='grid md:grid-cols-4 grid-cols-1 justify-items-center  md:h-[210px] h-[750px] md:w-[1031px] w-[100%] rounded-lg  bg-white p-4'>
<div className='h-full w-[230px] bg-white rounded-xl space-y-2 p-3'>
<img src="/serviceF.png" alt="img" />
<h1 className='text-xl font-bold text-customGray-dark1'>Oil Level</h1>
<div className='h-[40px] flex  text-[15px] font-semibold text-customGray-dark3 w-full  '><div className='h-full w-[50%] flex justify-between items-center '>Engine</div><div className='h-full w-[50%] border-s-[1px] border-[#d3cfcf] flex justify-end items-center '>Dont't Replace</div></div>
<div className=' relative h-1 w-full bg-[#d8d7da] rounded-full'>
    <div className='h-[5px] w-[75%] bg-secondaryP rounded-full absolute  -mt-[1px] '></div>
</div>
</div>
<div className='h-full w-[230px]  bg-white rounded-xl space-y-2 p-3'>
<img src="/serviceF2.png" alt="img" />
<h1 className='text-xl font-bold text-customGray-dark1'>Brake Pads</h1>
<div className='h-[40px] flex  text-[15px] font-semibold text-customGray-dark3 w-full  '><div className='h-full w-[50%] flex justify-start items-center '>Wheels</div><div className='h-full w-[50%] border-s-[1px] border-[#d3cfcf] flex justify-end items-center '>Still Good</div></div>
<div className=' relative h-1 w-full bg-[#d8d7da] rounded-full'>
    <div className='h-[5px] w-[45%] bg-secondaryG rounded-full absolute  -mt-[1px] '></div>
</div>
</div>
<div className='h-full w-[230px] bg-white rounded-xl space-y-2 p-3'>
<img src="/serviceF3.png" alt="img" />
<h1 className='text-xl font-bold text-customGray-dark1'>Steering</h1>
<div className='h-[40px] flex  text-[15px] font-semibold text-customGray-dark3 w-full  '><div className='h-full w-[50%] flex justify-start items-center '>Drivetrain</div><div className='h-full w-[50%] border-s-[1px] border-[#d3cfcf] flex justify-end items-center '>Need Change</div></div>
<div className=' relative h-1 w-full bg-[#d8d7da] rounded-full'>
    <div className='h-[5px] w-[30%] bg-secondaryY rounded-full absolute  -mt-[1px] '></div>
</div>
</div>
<div className='h-full w-[230px] bg-white rounded-xl space-y-2 p-3'>
<img src="/serviceF.png" alt="img" />
<h1 className='text-xl font-bold text-customGray-dark1'>Oil Level</h1>
<div className='h-[40px] flex text-[15px] font-semibold text-customGray-dark3 w-full  '><div className='h-full w-[50%] flex justify-start items-center '>Engine</div><div className='h-full w-[50%] border-s-[1px] border-[#d3cfcf] flex justify-end items-center '>Dont't Replace</div></div>
<div className=' relative h-1 w-full bg-[#d8d7da] rounded-full'>
    <div className='h-[5px] w-[80%] bg-secondaryR rounded-full absolute  -mt-[1px] '></div>
</div>
</div>
      </div>
    </main>
  )
}
