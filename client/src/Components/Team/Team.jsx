import React from 'react'
import { data42 } from './teamData'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
const Team = () => {
  return (
    <div>
        <h1 className='text-orange-400 font-xl text-center font-bold text-2xl'>
            CREATOR TEAM
        </h1>
    <div className='  flex flex-row justify-around '>
    {data42.map((team) => {
      return (
          <div className='m-5 w-4/5 border-2  border-solid border-orange-500   ' key={team.name}>
            <div className= ' m-auto  h/96 w-4/5  border-2 border-solid border-blue-300 '>
                <img className=' h-full text-center  w-full object-contain   ' src={team.img} alt="imagen" />
            </div>

              <h2 className='text-lime-300' >{team.name}</h2>
              <div className='flex flex-row  justify-around' >
                <FaLinkedin className='text-blue-400' />
                <FaGithub className='text-blue-400' />
            </div>

          </div>
      )
    })}</div>

    </div>
  )
}

export default Team
