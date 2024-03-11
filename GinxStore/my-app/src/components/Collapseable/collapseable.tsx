
import { ReactComponent as Vector } from "../../assets/images/Vector.svg";
import { ReactComponent as Cancel } from "../../assets/images/cancel.svg";
import React, { useState } from 'react';


interface Prop {
  text: string;
  subText: string;
  onClick: () => void;
}

const Collapseable: React.FC<Prop> = ({text, subText, onClick}) => {

  const [Open, IsOpen] = useState<boolean>(false);

  const handleClick = () => {
    IsOpen(!Open);
    onClick();
  }

  return (
    <div className='flex justify-between items-center w-8/12' >
      <div>
        <p className='text-white text-3xl font-semibold'>{text}</p> 
        <p className={`text-white text-xl pt-6 w-10/12 transition duration-10000 ease-in-out ${Open ? "" : "hidden"}`}>{subText}</p>
      </div>
      {Open ?  <Cancel onClick={handleClick}/> : <Vector onClick={handleClick}/> }
    </div>
  )
}

export default Collapseable;