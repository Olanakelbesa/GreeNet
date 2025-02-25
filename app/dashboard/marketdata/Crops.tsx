import React from 'react'
import TrandUp from "@/public/icons/increase.png"
import TrandDown from "@/public/icons/arrow.png"
import Image from 'next/image';

interface CropsProps {
    crop: string,
    percent: number,
}

const Crops: React.FC<CropsProps> = ({crop, percent}) => {
  return (
    <div className='flex items-center gap-2  py-3 px-4 rounded-lg shadow-md '>
        <p className='text-lg font-medium'>{crop}</p>
        <div className={`flex gap-2 ${percent < 10 ? "bg-red-400 text-red-400" : "bg-[#29bb49] text-[#29bb49]" } bg-opacity-5 rounded-sm px-4 py-1 `}>
            <Image src={percent < 10 ? TrandDown : TrandUp} alt='trand up' width={20} height={20} />
            <p>{percent}%</p>
        </div>
    </div>
  )
}

export default Crops