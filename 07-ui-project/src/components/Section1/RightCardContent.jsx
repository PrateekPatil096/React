import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-15 w-15 flex justify-center items-center'>{props.id}</h2>
 
        <div>
            <p className='text-xl leading-relaxed text-white mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, natus.</p>
        <div className='flex justify-between'>
            <button className='bg-blue-200 text-white font-mid px-8 py-3 rounded-full text-lg '>{props.tag}</button>
            <button className='bg-blue-200 text-white font-mid px-6 py-3 rounded-full text-lg'><i className="ri-arrow-right-line"></i> </button>
        </div>
        </div>

      </div>
  )
}

export default RightCardContent
