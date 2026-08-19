import React from 'react'
import axios from 'axios'

const App = () => {

   async function getData(){
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   console.log(response);
   
  }

  const get = async()=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data);
    

  }



  return (
    <div>
      <button onClick={getData}>getdata</button>
      <button onClick={get}>gett</button>
    </div>
  )
}

export default App
