import React from 'react'

const Exclusive = () => {
  return (
      <div className=' bg-gradient-to-br from-primary-cta to-cyan-950 bg-opacity-0 text-white grid place-items-center  ' >
          <div className='w-6/12 pt-[4.5rem] pb-[4.5rem] '>
              <p className=' flex justify-center  text-4xl font-bold text-center '>Get Exclusive Updates</p> 
              <p className='text-2xl font-medium text-center break-words pt-8'  >Don't miss out on the opportunity to stay ahead of the game and discover the hottest
                trends in the fashion world. Subscribe now <br /> and step up your fashion game with us. <br />
                Email address
              </p>

                <div className='flex justify-center gap-4 px-[18px] pt-16 flex-wrap overflow-hidden '>
                  <input type="text" placeholder='Enter your email' className='pl-5 w-8/12 py-5 text-black focus:outline-none rounded-2xl text-2xl font-medium' />
                  <button className='bg-primary-green text-white px-8 whitespace-nowrap rounded-2xl text-2xl font-bold'>Notify me</button>
                </div>
            </div> 
       </div>
  )
}

export default Exclusive;