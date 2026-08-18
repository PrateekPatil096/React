import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submithandler=(e)=>{
    e.preventDefault()

    const copytask=[...task]

    copytask.push({title,details})
    setTask(copytask)
    console.log(task)
    
    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)

    setTask(copyTask)
    
  }


  return (
    <div className='h-screen lg:flex bg-black text-white '>
      
      <form onSubmit={(e)=>{
        submithandler(e)

      }} className='flex gap-4  lg:w-1/2 flex-col items-start p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1> 
        
          <input 
        type="text" 
        placeholder='enter notes heading' 
        className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <textarea 
        type="text" 
        className='px-5 w-full h-30 py-2 font-medium flex items-start flex-row border-2 outline-none rounded'
         placeholder='write deatils' 
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

        <button 
        className='bg-white active:bg-gray-500w-full font-medium text-black px-5 py-2 outline-none rounded' 
        > 
        Add Note 
        </button>
        
       
      </form>
      <div className=' lg:w-1/2  lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90] overflow-auto'>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
         {task.map(function(elem,idx){


          return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black p-4 bg-[url('https://imgs.search.brave.com/9JpQ4AitNm2EPNTyFgQqhFdHfwrbZA8fnsqzEwPl5lU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtcGhvdG8v/cGFwZXItdGV4dHVy/ZXMtYmFja2dyb3Vu/ZF83NDE5MC0yNjYu/anBnP3NlbXQ9YWlz/X3Rlc3RfYiZ3PTc0/MCZxPTgw')]">
            <h3 className='absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xl'><X/></h3>
            <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
            <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
            <button onClick={()=>{
              deleteNote(idx)
            }}className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs rounded font-bold text-white '>delete</button>
          </div>

          butt
          

         })}
        

        </div>    
      </div>
      
    </div>
  )
}

export default App
