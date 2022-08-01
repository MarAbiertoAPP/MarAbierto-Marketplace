import React, { useEffect } from 'react'
import style from './Explore_collection.module.css'

import Nav from '../UI/Nav/Navigation'
import CardExploreCollections from './ExploreCollectionsResources/CardExploreCollections'
import { useTranslation } from 'react-i18next'
// import p1 from '../../assests/demoCollections/1.png'
// import p2 from '../../assests/demoCollections/2.png'
// import p3 from '../../assests/demoCollections/3.gif'
// import p4 from '../../assests/demoCollections/4.png'

// import user from '../../assests/demo/fotouser.jpeg'
import { useDispatch, useSelector } from 'react-redux'

import { getAllCollection } from '../../Redux/Actions'

// const dataFromApiExample = [
//   { img: p1, name: 'The Potatoz', mini: user },
//   { img: p2, name: 'Grande Gatin gatito', mini: user },
//   { img: p3, name: 'Wisin & Yandel', mini: user },
//   { img: p4, name: 'el bogs bunny brr', mini: user },
//   { img: p1, name: 'The Potatoz', mini: user },
//   { img: p2, name: 'Grande Gatin gatito', mini: user },
//   { img: p3, name: 'Wisin & Yandel', mini: user },
//   { img: p4, name: 'el bogs bunny brr', mini: user },
//   { img: p1, name: 'The Potatoz', mini: user },
//   { img: p2, name: 'Grande Gatin gatito', mini: user },
//   { img: p3, name: 'Wisin & Yandel', mini: user },
//   { img: p4, name: 'el bogs bunny brr', mini: user },
//   { img: p1, name: 'The Potatoz', mini: user },
//   { img: p2, name: 'Grande Gatin gatito', mini: user },
//   { img: p3, name: 'Wisin & Yandel', mini: user },
//   { img: p4, name: 'el bogs bunny brr', mini: user }

// ]

const ExploreCollection = () => {
  // const [collection, setcollection] = useState()

  // useEffect(() => {
  //   axios.get('/stores/nft?offset10=&limit=8')
  //     .then(response => setcollection(response.data.nft))
  // }, [])
  // console.log(collection)
  const dispatch = useDispatch()

  const allCollections = useSelector(state => state.Collection.collections)

  const [t] = useTranslation('faq')

  useEffect(() => {
    dispatch(getAllCollection())
  }, [dispatch])

  return (
    <div className={style.div}>

      <Nav/>
      <div className='mt-16 w-full max-w-screen-xl'>
      <h1 className='text-3xl text-white'>{t('ExploreCollections.ExploreCollections')}</h1>

      <div className='w-full flex space-x-10 mt-8'>

      <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>All</h1>
        <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>Top</h1>
        <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>Art</h1>
        <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>Collectibles</h1>
        <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>Virtual Worlds</h1>
        <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>Utility</h1>
        <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>Trading Cards</h1>
        <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>Sports</h1>
        <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>Photography</h1>
        <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>Domain Names</h1>
        <h1 className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>Music</h1>
      </div>

      <div className='w-full mt-10 flex flex-row flex-wrap justify-center'>
        {allCollections?.map(({ name, frontPage, id, mini }) => {
          return <CardExploreCollections key={id} id={id} frontPage={frontPage} mini={mini} name={name}/>
        })}

      </div>

      </div>
    </div>

  )
}

export default ExploreCollection
