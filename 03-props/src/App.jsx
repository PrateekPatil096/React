import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    
      <div className='parent'>
      
      <Card user='pp' age={20} img='https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D'/>
      <Card user='aa' age={19} img='https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D'/>
      <Card user='ab' age={18} img='https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D'/>
    </div>
  )
}

export default App
