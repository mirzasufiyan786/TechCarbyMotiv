import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { Fragment, useState } from 'react'

const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-11T13:00',
    endDatetime: '2022-05-11T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-20T09:00',
    endDatetime: '2022-05-20T11:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-20T17:00',
    endDatetime: '2022-05-20T18:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-06-09T13:00',
    endDatetime: '2022-06-09T14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-13T14:00',
    endDatetime: '2022-05-13T14:30',
  },
]

function classNames(...classes) {
    
  return classes.filter(Boolean).join(' ')
}

export default function Calender() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
  const handelclick=()=>{
    setToggle(!toggle)
  }
  const handelclick2=()=>{
    setToggle2(!toggle2)
  }
  const handelclick3=()=>{
    setToggle3(!toggle3)
  }
  const value=new Date();
  return (
    <main className='px-8 py-4 '>
    <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-between">
    <h1 className=' font-bold text-[30px] text-customGray-dark1 '>Calender</h1>
    {/* ------------drop down code starts----------- */}
    <div>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 '>
        {/* ------------------1st drop down---------------- */}
                <div className="1stdoendrop relative">
                <button data-ripple-light="true" onClick={handelclick} data-popover-target="menu"
      class="w-[106px] h-[44px] select-none rounded-lg  py-3 px-6 bg-white flex items-center gap-2 font-sans text-[16px] font-semibold  text-customGray-dark3 shadow-md transition-all hover:shadow-lg hover:shadow-gray-900/20  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">
      Time <span className='text-customGray-dark4'><FaAngleDown /></span>
    </button>
    {toggle && <ul role="menu" data-popover="menu" data-popover-placement="bottom"
      class=" mt-1 absolute  z-10 min-w-[197px] overflow-auto rounded-b-3xl text-customGray-dark2 bg-white p-3 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
      <li role="menuitem" 
        class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
        Audi
      </li>
      <li role="menuitem" 
        class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
        Mercedes
      </li>
      <li role="menuitem" 
        class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
        BMW 
      </li>
    </ul>}
                </div>
                {/* --------------2nd drop down-------------- */}
                <div className="2stdoendrop relative">
                <button data-ripple-light="true" onClick={handelclick2} data-popover-target="menu"
      class="w-[106px] h-[44px]  select-none rounded-lg  py-3 px-6 bg-white flex items-center gap-2 font-sans text-[16px] font-semibold  text-customGray-dark3 shadow-md transition-all hover:shadow-lg hover:shadow-gray-900/20  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">
      Status<span className='text-customGray-dark4'><FaAngleDown/></span>
    </button>
    {toggle2 && <ul role="menu" data-popover="menu" data-popover-placement="bottom"
      class=" mt-1 absolute  z-10 min-w-[197px] overflow-auto rounded-b-3xl text-customGray-dark2 bg-white p-3 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
      <li role="menuitem" 
        class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
        Audi
      </li>
      <li role="menuitem" 
        class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
        Mercedes
      </li>
      <li role="menuitem" 
        class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
        BMW 
      </li>
    </ul>}
                </div>
                {/* ---------------3rd dropdown------------ */}
                <div className="3nddoendrop relative">
                <button data-ripple-light="true" onClick={handelclick3} data-popover-target="menu"
      class="w-[106px] h-[44px]   select-none rounded-lg  py-3 px-6 bg-white flex items-center gap-2 font-sans text-[16px] font-semibold  text-customGray-dark3 shadow-md transition-all hover:shadow-lg hover:shadow-gray-900/20  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Toyota <span className='text-customGray-dark4'><FaAngleDown/></span>
    </button>
    {toggle3 && <ul role="menu" data-popover="menu" data-popover-placement="bottom"
      class=" -ml-14 mt-1 absolute start-0 z-10 min-w-[197px] overflow-auto rounded-b-3xl text-customGray-dark2 bg-white p-3 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
      <li role="menuitem" 
        class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
        Menu Item 1
      </li>
      <li role="menuitem" 
        class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
        Menu Item 1
      </li>
      <li role="menuitem" 
        class="block w-full cursor-pointer  px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#ebe8e8] hover:bg-opacity-80  active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 rounded-3xl p-2">
        Menu Item 1
      </li>
    </ul>}
                </div>
              </div>
    </div>
    {/* ------------------drop down cord end----------- */}
    </div>
    
                    {/* -------------page divide into section left right------------ */}
   <div className="grid md:grid-cols-2 grid-cols-1 md:-space-x-24 space-x-0 w-full">
    {/* ----------- Left side page ------------- */}
    <div className="space-y-24" >
         {/* ----------- Code for calender Start------------- */}

    <div >
    <div className="md:w-[384px] w-[100%] h-[375px] mt-5  justify-center  ">
  <div className="sm:px-7  md:w-full justify-center">
    <div className="md:grid md:w-full md:divide-gray-200 justify-center">
      <div className="bg-white rounded-lg w-full md:w-[400px]  md:h-[450px] p-4 md:p-0 justify-center">
        <div className="flex items-center justify-between mt-2 md:mt-[10px] ">
          <h2 className="flex-auto font-bold text-[24px] md:text-xl p-3">
            {format(firstDayCurrentMonth, 'MMMM, yyyy')}
          </h2>
          <div className="flex gap-2 md:gap-4">
            <button
              type="button"
              onClick={previousMonth}
              className="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <FaChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={nextMonth}
              type="button"
              className="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <FaChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-[60%] mt-3 h-[35px] bg-[#dfd8d8] flex items-center justify-evenly rounded-3xl mx-auto md:ml-20">
          <div className="h-full w-[342px] text-sm md:text-[16px] rounded-3xl flex justify-center items-center">Week</div>
          <div className="h-full w-[342px] text-sm md:text-[16px] bg-secondaryR rounded-3xl flex justify-center items-center">Month</div>
        </div>
        <div className="grid grid-cols-7 mt-8 text-xs md:text-[16px] leading-3 text-center text-gray-500">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="grid grid-cols-7 mt-2 text-xs md:text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIdx === 0 && colStartClasses[getDay(day)],
                'py-1.5'
              )}
            >
              <button
                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  isEqual(day, selectedDay) && 'text-white',
                  !isEqual(day, selectedDay) &&
                    isToday(day) &&
                    'text-red-500',
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    'text-gray-900',
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    'text-gray-400',
                  isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                  isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    'bg-secondaryR',
                  !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    'font-semibold',
                  'mx-auto flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full'
                )}
              >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                  {format(day, 'd')}
                </time>
              </button>

              <div className="w-1 h-1 mx-auto mt-1">
                {meetings.some((meeting) =>
                  isSameDay(parseISO(meeting.startDatetime), day)
                ) && (
                  <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
        {/* --------------calender code ends---------------- */}
      {/* --------------Code for Upcoming Events----------- */}
      <div className='bg-white rounded-lg mt-5 h-auto md:h-[461px] w-full md:w-[400px] p-3'>
  <h1 className='p-1 font-bold text-[24px] md:text-2xl text-customGray-dark1'>Upcoming Events</h1>
  <div className='w-full h-[60px] flex gap-2 md:gap-5 items-center bg-white'>
    <p className='text-sm md:text-[14px] text-customGray-dark3'>08:00</p>
    <div className='text-black w-[70%] md:w-[80%] items-center'>
      <hr />
    </div>
  </div>
  <div className='w-full h-[60px] flex gap-2 md:gap-5 items-center bg-white'>
    <p className='text-sm md:text-[14px] text-customGray-dark3'>09:00</p>
    <div className='w-[70%] md:w-[80%] h-full items-center flex justify-between rounded-lg bg-secondaryP p-2 md:p-3 text-white'>
      <div>
        <h1 className='text-[14px] md:text-base'>Drift Series First Round</h1>
        <h2 className='text-[14px]  md:text-base'>JDM</h2>
      </div>
      <div className='flex mt-3 md:mt-7'>
        <img src="/client2.jpeg" alt="pic" className='w-6 h-6 md:w-8 md:h-8 rounded-full' />
        <img src="/client3.jpg" alt="pic" className='w-6 h-6 md:w-8 md:h-8 rounded-full' />
        <div className='w-6 h-6 md:w-8 md:h-8 bg-[#B37DFC] text-white rounded-full flex justify-center items-center text-xs md:text-sm'>+8</div>
      </div>
    </div>
  </div>
  <div className='w-full h-[60px] flex gap-2 md:gap-5 items-center bg-white'>
    <p className='text-sm md:text-[14px] text-customGray-dark3'>10:00</p>
    <div className='text-black w-[70%] md:w-[80%] items-center'>
      <hr />
    </div>
  </div>
  <div className='w-full h-[40px] flex gap-2 md:gap-5 items-center bg-white'>
    <p className='text-sm md:text-md text-secondaryR'>10:15</p>
    <div className='text-secondaryR w-[70%] md:w-[80%] items-center relative'>
      <hr />
      <div className='bg-secondaryR w-2 h-2 rounded-full absolute left-0 top-[-3px]'></div>
    </div>
  </div>
  <div className='w-full h-[60px] flex gap-2 md:gap-5 items-center bg-white'>
    <p className='text-sm md:text-[14px] text-customGray-dark3'>11:00</p>
    <div className='text-black w-[70%] md:w-[80%] items-center'>
      <hr />
    </div>
  </div>
  <div className='w-full h-[60px] flex gap-2 md:gap-5 items-center bg-white'>
    <p className='text-sm md:text-[14px] text-customGray-dark3'>12:00</p>
    <div className='w-[70%] md:w-[80%] h-full items-center flex justify-between rounded-lg bg-secondaryG p-2 md:p-3 text-white'>
      <div>
        <h1 className='text-[14px]  md:text-base'>Drift Series First Round</h1>
        <h2 className='text-[14px]  md:text-base'>JDM</h2>
      </div>
      <div className='flex mt-3 md:mt-7'>
        <img src="/client2.jpeg" alt="pic" className='w-6 h-6 md:w-8 md:h-8 rounded-full' />
        <img src="/client3.jpg" alt="pic" className='w-6 h-6 md:w-8 md:h-8 rounded-full' />
        <div className='w-6 h-6 md:w-8 md:h-8 bg-[#50C777] text-white rounded-full flex justify-center items-center text-xs md:text-sm'>+8</div>
      </div>
    </div>
  </div>
  <div className='w-full h-[60px] flex gap-2 md:gap-5 items-center bg-white'>
    <p className='text-sm md:text-[14px] text-customGray-dark3'>01:00</p>
    <div className='text-black w-[70%] md:w-[80%] items-center'>
      <hr />
    </div>
  </div>
</div>

     </div>
     {/* ----------------- Right side of page---------- */}
     <div className="bg-white h-auto md:h-[930px] w-[95%] md:w-[623px] mt-5  rounded-xl">
  <div className="bg-customGray-dark5 md:h-[70px] h-[150px] w-full rounded-t-xl flex justify-evenly p-4 flex-col md:flex-row gap-2 md:gap-0">
    <div className="flex items-center justify-center text-customGray-dark1 text-base md:text-xl gap-2 rounded-xl bg-white h-[33px] w-full md:w-[80px]">Day<span><FaAngleDown/></span></div>
    <div className="flex items-center justify-center text-md rounded-xl bg-white h-[33px] w-full md:w-[174px] border-none">
      <DatePicker value={value} />
    </div>
    <div className="flex items-center justify-center text-customGray-dark1 text-base md:text-xl rounded-xl bg-white h-[33px] w-full md:w-[80px] gap-2">
      <span></span><FaChevronLeft/><span><FaChevronRight/></span>
    </div>
  </div>
  <div className="relative bg-white h-[95px] w-full flex border-b-[1px] border-[line]">
    <div className="h-full w-[20%] border-r-[1px] border-[line] p-2 text-[12px] text-customGray-dark3  md:text-base">08:00 AM</div>
    <div className="h-full w-[80%] flex flex-col items-center justify-center">
      <span></span>
      <hr className="text-gray-500 w-full" />
      <span className="absolute w-full md:w-[420px] mt-12">
        <div className="w-[80%] ml-5 md:ml-0 md:w-[420px] md:h-[70px] h-[60px] md:border-[#ab88dd] md:border-2 items-center flex justify-between md:rounded-2xl rounded-lg bg-secondaryP p-3 text-[13px] md:text-[13px] text-white">
          <div>
            <h1>08:00</h1>
            <h1>Moto Track Day</h1>
            <h2>All Motorbikes</h2>
          </div>
          <div className="flex md:-mt-10 -mt-5">
            <h1>154K</h1>
          </div>
        </div>
      </span>
    </div>
  </div>
  <div className="bg-white h-[95px] w-full flex border-b-[1px] border-[line]">
    <div className="h-full w-[20%] border-r-[1px] border-[line] p-2 text-[12px] text-customGray-dark3md:text-base">09:00 AM</div>
    <div className="h-full w-[80%] flex flex-col items-center justify-center">
      <span></span>
      <hr className="text-gray-500 w-full" />
      <span></span>
    </div>
  </div>
  <div className="relative bg-white h-[95px] w-full flex border-b-[1px] border-[line]">
    <div className="h-full w-[20%] border-r-[1px] border-[line] p-2 text-[12px] text-customGray-dark3md:text-base">10:00 AM</div>
    <div className="h-full w-[80%] flex flex-col items-center justify-center">
      <span></span>
      <hr className="text-gray-500 w-full" />
      <span className="absolute w-full md:w-[420px] md:-mt-16 -mt-24">
        <div className="w-[80%] ml-5 md:ml-0 md:w-[420px] md:h-[100px] h-[80px] items-center  flex justify-between rounded-2xl bg-secondaryB p-3 py-16 text-sm md:text-xl text-white">
          <div className="flex gap-2 text-[13px]">
            <div className="md:h-[90px] h-[65px] w-1 rounded-2xl mt-2 md:mt-0 bg-[#9D8DFE]"></div>
            <div>
              <h1>09:45</h1>
              <h1>Drift Series Second Round</h1>
              <h2>JMD</h2>
            </div>
          </div>
          <div className="flex -mt-24 text-[16px]">
            <h1>1h 45 min</h1>
          </div>
        </div>
      </span>
    </div>
  </div>
  <div className="relative bg-white h-[95px] w-full flex border-b-[1px] border-[line]">
    <div className="h-full w-[20%] border-r-[1px] border-[line] p-2 text-[12px] text-customGray-dark3 md:text-base">11:00 AM</div>
    <div className="h-full w-[80%] flex flex-col items-center justify-center">
      <span></span>
      <hr className="text-gray-500 w-full" />
      <span className="absolute w-full md:w-[420px] mt-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          <div className="w-[80%] ml-5 md:ml-0 md:w-[210px] md:h-[90px] h-[70px] border-[#7e8af7] border-2 items-center flex justify-between rounded-2xl bg-secondaryB p-3 text-xs md:text-[12px] text-white">
            <div>
              <h1>10:00 AM</h1>
              <h1>Moto Track Day</h1>
              <h2>All Motorbikes</h2>
            </div>
            <div className="flex md:-mt-10 -mt-8">
              <h1>154K</h1>
            </div>
          </div>
          <div className="w-[80%] ml-5 md:ml-0 md:w-[210px] md:h-[90px] h-[80px] border-[#c9c4cf] border-2 items-center flex justify-between rounded-2xl bg-gradient-to-tl from-slate-400 to-gray-800 p-3 text-xs md:text-[12px] text-white">
            <div>
              <h1>10:45 AM</h1>
              <h1>Moto Track Day</h1>
              <h2>All Motorbikes</h2>
            </div>
            <div className="flex md:-mt-10 -mt-9">
              <h1>154K</h1>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
  <div className="bg-white h-[95px] w-full flex border-b-[1px] border-[line]">
    <div className="h-full w-[20%] border-r-[1px] border-[line] p-2 text-[12px] text-customGray-dark3 md:text-base">12:00 PM</div>
    <div className="h-full w-[80%] flex flex-col items-center justify-center">
      <span></span>
      <hr className="text-gray-500 w-full" />
      <span></span>
    </div>
  </div>
  <div className="relative bg-white h-[95px] w-full flex border-b-[1px] border-[line]">
    <div className="h-full w-[20%] border-r-[1px] border-[line] p-2 text-[12px] text-customGray-dark3 md:text-base">01:00 PM</div>
    <div className="h-full w-[80%] flex flex-col items-center justify-center">
      <span></span>
      <hr className="text-gray-500 w-full" />
      <span className="absolute w-full md:w-[420px] -mt-16">
        <div className="w-[80%] ml-5 md:ml-0 md:w-[420px] md:h-[70px] h-[60px] border-[#b9c4b6] border-2 items-center flex justify-between rounded-2xl bg-secondaryG p-3 text-xs md:text-[12px] text-white">
          <div>
            <h1>08:00</h1>
            <h1>Moto Track Day</h1>
            <h2>All Motorbikes</h2>
          </div>
          <div className="flex -mt-10">
            <h1>154K</h1>
          </div>
        </div>
      </span>
    </div>
  </div>
  <div className="relative bg-white h-[95px] w-full flex border-b-[1px] border-[line]">
    <div className="h-full w-[20%] border-r-[1px] border-[line] p-2 text-[12px] text-customGray-dark3 md:text-base">02:00 PM</div>
    <div className="h-full w-[80%] flex flex-col items-center justify-center">
      <span></span>
      <hr className="text-gray-500 w-full" />
      <span className="absolute w-full md:w-[420px] -mt-12">
        <div className="w-[80%] ml-5 md:ml-0 md:w-[420px] md:h-[90px] h-[70px] border-[#f1ddcbad] border-2 items-center flex justify-between rounded-2xl bg-secondaryO p-3 text-xs md:text-[12px] text-white">
          <div>
            <h1>08:00</h1>
            <h1 className="text-[14px]">Moto Track Day</h1>
            <h2>All Motorbikes</h2>
          </div>
          <div className="flex md:-mt-12 -mt-9">
            <h1>154K</h1>
          </div>
        </div>
      </span>
    </div>
  </div>
  <div className="bg-white h-[95px] w-full flex border-b-[1px] border-[line]">
    <div className="h-full w-[20%] border-r-[1px] border-[line] p-2 text-[12px] text-customGray-dark3 md:text-base">03:00 PM</div>
    <div className="h-full w-[80%] flex flex-col items-center justify-center">
      <span></span>
      <hr className="text-gray-500 text-xs md:text-xl w-full" />
      <span></span>
    </div>
  </div>
  <div className="relative bg-white h-[95px] w-full flex">
    <div className="h-full w-[20%] border-r-[1px] border-[line] p-2 text-[12px] text-customGray-dark3 md:text-base">04:00 PM</div>
    <div className="h-full w-[80%] flex flex-col items-center justify-center">
      <span className="absolute w-full md:w-[420px] -mt-28">
        <div className="w-[80%] ml-5 md:ml-0 md:w-[420px] md:h-[100px] h-[80px] border-[#f1ddcbad] border-2 items-center flex justify-between rounded-2xl bg-gradient-to-tl from-slate-400 to-gray-800 p-3 text-xs md:text-[12px] text-white">
          <div>
            <h1>10:45</h1>
            <h1 className="text-[14px]">Drift Series Second Round</h1>
            <h2>All Motorbikes</h2>
          </div>
          <div className="flex md:-mt-14 -mt-8">
            <h1>58K</h1>
          </div>
        </div>
      </span>
      <hr className="text-gray-500 w-full" />
      <span></span>
    </div>
  </div>
</div>

   </div>
    </main>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]