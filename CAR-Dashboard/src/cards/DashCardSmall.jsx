
import React, { useState } from 'react';

const DashCardSmall = ({item,index}) => {
//   const [currentSkill, setCurrentSkill] = useState({ title: 'HTML', percent: 95 });
  const circumference = 2 * Math.PI * 32;
  const circumference2 = 2 * Math.PI * (item.value);
  const adjustedPercent = index === 1 ? 50 : item.percent;
  const circleClass = `
  ${index === 0 ? 'text-white' : ''}
  ${index === 1 ? 'text-[#FF7E86]' : ''}
  ${index === 2 ? 'text-secondaryP' : ''}
  ${index === 3 ? 'text-secondaryY' : ''}
`.trim();

  return (
    <main className={`${index === 0 ? 'bg-secondaryP' : 'bg-white'} h-[280px] md:w-[232px] md:h-[266px] sm:w-[190px] sm:h-[240px] w-[240px] gap-2 grid justify-items-center space-y-2 p-4 rounded-xl`}>
    <div><img src={item.icon} alt="icon" /></div>
    <div className={`${index === 0 ?'text-white' :'text-customGray-dark1'} text-[24px]  `}>{item.title}</div>
    <div className="flex items-center justify-center  bg-transparent text-gray-100 size-[100px]">
      <div className="relative">
        <svg className="transform rotate-[130deg] w-72 h-72">
          <circle
            cx="145"
            cy="145"
            r="40"
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeWidth="10"
            fill="transparent"
            className={`${index===0 ? "text-[#B37EFC]" : 'text-[#F4F5F9]'}`}
          />
          <circle
            cx="145"
            cy="145"
            r="40"
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference2}
            strokeDashoffset={circumference - (adjustedPercent / 100) * circumference}
            className={`${circleClass}`}
          />
        </svg>
        <span className={`${index === 0 ? 'text-white' : 'text-black'} absolute inset-0 flex items-center justify-center text-[20px] `}>{`${item.percent}%`}</span>
      </div>
    </div>
    </main>
  );
};

export default DashCardSmall ;
