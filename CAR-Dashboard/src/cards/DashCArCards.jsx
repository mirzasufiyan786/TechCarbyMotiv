import React from 'react'
import { GiRecycle } from "react-icons/gi";
import { ImLoop } from "react-icons/im";
import { RiSettings2Line } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
export default function DashCArCards({items}) {
  return (
    <main>
      <div className={` w-[290px] md:w-[318px] sm:w-[400px] md:h-[236px] sm:h-[300px] sm:gap-3 h-[210px] flex items-start flex-col py-[15px] px-[27px] rounded-xl`}
       style={{ backgroundColor: items.bgcl }}
      >
        <div className='flex items-center text-[16px] gap-3'>
            <span className='text-customGray-dark3'><GiRecycle/></span>
            <h1 className='text-customGray-dark1'> <span>{items.percent}</span>Recommend</h1>
        </div>
        <div className='flex justify-center items-center hover:scale-110 transition-all duration-300 ease-in cursor-pointer'><img src={items.car} alt="car" className='sm:h-[150px] sm:w-[330px] md:h-[106px] md:w-[257px]' /></div>
        <div className='text-[20px] text-customGray-dark1'>{items.carname}</div>
<div className='flex justify-between w-full'>
<div>
            <ul className='flex text-[14px] text-customGray-dark3 items-center gap-2'>
                <li><ImLoop/></li>
                <h3>{items.k}</h3>
                <li><RiSettings2Line/></li>
                <li><SlEnergy/></li>
            </ul>
        </div>
        <div className='text-[14px] text-customGray-dark3 '><h2>{items.price}</h2></div>
</div>
      </div>
    </main>
  )
}
