import React, { useState, useEffect } from 'react'

import axios from 'axios'
const ExploreCollection = () => {
  const [collection, setcollection] = useState()

  useEffect(() => {
    axios.get('/stores/nft?offset10=&limit=8')
      .then(response => setcollection(response.data.nft))
  }, [])
  console.log(collection)

  return (
    <div className='flex flex-wrap  justify-around'>
{collection && collection.map((nft) => {
  return (
        <div className=' border-4 border-sky-500 basis-1/5 justify-around  max-h-100 max-w-exploreCard mx-1.5 my-1.5 ' key={nft.id}>

            <img className='object-contain max-h-full max-w-full' src={nft.path} alt="nft-image" />

            <div className=' flex justify-around '>
    <img className='max-h-20 max-w-max border-8 border-zinc-400  rounded-sm' src={nft.path} alt="nft-image-mini" /> <span className='bg-green-600'>CHETO VIOLET IS BACK</span>
            </div>
        </div>

  )
})}
</div>
  )
}

export default ExploreCollection
