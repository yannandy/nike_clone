import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[282px] h-[282px]'/>
        <div className='mt-8 flex gap-2.5'>
          <img src={star} alt='rating' width={24} height={24}/>
          <p className='font-montserrat text-xl text-slate-gray'>(4.5)</p>
        </div>
        <h3 className="mt-2 text-2xl font-semibold font-palanquin" >{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl' >{price}</p>
    </div> 
  )
}

export default PopularProductCard