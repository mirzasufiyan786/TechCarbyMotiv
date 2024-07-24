import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className='flex justify-between items-center'>
      <div>
      <div className="flex  items-center  ml-10 p-2">
      <form>
    <div className='relative  flex'>
    <div className='w-[60px] rounded-s-lg bg-[#F5F4F6] h-[46px] text-[16px] text-customGray-dark4  mid '><FaSearch/></div><div className='w-[2px] ml-14 mt-3 h-[20px] absolute bg-[#EF9011]'></div>
    <input placeholder='Search or Type' type="text" name="name" className=' p-5  w-[358px] h-[46px] bg-[#F5F4F6] text-[16px] font-semibold rounded-e-lg focus:outline-none' />
    </div>
</form>
    </div>
      </div>
     
      <div className='flex items-center justify-between gap-7 mr-10'>
      <Link to='/setting/notification'> <div className='relative  text-2xl text-customGray-dark4'>
          <span><FaRegBell/></span>
        <div className='size-2 bg-secondaryR absolute right-1 top-1 rounded-full'>

        </div>
        </div>
        </Link> 
        <div className='size-[48px]  rounded-full flex justify-center items-center'>
           <Link to='/setting/profiles'> <img className='rounded-full' src="/profile-p.png" alt="profile" /></Link>
        </div>
      </div>
    </div>
  )
}
