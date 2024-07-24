import React from 'react'
import DashCardSmall from '../cards/DashCardSmall'
import DashCardLarge from '../cards/DashCardLarge'
import DashCArCards from '../cards/DashCArCards'

// list for Dash small Cards
const list = [
  {
    icon: '/1st-c.png',
    title: 'Energy',
    percent: '45',
    value: '32'
  },
  {
    icon: '/2nd-c.png',
    title: 'Range',
    percent: '157k',
    value: '33'
  },
  {
    icon: '/3rd-c.png',
    title: 'Break fluid',
    percent: '9',
    value: '34.5'
  },
  {
    icon: '/4th-c.png',
    title: 'Tire Wear',
    percent: '25',
    value: "32"
  },
]

// list for Dash Lage Cards
const listLArgecard = [
  {
    title: 'Miles',
    miles: '256 Miles',
    pic: '/barChat.png',
  },
  {
    title: 'Car',
    miles: '20 Feb 2020',
    pic: '/graph.png',
  }
]
// List for Car card
const ListCarCards = [
  {
    percent: '64% ',
    car: '/Car1.png',
    carname: 'Mini Copper',
    k: '132K',
    price: '$32/h',
    bgcl:'#E1DFA4'
  },
  {
    percent: '74% ',
    car: '/Car2.png',
    carname: 'Porsche 911 Carrera',
    k: '130K',
    price: '$28/h',
    bgcl:'#E3ECF1'
  },
  {
    percent: '82% ',
    car: '/Car3.png',
    carname: 'Porsche 911 gt3 rs',
    k: '291K',
    price: '$49/h',
    bgcl:'#F4E3E5'
  }
  
]
export default function Dashboard() {
  return (
    <main>
       <h1 className='block md:hidden font-bold  pl-5 pt-6 text-3xl   text-customGray-dark1 mb-5'>TechCar by Motiv.</h1>
                                    {/* Small Cards */}
      <div className="smallCards">
        <div className='p-10 grid
         sm:gap-1 sm:justify-items-center  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 md:justify-evenly justify-items-center space-y-3 md:space-y-0  overflow-hidden'>
          {
            list.map((items, index) => (
              <DashCardSmall item={items} key={index} index={index} />
            ))
          }
        </div>
      </div>
                                  {/* GRAPH CARDS */}

      <div className="largeCard grid sm:justify-items-center md:grid-cols-2 grid-cols-1 gap-3 md:justify-evenly justify-items-center">
        {
          listLArgecard.map((items, index) => (
            <DashCardLarge
              key={index}
              items={items}
              index={index}
            />
          ))
        }
      </div>
                                          {/* Card Cards */}
      <div className="carCards ">
        <div className='md:p-10 p-3 grid md:grid-cols-3 grid-cols-1  gap-3 md:justify-evenly sm:justify-items-center justify-items-center '>
          {
            ListCarCards.map((items,index)=>(
              <DashCArCards
              key={index}
              items={items}
              />
            ))
          }
        </div>
      </div>
    </main>
  )
}
