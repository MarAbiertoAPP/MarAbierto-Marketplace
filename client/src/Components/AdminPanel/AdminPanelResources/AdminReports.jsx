import React, { useEffect, useState } from 'react'
import style from '../AdminPanel.module.css'
import CardReport from './CardReport'
import axios from 'axios'

export default function AdminReports () {
  const [report, setReport] = useState([])
  useEffect(() => {
    async function getData () {
      const response = await axios.get('https://marabierto.herokuapp.com/report').then(r => r.data)
      setReport(response)
    }
    getData()
  })
  return (
    <div className='w-full flex flex-col items-center'>

      <div className={`${style.scrollBar} my-8 w-full px-10  overflow-scroll overflow-x-hidden space-y-10`}>
        {report?.map(e => {
          return <CardReport key={e.id} type={e.type} description={e.description} id={e.id} target={e.target}/>
        })}

        {!report.length && <h1 className='text-neutral-300 text-center text-6xl'>
            All reports have been resolved!
          </h1>}
      </div>

    </div>
  )
}
