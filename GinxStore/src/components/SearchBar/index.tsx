import React from 'react'
import { ReactComponent as Search } from '../../assets/images/search.svg';
import { useState, ChangeEvent } from 'react';
// import styles from './shadow.module.css'

interface Prop {
    placeholder: string;
    onClick: () => void;
}

const SearchBar: React.FC<Prop> = ({placeholder, onClick}) => {

    const [isFocused, setisFocused ] = useState(false);
    const [inputValue, setInputValue ] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)
    const handleClick = () => setisFocused((prevFocused) => !prevFocused);

  return (
    <div className='flex h-[36px] md:h-[72px] mt-[39px]  mb-10'>
        <input type="text" 
          value={inputValue}
          placeholder={!isFocused && !inputValue ? placeholder : ''} 
          className='text-black text-xl md:text-2xl font-medium pl-4 md:pl-6 pr-[10rem] md:pr-[40rem] rounded-s-[26px] focus:outline-none focus:border-blue-500' 
          onClick={handleClick} 
          onChange={handleChange}
        />
        <div className='flex items-center justify-center bg-primary-green h-[36px] md:h-[72px] rounded-e-[26px] pl-2 md:pl-5 pr-2 md:pr-5 '>
            <Search className='w-[24px] md:w-[40px] h-[24px] md:h-[40px] '/>
        </div>
    </div>
    
  )
}

export default SearchBar;