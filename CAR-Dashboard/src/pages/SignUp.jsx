import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { IoEyeOutline } from "react-icons/io5";

export default function SignUp() {
  return (
    <main className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='bg-transparent w-full md:w-[50%] space-y-4 p-4 md:p-8 pt-12'>
        <div>
          <h1 className='text-2xl font-bold text-customGray-dark1'>Get started.</h1>
          <h2 className='md:text-xl text-[18px] text-customGray-dark3'>Don't have an account? <span className='text-secondaryP font-bold'>
            <Link to='/signin'>Sign In</Link>
          </span></h2>
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='h-[60px] flex w-full md:w-[246px] bg-white border-[1px] border-[#B1B5C3] rounded-lg text-customGray-dark1 font-semibold items-center justify-center gap-2 text-[16px]'>
            <FcGoogle className='text-3xl' />
            <h1>Sign in with Google</h1>
          </div>
          <div className='h-[60px] flex w-full md:w-[246px] bg-secondaryB rounded-lg text-white font-semibold items-center justify-center gap-2 text-[16px]'>
            <ImFacebook className='text-2xl bg-white text-blue-600 p-1 rounded-full' />
            <h1>Sign in with Facebook</h1>
          </div>
        </div>
        <div className='h-[40px] w-full bg-transparent'>
          <div className='flex items-center gap-2'>
            <span className='h-[2px] w-[48%] bg-[#B1B5C3]'></span>
            <span className='text-customGray-dark3 font-semibold text-xl'>or</span>
            <span className='h-[2px] w-[48%] bg-[#B1B5C3]'></span>
          </div>
        </div>
        <div className='bg-white w-full md:w-[100%] h-auto p-5 rounded-lg'>
          <form className='space-y-3'>
            <div className='flex flex-col'>
              <label className='flex flex-col'>
                <span>First Name</span>
                <input type="text" name="firstName" placeholder='MIRZA' className='p-3 h-[50px] w-full rounded-lg bg-white border-[1px] border-[#B1B5C3]' />
              </label>
            </div>
            <div className='flex flex-col'>
              <label className='flex flex-col'>
                <span>Last Name</span>
                <input type="text" name="lastName" placeholder='SUFIYAN' className='p-3 h-[50px] w-full rounded-lg bg-white border-[1px] border-[#B1B5C3]' />
              </label>
            </div>
            <div className='flex flex-col'>
              <label className='flex flex-col'>
                <span>Email</span>
                <input type="email" name="email" placeholder='mirza@gmail.com' className='p-3 h-[50px] w-full rounded-lg bg-white border-[1px] border-[#B1B5C3]' />
              </label>
            </div>
            <div className='flex flex-col'>
              <label className='flex flex-col'>
                <span>Password</span>
                <div className='flex relative'>
                  <input type="password" name="password" placeholder='************' className='p-3 h-[50px] w-full rounded-lg bg-white border-[1px] border-[#B1B5C3]' />
                  <IoEyeOutline className='absolute text-xl right-3 top-3 cursor-pointer' />
                </div>
              </label>
            </div>
            <div className='flex items-start justify-between'>
              <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-[#B1B5C3] cursor-pointer rounded-xl" />
                <label htmlFor="default-checkbox" className="ms-2 md:text-[16px] text-[13px] text-customGray-dark3 dark:text-gray-300">Remember me</label>
              </div>
              <span className='text-secondaryP md:text-[16px] text-[13px]  '>Forgot your password?</span>
            </div>
            <div className='w-full h-[50px] rounded-lg text-white font-semibold flex items-center justify-center cursor-pointer bg-secondaryP text-[20px]'>
              Sign Up
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
