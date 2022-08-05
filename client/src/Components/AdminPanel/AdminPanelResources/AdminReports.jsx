import React from 'react'
import style from '../AdminPanel.module.css'
import CardReport from './CardReport'

export default function AdminReports () {
  return (
    <div className='w-full flex flex-col items-center'>

      <div className={`${style.scrollBar} my-8 w-full px-10  overflow-scroll overflow-x-hidden space-y-10`}>
        <CardReport type='user' target='gatingatito' description={`
Lorem Ipsum is aaa aaa aaa simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesa.`}/>
        <CardReport type='nft' target='15'/>
        <CardReport type='collection' target='waifusion'/>
      </div>

    </div>
  )
}
