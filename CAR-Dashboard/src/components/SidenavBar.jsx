import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiDashboardLine } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { SiCcleaner } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { TbCarFan } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

export default function SidenavBar({ toggle, handelclick }) {
  const location = useLocation();
  const [bgcolor, setBgcolor] = useState(location.pathname);

  useEffect(() => {
    setBgcolor(location.pathname);
  }, [location.pathname]);

  const handleClick = (path) => {
    setBgcolor(path);
    if (toggle) {
      handelclick();
    }
  };

  return (
    <main>
      <div className='mt-6 px-10 py-5'>
        <div className=''>
         <Link to='/'> <img src="/logo.png" alt="logo" /></Link>
        </div>
        <div className='mt-9'>
          <ul className=''>
            <div onClick={() => handleClick('/')} className={`${bgcolor === '/' ? 'bg-[#F3F5F8]' : 'bg-transparent'} flex items-center gap-2 text-customGray-dark2 text-[14px] h-[39px] w-[174px] p-[8px] rounded-lg cursor-pointer`}>
              <span ><RiDashboardLine /></span>
              <li><Link to='/'>Dashboard</Link></li>
            </div>
            <div onClick={() => handleClick('/about')} className={`${bgcolor === '/about' ? 'bg-[#F3F5F8]' : 'bg-transparent'} flex items-center gap-2 text-customGray-dark2 text-[14px] h-[39px] w-[174px] p-[8px] rounded-lg cursor-pointer`}>
              <span ><TbCarFan /></span>
              <li><Link to='/about'>Assets</Link></li>
            </div>
            <div onClick={() => handleClick('/dashboard')} className={`${bgcolor === '/dashboard' ? 'bg-[#F3F5F8]' : 'bg-transparent'} flex items-center gap-2 text-customGray-dark2 text-[14px] h-[39px] w-[174px] p-[8px] rounded-lg cursor-pointer`}>
              <span ><FaCar /></span>
              <li><Link to='/dashboard'>Booking</Link></li>
            </div>
            <div onClick={() => handleClick('/sellcars')} className={`${bgcolor === '/sellcars' ? 'bg-[#F3F5F8]' : 'bg-transparent'} flex items-center gap-2 text-customGray-dark2 text-[14px] h-[39px] w-[174px] p-[8px] rounded-lg cursor-pointer`}>
              <span ><MdOutlineSell /></span>
              <li><Link to='sellcars'>Sell Cars</Link></li>
            </div>
            <div onClick={() => handleClick('/buycar')} className={`${bgcolor === '/buycar' ? 'bg-[#F3F5F8]' : 'bg-transparent'} flex items-center gap-2 text-customGray-dark2 text-[14px] h-[39px] w-[174px] p-[8px] rounded-lg cursor-pointer`}>
              <span><FaShoppingCart /></span>
              <li><Link to='buycar'>Buy Cars</Link></li>
            </div>
            <div onClick={() => handleClick('/services')} className={`${bgcolor === '/services' ? 'bg-[#F3F5F8]' : 'bg-transparent'} flex items-center gap-2 text-customGray-dark2 text-[14px] h-[39px] w-[174px] p-[8px] rounded-lg cursor-pointer`}>
              <span><SiCcleaner /></span>
              <li><Link to='services'>Services</Link></li>
            </div>
            <div onClick={() => handleClick('/calender')} className={`${bgcolor === '/calender' ? 'bg-[#F3F5F8]' : 'bg-transparent'} flex items-center gap-2 text-customGray-dark2 text-[14px] h-[39px] w-[174px] p-[8px] rounded-lg cursor-pointer`}>
              <span><FaRegCalendarAlt /></span>
              <li><Link to='calender'>Calendar</Link></li>
            </div>
            <div onClick={() => handleClick('/messages')} className={`${bgcolor === '/messages' ? 'bg-[#F3F5F8]' : 'bg-transparent'} flex items-center gap-2 text-customGray-dark2 text-[14px] h-[39px] w-[174px] p-[8px] rounded-lg cursor-pointer`}>
              <span><MdOutlineMessage /></span>
              <li><Link to='messages'>Messages</Link></li>
            </div>
          </ul>
        </div>
      </div>
      <div className='mt-8 px-10 py-4'>
        <ul className='space-y-4'>
          <div onClick={() => handleClick('/settings')} className={`${bgcolor === '/settings' ? 'bg-[#F3F5F8]' : 'bg-transparent'} flex items-center gap-2 text-customGray-dark2 text-[14px] h-[39px] w-[174px] p-[8px] rounded-lg cursor-pointer`}>
            <span ><IoMdSettings /></span>
            <li><Link to='setting'>Settings</Link></li>
          </div>
          <div onClick={() => handleClick('/signin')} className={`${bgcolor === '/signin' ? 'bg-[#F3F5F8]' : 'bg-transparent'} flex items-center gap-2 text-customGray-dark2 text-[14px] h-[39px] w-[174px] p-[8px] rounded-lg cursor-pointer`}>
            <span ><BiLogOut /></span>
            <li><Link to='signin'>Log out</Link></li>
          </div>
        </ul>
      </div>
    </main>
  );
}
