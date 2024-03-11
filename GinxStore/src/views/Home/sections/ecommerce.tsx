import React from 'react'
import styles from './background.module.css'
import ToolBar from '../../../components/Toolbar'
import GinxButton from '../../../components/GinxButton'
import SearchBar from '../../../components/SearchBar'
// import { ReactComponent as BackGround } from '../../../assets/images/backgroundImg.svg';


 const Ecommerce = () => {

  const Shop = () => console.log("shop");

  return (
    <div className={`${styles.background} mx-auto overflow-y-auto`}>
      <ToolBar/>
      <div className='text-white pl-0 md:px-8    pt-36'> 
        <div>
          <p className=' text-6xl font-bold'>The new ecommerce global <br/>platform.</p>
          <p className='text-2xl pt-[30px]'>Shop Your Favorite Fashion Products & Accessories Online.<br/> Groceries, Appliances & More.</p>
        </div>
        
        <GinxButton text='Shop Now' onClick={Shop} />  

        <div className=' mb-80 '>
          <SearchBar placeholder='Today’s Deal' onClick={Shop}/>
          <div className='text-white text-sm md:text-lg font-bold flex items-center gap-8  '>
            <p className=''>Most Viewed:</p>
            <div className='grid grid-cols-2 md:grid-cols-4 items-center md:gap-x-8 ' >
                <button className='border-primary-green border-2 rounded-2xl py-3'>Men’s Suite</button>
                <button className='border-primary-green border-2 rounded-2xl  py-3'>Nike</button>
                <button className='border-primary-green border-2 rounded-2xl py-3'>Iphones</button>
                <button className='border-primary-green border-2 rounded-2xl px-5 py-3'>Women’s Clothing</button>
            </div> 
           
          </div>
        </div>

      </div>
           
    </div>
  )
}

export default Ecommerce;
