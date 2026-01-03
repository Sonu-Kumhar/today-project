import React from 'react'
import axios from "axios"
import Card from './components/Card'
import { useState } from 'react'

const App = () => {

  const [allDragons, setAllDragons] = useState([])
  const [dragonCount, setDragonCount] = useState("")
  const [display1, setDisplay1] = useState("block")

  let getDragons = async (e) => {
    e.preventDefault();
    setDragonCount(dragonCount);
    let response = await axios.get(`https://dragonball-api.com/api/characters?limit=${dragonCount}&page=1`)
    let newAllDragons = [...response.data.items];
    setAllDragons(newAllDragons)
    setDragonCount("");
    console.log(dragonCount)
    setDisplay1("hidden")
    console.log(response.data.items)
  }

  return (
    <div className='mainContainer w-full h-screen p-6 px-20'>
      <form onSubmit={getDragons}>
        <input
          type="number"
          min={1}
          placeholder='Enter Dragons Count'
          className='bg-[#535353] text-3xl font-normal text-[#ffffff] border-4 border-[#d1d1d1] px-4 py-2 mr-5'
          value={dragonCount}
          required
          onChange={(e) => {
            setDragonCount(e.target.value)
          }}
        />

        <button className='bg-[#535353] text-3xl font-normal text-[#f1f1f1] border-4 border-[#d1d1d1] px-4 py-2 active:scale-95 mb-10'>Launch Dragons</button>
      </form>

      <div className='w-full flex gap-15 flex-wrap'>
        <img className={`${display1} invert absolute top-30 h-80 animate-marquee`} src="https://i.pinimg.com/originals/f9/2d/eb/f92debea10b3bd06e52ecb96695f56a0.gif" alt="" />
        <img className={`${display1} grayscale absolute top-80 h-120 animate-marquee `} src="https://i.pinimg.com/originals/f9/2d/eb/f92debea10b3bd06e52ecb96695f56a0.gif" alt="" />
        <img className={`${display1} absolute top-40 left-140 h-100 rotate-90 animate-marquee-opposite`} src="https://i.pinimg.com/originals/f9/2d/eb/f92debea10b3bd06e52ecb96695f56a0.gif" alt="" />
        {/* <img className={`${display1} absolute top-80 animate-marquee`} src="https://i.pinimg.com/originals/f9/2d/eb/f92debea10b3bd06e52ecb96695f56a0.gif" alt="" /> */}

        
        {
          allDragons.map((elem, index) => {
            return <div key={index}>
              <Card name={elem.name} affiliation={elem.affiliation} gender={elem.gender} race={elem.race} ki={elem.ki} image={elem.image} />
            </div>
          })
        }

      </div>
    </div>
  )
}

export default App