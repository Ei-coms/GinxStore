import React from 'react'
import {ReactComponent as Phones } from "../../../assets/images/phones.svg"

const Sales = () => {
const phonesArray = Array.from({ length: 8 }, (_, index) => ( 
  <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Phones />
      </div>
  ));
const productName = ['Phones & Tablets', 'Groceries', 'Computing Deals', 'Televisions', 'Refrigerators', 'Mobile Accessories', 'Generators', 'Sneakers']

  return (
    <div className='bg-primary px-16 py-36'>
    <div className='bg-primary-cta px-14 py-16 rounded-3xl'>
            <p className='text-white flex justify-center items-center text-6xl font-bold'>Most sales</p>

            <div className='pt-16 grid grid-cols-4 gap-8'>
                  {phonesArray.map((phone, index) => (
                        <span key={index} className='  py-2 px-4 text-white text-center  text-2xl font-bold relative group '>{phone}
                           <p className='pt-3'>{productName[index]}</p> 
                           <div className='absolute inset-0 border-2 border-transparent group-hover:border-cyan-900 rounded-2xl group-hover:shadow-lg transition-all duration-300'
                            style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' }}/>
                        </span>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Sales;