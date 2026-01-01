import React from 'react'
import { useState } from 'react'

const App = () => {

const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen p-10'>
      <h1 className='text-9xl'>{count}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }} className='px-4 py-2 bg-emerald-500 rounded-xl font-bold text-white text-3xl active:scale-90'>Increase</button>
    </div>
  )
}

export default App