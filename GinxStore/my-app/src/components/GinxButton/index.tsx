import React from 'react'
import styles from './shadow.module.css'

interface Prop {
    text: string;
    onClick: () => void;
}

const GinxButton: React.FC<Prop> = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={`bg-white !text-black px-10 py-2.5 md:py-5 rounded-2xl text-xl md:text-2xl font-bold mt-[50px]  ${styles.green}`}>
        {text}
    </button>
  )
}

export default GinxButton;