
import React from 'react'

export default function DashCardLarge({items ,index}) {

  return (
    <main>
      <div className='ml-3 md:w-[488px] md:h[332px] sm:w-[450px] w-[90%] h-[350px] bg-white flex items-start flex-col p-4 space-y-4 rounded-xl '>
        <div className='text-[22px] text-[#242731]'><span className='font-bold text-customGray-dark1'>{items.title}</span> Statistics</div>
        <div className={`flex h-[223px] md:w-[418px] w-[270px] items-center md:justify-between justify-start gap-5 
         
           `}>
      <div className={`flex items-center mr-[150px] md:mr-0 md:space-x-5 space-x-2 md:text-[10px] w-[167px] h-[20px] text-[15px] text-customGray-dark2 ${index ===1 ?
         'bg-[#F5F4F6] rounded-3xl  ' : 'bg-white rounded-3xl p-2'}`}>
        <button className={`${index === 1 ? 'bg-secondaryO':'bg-secondaryB'} text-white rounded-xl w-14 h-[20px]`}>Day</button>
        <button>Week</button>
        <button>Month</button>
      </div>
      <div className={`
        -ml-36 w-[100px]
        md:text-[14px] text-[15px]  text-customGray-dark2`}>
        {items.miles}
      </div>
    </div>

        <div className='relative ml-4'>
          <img src={items.pic} alt="img"
          className='w-[418px] h-[223px] ' />
          <img src="/Barinfo.png" alt="" className={`${index === 0 ? 'absolute top-6 left-32' : 'hidden'}`} />
        </div>
      </div>
    </main>
  )
}
