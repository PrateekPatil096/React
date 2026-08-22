import React from 'react'

const About = () => {

    const navigate=useNavigate()

    const btnClicked=()=>{
        navigate('/')
       
    }


  return (
    <div>
        

      <h1>About Page</h1>
    </div>
  )
}

export default About
