import React from 'react'
import {useNavigate} from 'react-router-dom'


const Navbar2 = () => {
    const navigate=useNavigate()

  return (
    <div className='py-3 px-5 bg-cyan-600'>
        <button 
        onClick={()=>{
            navigate('/')
        }} 
        className='bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
            return to Home page 
        </button>
        <button 
        onClick={()=>{
            navigate(-1)
        }} 
        className='bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
            Back
        </button>

      
    </div>
  )
}

export default Navbar2
