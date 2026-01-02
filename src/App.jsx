import React from 'react'
import axios from "axios"
import { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [emoji, setEmoji] = useState({name:'', category:'', group:'',htmlCode:''})

  let getEmoji = async () => {
    let response = await axios.get("https://emojihub.yurace.pro/api/random")
    console.log(response.data)
    let newObj = {name : response.data.name,
      category : response.data.category,
      group: response.data.group,
      htmlCode : response.data.htmlCode[0]
    }
    setEmoji(newObj)
  }

  return (
    <div className='w-screen h-screen p-5 bg-[#3a3a3a]'>
      <button onClick={getEmoji} className='text-3xl px-4 py-2 text-white bg-[#135a06] active:scale-95 border-2 border-[#bebebe]'>Surprise Me</button>
      <h1 className='text-9xl'>
        <span
          dangerouslySetInnerHTML={{
            __html: emoji.htmlCode
          }}
        />
      </h1>
      <h2 className='text-4xl text-white'>Name: {emoji.name}</h2>
      <h2 className='text-4xl text-white'>Group: {emoji.group}</h2>
      <h2 className='text-4xl text-white'>Category: {emoji.category}</h2>
      {/* <Card/> */}
    </div>
  )
}

export default App