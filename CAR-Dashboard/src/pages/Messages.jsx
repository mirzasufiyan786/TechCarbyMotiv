const list=[
    {
        pic:'client2.jpeg',
        name:'M Ahmad',
        about:'Typing...',
        time:'4:30 PM',
        icon:'2'
    },
    {
        pic:'client5.jpeg',
        name:'MAAN',
        about:'Hello! Everyone',
        time:'9:36 1M',
        icon:''
    },
    {
        pic:'client3.jpg',
        name:'Asim M',
        about:'Wow really Cool🔥',
        time:'1:15 AM',
        icon:''
    },
]
const list2=[
    {
        pic:'profile-blank.jpg',
        name:'Butt Sab',
        about:'Love ❤️ ',
        time:'4:30 PM',
        icon:''
    },
    {
        pic:'client3.jpeg',
        name:'S Husnain',
        about:'Nice',
        time:'9:36 1M',
        icon:'2'
    },
    {
        pic:'client6.jpeg',
        name:'M Abdullah',
        about:'yah, nice design',
        time:'1:15 AM',
        icon:'1'
    },
    {
        pic:'client7.jpeg',
        name:'A Ahad',
        about:'Awesome 🔥 ',
        time:'yesterday',
        icon:''
    },
    {
        pic:'client3.jpeg',
        name:'Junior',
        about:'🎙️ Voice message',
        time:'yesterday',
        icon:''
    },
]
import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { TbPinnedFilled } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { PiChecks } from "react-icons/pi";
import { BsCameraVideo } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";
import { BsFillSendFill } from "react-icons/bs";
export default function Messages() {
  return (
    <main className='pt-4 px-8 overflow-x-hidden  '>
    <div className='bg-white'>
          {/* -------------fuul page----------- */}
      <div className='grid md:grid-cols-2 grid-cols-1 md:-space-x-36 '>
        {/* --------------left half page---------- */}
        <div className='md:w-[322px] w-full h-[510px] md:overflow-y-scroll p-4  bg-white space-y-4 '>
        <div className='flex items-center justify-between'><h1 className='p-1 text-[30px] font-bold text-customGray-dark1 '>Messages</h1>
        <span className='text-3xl font-bold text-secondaryP'><AiOutlineEdit/></span></div>
        <div className='flex items-center justify-start bg-backGd h-[46px] md:w-[262px] w-[90%] rounded-lg'>
            <span className='h-full w-[20%] text-customGray-dark4 text-[16px] flex justify-center items-center'><FaSearch/></span>
            <h1 className='h-full md:w-[262px] text-customGray-dark4 text-[16px] flex justify-start items-center'>Search...</h1>
        </div>
        <span className='flex items-center gap-1 text-[12px] text-[#A9ABAD]'><TbPinnedFilled/>PINNED</span>
        {/* ----------------code for left side list start------------- */}
      <div className='space-y-2 '>
        {
            list.map((items,index)=>(
                <div key={index} className='w-full h-[60px] flex justify-between items-center gap-4 '>
                <div className='relative flex gap-4 items-center'>
                    <img src={items.pic} alt="img" className=' md:size-12 size-8 sm:size-12 rounded-full' />
                    {index===0 &&<div className='size-[10px] sm:size-[12px] rounded-full md:ml-9 md:mt-6 sm:ml-9 mt-5 ml-6 border-[1px] border-white bg-secondaryG absolute'></div>}
                <div className='flex flex-col text-customGray-dark1 md:text-[16px] sm:text-2xl text-lg  font-semibold'> {items.name} <span className={`${index===0?'text-secondaryG':''} text-customGray-dark3 md:text-[14px] sm:text-[18px] text-[13px]`}>{items.about}</span></div>
                </div>
                <div className='flex justify-end flex-col text-customGray-dark3 md:text-[13px] sm:text-lg text-sm '>
                    <span>{items.time}</span>
                   <div className='w-full flex justify-end'>
                   <span className={`size-4 text-sm text-white flex mid ${index===0 ?'bg-secondaryR':'bg-transparent '} rounded-full`}>{items.icon}</span>
                {index===1 && <span className='size-6 text-2xl text-secondaryG flex mid bg-transparent font-semibold rounded-full'><PiChecks/></span>}
                   </div>
                 </div>
            </div>
            ))
        }
      </div>
                    <span className='flex items-center gap-1 text-[#A9ABAD] text-[14px]'><MdOutlineMessage/>All Message</span>
                    <div>
                    <div className='space-y-2'>
        {
            list2.map((items,index)=>(
                <div key={index} className='w-full h-[60px] flex justify-between items-center gap-4 '>
                <div className=' relative flex gap-4 items-center'>
                    <img src={items.pic} alt="img" className=' md:size-12 sm:size-12 size-8 rounded-full' />
                    {(index===1 ||index===2 ||index==4) &&<div className='size-[10px] sm:size-[12px] rounded-full md:ml-9 ml-6 md:mt-6 sm:ml-9 sm:mt-6 mt-4 border-[1px] border-white bg-secondaryG absolute'></div>}
                <div className='flex flex-col text-customGray-dark1 md:text-[16px] sm:text-2xl text-lg font-semibold'> {items.name} <span className='text-customGray-dark3 md:text-[14px] sm:text-[18px] text-[13px]'>{items.about}</span></div>
                </div>
                <div className='flex justify-end flex-col text-customGray-dark3 md:text-[13px] sm:text-lg text-sm '>
                    <span>{items.time}</span>
                   <div className='w-full flex justify-end'>
                   <span className={`size-4 text-sm text-white flex mid ${index===1 ||index===2 ?'bg-secondaryR':'bg-transparent '} rounded-full`}>{items.icon}</span>
                   {(index===0 ||index===4) && <span className='size-6 text-2xl text-secondaryG flex mid bg-transparent font-semibold rounded-full'><PiChecks/></span>}
                   </div>
                 </div>
            </div>
            ))
        }
      </div>
                    </div>
                    {/* ----------------code for left side list ends------------- */}
        </div>
        {/* ------------------Right half page---------- */}
        <div className=' md:w-[653px] w-[100%] h-[510px] md:overflow-y-hidden  md:overflow-x-hidden     md:p-4 mt-80 md:mt-0 bg-white'>
            <div className='bg-white rounded-xl border-[#e6e4e4] border-[1px] w-full md:h-[490px] h-[1100px]'>
<div className='w-full h-[80px] mid p-4 bg-white rounded-xl border-[#e6e4e4]  border-b-[1px]'>
<div className='w-full h-[60px] flex justify-between items-center gap-4 '>
                <div className='relative flex gap-4 items-center'>
                    <img src="client2.jpeg" alt="img" className=' md:size-12 size-8 rounded-full' />
                    <div className='size-[10px] rounded-full ml-9 mt-6 border-[1px] border-white bg-secondaryG absolute'></div>
                <div className='flex flex-col text-customGray-dark1 md:text-[14px] text-sm font-semibold'> M Ahmad <span className=' text-customGray-dark3 text-[12px]'>Active Now</span></div>
                </div>
                <div className='flex justify-end gap-2 text-customGray-dark3 text-lg '>
                <div className='bg-backG md:text-2xl text-lg mid text-customGray-dark1 md:size-10 size-7 rounded-full'>
                <BsCameraVideo/>
                </div>
                <div className='bg-backG md:text-2xl text-lg mid text-customGray-dark1 md:size-10 size-7 rounded-full'>
                <FiPhone/>
                </div>
                <div className='bg-backG md:text-2xl text-lg mid text-customGray-dark1 md:size-10 size-7 rounded-full'>
                <BiDotsVerticalRounded/>
                </div>
                 </div>
            </div>
</div>
                        {/* -----------Active chart section ----------- */}
                        <div className='w-full h-[350px] md:overflow-y-scroll md:overflow-x-hidden '>
<div className='w-[653px] h-[100px] mt-4  p-4 '>
<div className='w-full h-full flex  gap-4 '>
                <div className=' w-full h-full flex gap-4 items-start'>
                    <img src="/client2.jpeg" alt="img" className=' md:size-12 size-8 rounded-full' />
                <div className=''>
                <div className='bg-backG mid p-2  rounded-b-xl  rounded-tr-xl md:h-[90px] h-[150px] md:w-[70%] w-[30%] text-[13px]'>
                    <p>Hi, Let's plan a tour to the northern areas. Imagine exploring the beautiful landscapes, trying local food, and having a blast together. It will be unforgettable! What do you think?</p>
                </div>
                <div className='text-customGray-dark3 mt-[2px] w-[70%] -ml-56 md:ml-0 flex justify-end'>4:30 PM</div>
                </div>
                </div>
                
            </div>
</div>
<div className='w-full h-[100px] md:mt-6 mt-24  p-4 bg-white '>
<div className='w-full h-full flex  gap-4 '>
                <div className=' w-full h-full flex items-start gap-4 '>
                <div className='flex flex-col justify-end items-end'>
                <div className='bg-secondaryP text-white mid p-2  rounded-b-xl rounded-tl-xl md:h-[60px] h-[120px] md:w-[70%] w-full text-[13px]'>
                    <p>Hi, That sounds amazing! Let's start planning our unforgettable trip to the northern areas!</p>
                </div>
                </div>
                    <img src="/profile-p.png" alt="img" className=' md:size-12 size-8 rounded-full' />
                </div>
                
            </div>
</div>
<div className='w-full h-[100px] mt-16 md:mt-0  p-4 bg-white '>
<div className='w-full h-full flex  gap-4 '>
                <div className=' w-full h-full flex gap-4 items-start'>
                    <img src="/client2.jpeg" alt="img" className=' md:size-12 size-8 rounded-full' />
                <div className=''>
                <div className='bg-backG rounded-b-xl rounded-tr-xl mid p-2   md:h-[60px] h-[150px] md:w-[70%] w-full text-[13px]'>
                    <p>
                    Awesome! I can't wait to start planning and make this adventure unforgettable!</p>
                </div>
                </div>
                </div>  
            </div>
            <div className='mt-24 md:mt-0'>
                <div className='bg-backG mid p-2  rounded-b-xl rounded-tr-xl h-[70px] md:w-[60%] w-full text-[13px]'>
                    <p>Great! How about we finalize the dates this weekend? Looking forward to it!</p>
                </div>
                <div className='text-customGray-dark3 mt-[2px] w-[60%] flex justify-end'>4:30 PM</div>
                </div>   
</div>
<div className='w-full h-[100px] md:mt-16 mt-44  p-4 bg-white '>
<div className='w-full h-full flex  gap-4 '>
                <div className=' w-full h-full flex items-start gap-4 '>
                <div className='flex flex-col justify-end items-end'>
                <div className='bg-secondaryP text-white mid p-2  rounded-b-xl rounded-tl-xl md:h-[60px] h-[130px] md:w-[70%] w-full text-[13px]'>
                    <p>Hi, That sounds amazing! Let's start planning our unforgettable trip to the northern areas!</p>
                </div>
                </div>
                    <img src="/profile-p.png" alt="img" className=' md:size-12 size-8 rounded-full' />
                </div>
                
            </div>
</div>
<div className='w-full h-[60px] mt-16 md:mt-0   p-4 bg-white '>
<div className='w-full h-full flex  gap-4 '>
                <div className=' w-full h-full flex gap-4 items-start'>
                    <img src="/client2.jpeg" alt="img" className=' md:size-12 size-8 rounded-full' />
                <div className=''>
                <div className='mid p-2  rounded-b-xl rounded-tr-xl h-[60px] md:w-[80%] w-full'>
                    <img src="/voice.png" alt="voice" />
                </div>
                </div>
                </div>
                
            </div>
</div>
<div className='md:fixed md:bottom-16  h-[50px] md:w-[600px] w-[686px] flex items-start justify-center'>
<div className='flex items-center  justify-start border-[1px] border-[#e6e4e4]  mt-12 bg-backGd h-[50px] md:w-[95%] w-[95%] mr-[360px] md:mr-0 rounded-lg'>
            <span className='h-full w-[10%] text-[#757575] text-xl flex justify-center items-center'><GrAttachment/></span>
            <h1 className='h-full md:w-[80%] w-[100%] text-[#757575] text-[13px] flex justify-start items-center'>Type Something...</h1>
            <span className='h-full md:w-[10%] w-[30%] text-secondaryP font-bold text-xl flex justify-center items-center'><BsFillSendFill/></span>
        </div>
</div>
</div>
            </div>
        </div>
      </div>
    </div>
    </main>
  )
}
