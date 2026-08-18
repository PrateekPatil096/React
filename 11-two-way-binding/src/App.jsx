import React, { useState } from 'react'

const App = () => {

  const [title, setfTitle] = useState('')

const submitHandler =(e)=>{
  e.preventDefault()
  console.log('form submitted by',title);
  setfTitle('')
}
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name'
        value={title}
        onChange={(e)=>{
          console.log(e.target.value)

        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
