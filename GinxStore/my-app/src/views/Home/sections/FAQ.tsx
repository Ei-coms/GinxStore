import React from 'react'
import Collapseable from '../../../components/Collapseable/collapseable';

const FAQ = () => {

  const Click = () => {}

  return (
    <div className='bg-primary py-40'>
        <p className='text-white flex justify-center items-center text-6xl font-bold'>Frequently Asked Questions</p>

        <div className='flex flex-col justify-center items-center gap-y-20 pt-28'>
            <Collapseable text='How long does delivery take' subText='Shipping times can vary depending on your location and the shipping method chosen. Typically standard shipping Takes 3-5 business days' onClick={Click} />
            <Collapseable text='What is your return policy' subText="We offer 30-day return policy. If you're not satisfied with your purchase, you can return within 30 days of receipt for a refund or exchange. Please make sure
             the item is in its origin condition with all tags and packaging intact. " onClick={Click} />
            <Collapseable text='Do you offer international shipping' subText='Yes we offer international shipping to select countries, During the checkout process, 
            You can enter you shipping address to see if we ship to your location, Please note that additional customs fee and taxes may apply.' onClick={Click} />
            <Collapseable text='Can i cancel my order' subText='If you need to make changes to your order or cancel it, Please contact our custimer support ass soon as possible. We would do our best to accomodate your request, 
            but please that when the order has been processed and shipped, changes or cancellation may not be possible.  ' onClick={Click} />
        </div>
    </div>
  )
}

export default FAQ;