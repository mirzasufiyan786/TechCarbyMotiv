import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SidenavBar from '../components/SidenavBar';
import Navbar from '../components/Navbar';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

export default function Layout1() {
  const [toggle, setToggle] = useState(false);

  const handelclick = () => {
    setToggle(!toggle);
  };

  return (
    <main className='relative'>
      <div className='flex'>
        <div className='hidden md:block h-screen w-[248px] bg-white'>
          <SidenavBar />
        </div>
        {toggle && (
          <div className='block md:hidden absolute md:h-[600px] sm:h-screen h-[100%] bg-white w-[248px] border-e-[1px] border-customGray-light overflow-y-scroll z-50'>
            <SidenavBar toggle={toggle} handelclick={handelclick} />
          </div>
        )}
        <div className='w-full'>
          <div className='hidden md:block h-[78px] bg-white'>
            <Navbar />
          </div>
          <div className='bg-[#F5F4F6] md:h-[528px] h-screen sm:h-screen overflow-y-scroll'>
            <div onClick={handelclick} className='block md:hidden cursor-pointer size-9 right-3 mt-8 mid text-xl  rounded-full absolute z-50 bg-secondaryP text-white'>
              {toggle ? <RxCross2 /> : <RxHamburgerMenu />}
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
