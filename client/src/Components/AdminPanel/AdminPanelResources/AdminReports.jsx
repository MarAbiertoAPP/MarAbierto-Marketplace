import React from 'react'
import style from '../AdminPanel.module.css'
import CardReport from './CardReport'

export default function AdminReports () {
  return (
    <div className='w-full flex flex-col items-center'>

      <div className={`${style.scrollBar} my-8 w-full px-10  overflow-scroll overflow-x-hidden space-y-10`}>
        <CardReport type='user' target='gatingatito'/>
        <CardReport type='nft' target='15'/>
        <CardReport type='collection' target='waifusion'/>
      </div>

    </div>
  )
}
