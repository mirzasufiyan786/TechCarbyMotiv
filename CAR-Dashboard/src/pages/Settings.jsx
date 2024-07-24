import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Settings() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <main className="p-4">
      <h1 className="p-4 text-2xl font-bold text-customGray-dark1 bg-white">Settings</h1>
      <div className="p-4 md:h-[80px] h-[170px] w-full bg-white flex md:flex-row flex-col md:items-center items-start md:justify-start justify-start sm:flex-row sm:h-[80px] md:space-x-14">
        <h1
          onClick={() => handleClick('/settings/page2')}
          className={`${
            activeLink === '/settings/page2' ? 'bg-customGray-light' : 'bg-transparent'
          } text-customGray-dark3 text-xl h-[50px] w-[120px] rounded-lg flex mid    cursor-pointer`}
        >
          <Link to="page2">My details</Link>
        </h1>
        <h1
          onClick={() => handleClick('/settings/profileS')}
          className={`${
            activeLink === '/settings/profileS' ? 'bg-customGray-light' : 'bg-transparent'
          } text-customGray-dark3 text-xl h-[50px] w-[120px] flex mid rounded-lg    cursor-pointer`}
        >
          <Link to="profileS">Profile</Link>
        </h1>
        <h1
          onClick={() => handleClick('/settings/password')}
          className={`${
            activeLink === '/settings/password' ? 'bg-customGray-light' : 'bg-transparent'
          } text-customGray-dark3 text-xl h-[50px] w-[120px] flex mid rounded-lg    cursor-pointer`}
        >
          <Link to="password">Password</Link>
        </h1>
        <h1
          onClick={() => handleClick('/settings/email')}
          className={`${
            activeLink === '/settings/email' ? 'bg-customGray-light' : 'bg-transparent'
          } text-customGray-dark3 text-xl h-[50px] w-[120px] flex mid rounded-lg    cursor-pointer`}
        >
          <Link to="email">Email</Link>
        </h1>
        <h1
          onClick={() => handleClick('/settings/notification')}
          className={`${
            activeLink === '/settings/notification' ? 'bg-customGray-light' : 'bg-transparent'
          } text-customGray-dark3 text-xl h-[50px] w-[120px] flex mid rounded-lg    cursor-pointer`}
        >
          <Link to="notification">Notification</Link>
        </h1>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

