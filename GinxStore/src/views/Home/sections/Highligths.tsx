import React from 'react'
import Tennis from '../../../assets/images/tennis.jpg'
import GinxButton from '../../../components/GinxButton'

const Highligths = () => {

    const Shop = () => console.log("shop");


  return (
    <div style={{backgroundImage: `url(${Tennis})`, backgroundColor: 'rgba(0, 0, 0, 0.5)',  backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} >
       
       <div className='text-white pl-16   pt-36 pb-44'> 
            <div>
            <p className=' text-[55px] font-bold'>HIGHLIGHTS <br/> GINXSTORE <br/> WITH LIMITLESS CHOICES <br/></p>
            <p className='text-3xl pt-[30px]'>Our Purpose is to move the world forward. We take action<br/> by building community, protecting our planet and increasing <br/>access to sport.</p>
            </div>
            
            <GinxButton text='Shop Now' onClick={Shop} />  
        </div>
    </div>
  )
}

export default Highligths;