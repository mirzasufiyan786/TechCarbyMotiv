import React from 'react';
import { MdOutlineHome } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosMale } from "react-icons/io";

export default function ProfileSetting() {
  return (
    <main className='w-full p-4 space-y-5 mt-4 rounded-lg bg-white'>
      <div className='space-y-1'>
        <h1 className='text-xl font-bold text-customGray-dark1'>Profile</h1>
        <p className='text-customGray-dark3 text-lg'>Update your photo and personal details here.</p>
      </div>
      <hr />
      <div className='w-full h-auto flex flex-col md:flex-row gap-5'>
        <div className='w-full md:w-[40%] h-full'>
          <form>
            <label className='flex flex-col text-customGray-dark3 text-[16px]'>
              Live In
              <div className='flex'>
                <div className='w-[60px] rounded-s-lg bg-white h-[50px] text-3xl mid border-[1px] border-[#B1B5C3] flex items-center justify-center'>
                  <MdOutlineHome />
                </div>
                <input
                  placeholder='Lahore, Punjab'
                  type="text"
                  name="liveIn"
                  className='p-5 border-[1px] border-[#B1B5C3] w-full md:w-[70%] h-[50px] bg-white text-lg rounded-e-lg'
                />
              </div>
            </label>
          </form>
        </div>
        <div className='w-full md:w-[40%] h-full'>
          <form>
            <label className='flex flex-col text-customGray-dark3 text-[16px]'>
              Street Address
              <div className='flex'>
                <div className='w-[60px] rounded-s-lg bg-white h-[50px] text-3xl mid border-[1px] border-[#B1B5C3] flex items-center justify-center'>
                  <MdOutlineHome />
                </div>
                <input
                  placeholder='2445 Crosswind Drive'
                  type="text"
                  name="address"
                  className='p-5 border-[1px] border-[#B1B5C3] w-full md:w-[70%] h-[50px] bg-white text-lg rounded-e-lg'
                />
              </div>
            </label>
          </form>
        </div>
      </div>
      <div className='w-full h-full'>
        <form>
          <label className='flex flex-col text-customGray-dark3 text-[16px]'>
            Email Address
            <div className='flex'>
              <div className='w-[60px] rounded-s-lg bg-white h-[50px] text-3xl mid border-[1px] border-[#B1B5C3] flex items-center justify-center'>
                <CiMail />
              </div>
              <input
                placeholder='MirzaAhmad@gmail.com'
                type="email"
                name="email"
                className='p-5 border-[1px] border-[#B1B5C3] w-full md:w-[68%] h-[50px] bg-white text-lg rounded-e-lg'
              />
            </div>
          </label>
        </form>
      </div>
      <div className='w-full h-auto flex flex-col md:flex-row gap-5'>
        <div className='w-full md:w-[40%] h-full'>
          <form>
            <label className='flex flex-col text-customGray-dark3 text-[16px]'>
              Date Of Birth
              <div className='flex'>
                <div className='w-[60px] rounded-s-lg bg-white h-[50px] text-3xl mid border-[1px] border-[#B1B5C3] flex items-center justify-center'>
                  <IoCalendarOutline />
                </div>
                <input
                  placeholder='02/34/2003'
                  type="text"
                  name="dob"
                  className='p-5 border-[1px] border-[#B1B5C3] w-full md:w-[70%] h-[50px] bg-white text-lg rounded-e-lg'
                />
              </div>
            </label>
          </form>
        </div>
        <div className='w-full md:w-[40%] h-full'>
          <form>
            <label className='flex flex-col text-customGray-dark3 text-[16px]'>
              Gender
              <div className='flex'>
                <div className='w-[60px] rounded-s-lg bg-white h-[50px] text-3xl mid border-[1px] border-[#B1B5C3] flex items-center justify-center'>
                  <IoIosMale />
                </div>
                <input
                  placeholder='Male'
                  type="text"
                  name="gender"
                  className='p-5 border-[1px] border-[#B1B5C3] w-full md:w-[70%] h-[50px] bg-white text-lg rounded-e-lg'
                />
              </div>
            </label>
          </form>
        </div>
      </div>
      <hr />
      <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-64'>
        <div className='flex gap-5 md:gap-14 items-center'>
          <div className='space-y-1'>
            <h1 className='text-xl font-bold text-customGray-dark1'>Your photo</h1>
            <p className='text-customGray-dark3 text-lg'>This will be displayed on your profile.</p>
          </div>
          <div className='w-full h-full'>
            <img src="/profile-p.png" alt="Profile" className='md:size-14 size-12 ml-12 rounded-full' />
          </div>
        </div>
        <div className='flex gap-5 cursor-pointer text-lg text-secondaryP font-semibold'>
          <span>Delete</span>
          <span>Update</span>
        </div>
      </div>
      <hr />
      <div className='flex flex-col md:flex-row'>
        <h1 className='text-xl font-bold w-full md:w-[40%] text-customGray-dark1'>Social Profiles</h1>
        <div className='w-full space-y-5'>
          <form>
            <div className='w-full h-[60px] flex flex-col'>
              <input
                placeholder='facebook.com/'
                type="text"
                name="facebook"
                className='border-[1px] border-[#B1B5C3] w-full md:w-[50%] h-[50px] bg-white text-lg rounded-lg p-5'
              />
            </div>
          </form>
          <form>
            <div className='w-full h-full flex flex-col'>
              <input
                placeholder='twitter.com/'
                type="text"
                name="twitter"
                className='border-[1px] border-[#B1B5C3] w-full md:w-[50%] h-[50px] bg-white text-lg rounded-lg p-5'
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
