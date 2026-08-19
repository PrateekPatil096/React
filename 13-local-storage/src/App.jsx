import React from 'react'

const App = () => {

  
  const user=localStorage.getItem('user')
  const age=localStorage.getItem('age')
  console.log(user,age);
  localStorage.removeItem('user')

  const users={
    username:'gokuu',
    age:18,
    city:'jkd'
  }

  localStorage.setItem('users',JSON.stringify(user))
  console.log(users)
  const userr=JSON.parse(localStorage.getItem('userr'))
  console.log(userr);
  

  return (
    <div>
      app
    </div>
  )
}

export default App
