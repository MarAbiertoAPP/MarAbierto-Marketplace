import React from 'react'
import { data42 } from './teamData'
import { FaLinkedin } from 'react-icons/fa'
import Nav from '../UI/Nav/Navigation'
const Team = () => {
  return (
    <div>
      <div className='flex justify-center'>
      <Nav />
      </div>
        <h1 className='text-orange-400 font-xl text-center font-bold text-2xl m-10'>
            CREATOR TEAM
        </h1>
    <div className='  flex flex-row justify-around '>
    {data42.map((team) => {
      return (
          <div className='m- w-4/5  hover:shadow-2xl   hover:shadow-purple-800 ' key={team.name}>
            <div className= ' m-auto  h/96 w-4/5  border-2 border-solid border-blue-300 '>
                <img className=' h-full text-center  w-full object-contain   ' src={team.img} alt="imagen" />
            </div>
            <div className='  flex flex-row justify-around mt-2' ><h2 className='text-lime-300' >{team.name}</h2>

             <a href={team.contact}><FaLinkedin className='text-blue-400' /></a></div>

          </div>
      )
    })}</div>

    </div>
  )
}

export default Team
