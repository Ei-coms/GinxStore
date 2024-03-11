import React from 'react'
import {ReactComponent as Phones } from "../../../assets/images/phones.svg"

const TopRated = () => {

  const phonesArray = Array.from({ length: 5 }, (_, index) => ( 
    <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Phones />
        </div>
    ));

  const TopRatedTextArray = [ 'Fngeen 05 Calender sp...', 'S23 ultra smartphone...', 'Nike sb Dunk low De...', 'Ace Elec WL82 Blue...', 'Sony Playstation 5(P..' ];
  const TopRatedPriceArray = ['₦ 28,000', '₦ 28,000', '₦ 37,000', '₦ 6,000', '₦ 550,000' ];

  return (
    <div className='bg-primary px-16 py-20'>
    <div className='bg-primary-cta px-14 py-16 rounded-3xl'>
            <p className='text-white flex justify-center items-center text-6xl font-bold'>Top Rated Sales</p>

            <div className='pt-16 grid grid-cols-4 gap-8 '>
                  {phonesArray.map((phone, index) => (
                        <span key={index} className='text-white text-center  text-2xl font-bold relative group '>{phone}
                           <p className='text-xl font-normal'>{TopRatedTextArray[index]}</p>
                           <p className=' text-left pl-10 pt-3'>{TopRatedPriceArray[index]} </p> 
                           <div className='absolute inset-0 border-2 border-transparent group-hover:border-cyan-900 rounded-2xl group-hover:shadow-lg transition-all duration-300'
                            style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' }}/>
                        </span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TopRated