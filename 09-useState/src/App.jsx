import React,{useState} from 'react'

const App = () => {

  const [num, setNum] = useState({user:'pp',age:20})

  const btnClicked=()=>{
    const newNum={...num};
    newNum.user='aa'
   setNum(newNum)

  }

  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App



