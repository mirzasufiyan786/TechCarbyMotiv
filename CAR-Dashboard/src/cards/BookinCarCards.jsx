import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { ImLoop } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

export default function BookingCarCards({ items }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/bookingdetailcars', { state: { imageSrc: items.pic ,
      carname: items.name
    } });
  };

  const [isLiked, setIsLiked] = useState(false);
  const [heart, setHeart] = useState(FaRegHeart);
  const [heartColor, setHeartColor] = useState('text-customGray-dark3');

  const like = () => {
    if (isLiked) {
      setHeart(FaRegHeart);
      setHeartColor('text-customGray-dark3');
    } else {
      setHeart(FaHeart);
      setHeartColor('text-secondaryR');
    }
    setIsLiked(!isLiked);
  };

  return (
    <main>
      <div className='bg-white cursor-pointer md:w-[325px] sm:w-[270px] w-[300px] shadow-lg h-[267px] flex space-y-3 items-start flex-col p-[24px] rounded-xl'>
        <div className='flex items-center justify-between w-full text-xl gap-3'>
          <h1 className='text-[18px] text-customGray-dark1 font-bold'>{items.name}</h1>
          <span onClick={like} className={heartColor}>{heart}</span>
        </div>
        <div><h1 className='text-[16px]'>{items.title}</h1></div>
        <div className='w-full flex items-center justify-center'>
          <img
            src={items.pic}
            alt="car"
            onClick={handleClick}
            className='hover:scale-125 h-[115px] w-[250px] transition-all duration-300 cursor-pointer'
          />
        </div>
        <div className='flex justify-between w-full'>
          <div>
            <ul className='flex text-[16px] text-customGray-dark3 items-center gap-2'>
              <li className='flex items-center gap-2'><LuUser2 />96</li>
              <li className='flex items-center gap-2'><ImLoop />Manual</li>
            </ul>
          </div>
          <div className='text-[18px] text-customGray-dark1 font-bold '><h2>{items.price} <span className='text-customGray-dark3 '>/d</span></h2></div>
        </div>
      </div>
    </main>
  );
}
