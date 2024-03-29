import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import CardExploreCollections from '../ExploreCollections/ExploreCollectionsResources/CardExploreCollections'
import Nav from '../UI/Nav/Navigation'
import style from './Create.module.css'
import CreateCard from './CreateCard/CreateCard'
// import CreateDemoCollection from './CreateDemoCollection/CreateDemoCollecion'
import CreateDetailNFT from './CreateDetailNFT/CreateDetailNFT'
import { useAuth0 } from '@auth0/auth0-react'
import {
  useDispatch, /* , useSelector  */
  useSelector
} from 'react-redux'

import { changeCreatedStatus, createNFT, getAllCategories } from '../../Redux/Actions'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'
const maxLengthInput = 200

export default function Create () {
  const dispatch = useDispatch()
  const [t] = useTranslation('faq')
  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(changeCreatedStatus())
  }, [])
  const { created } = useSelector(state => state)
  useEffect(() => {
    created &&
      Swal.fire({
        title: 'NFT CREATED!!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.value) {
          console.log('nft creado')
          setImageSelected('https://media4.giphy.com/media/1cXXYmhrXLGqY6gmYt/200w.gif?cid=82a1493biaiertvmjcuwkbuo8ihyx8ylgqf5s3q4oy6ujrw5&rid=200w.gif&ct=g')
        }
      })
  }, [created])
  // const { categories } = useSelector(state => state)

  const { isAuthenticated } = useAuth0()
  const [inputName, setInputName] = useState()
  const [inputDescription, setInputDescription] = useState()
  const [imageSelected, setImageSelected] = useState('https://i.ytimg.com/vi/6wuBl4xVR0g/maxresdefault.jpg')
  const [inputPrice, setInputPrice] = useState()
  const [nftcreate, setnftCreated] = useState({})

  // const [inputCategorie, setInputCategorie] = useState()
  const handleInputnameChange = (input) => {
    setInputName(input.replace(/[^A-Za-z0-9-]/g, ' '))
  }
  const handleInputDescription = (input) => {
    setInputDescription(input.replace(/[^A-Za,-z0-9-]/g, ' '))
  }
  const [nftBuyStatus, setnftBuyStatus] = useState(false)
  const handlePriceChange = (input) => {
    const priceFormat = input.replace(/[^\d-.]/g, '')

    setInputPrice(parseFloat(priceFormat))
  }
  const prechargeNftImg = (input) => {
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'nft_image')
    axios.post('https://api.cloudinary.com/v1_1/julian-soto/image/upload', formData).then(response => {
      setImageSelected(response.data.secure_url)
      setnftCreated({
        title: inputName,
        description: inputDescription,
        price: inputPrice,
        img: response.data.secure_url,
        ownerId: JSON.parse(window.localStorage.getItem('User')).id,
        creatorId: JSON.parse(window.localStorage.getItem('User')).id,
        collectionName: 'Created By Users'

      })
    })
  }
  /* const categorieInput = (input) => {
    setInputCategorie(input.target.value)
  } */

  const [status] = useState('NFT')

  const enviarNft = () => {
    console.log(nftcreate)
    dispatch(createNFT(nftcreate))
    setnftBuyStatus(true)
  }

  return (
    <div className={style.div}>
      <div className='w-full max-w-screen-xl flex flex-col'>
        <Nav/>

        <div className='w-full flex'>

          <div className='basis-6/12 mt-12 space-y-4 py-8'>
            <h1 className='text-purple-700 text-4xl'>{t('create new nft.create new nft')}</h1>

            {/* <div className='flex space-x-8'>
              { <h1 className='text-xl text-neutral-200' onClick={() => setStatus('Collection')}>Collection</h1> }
              <h1 className='text-xl text-neutral-200'onClick={() => setStatus('NFT')}>NFT</h1>
            </div> */}

            <div className='flex flex-col'>
              <h1 className='text-xl text-purple-700'>{t('name.name')}</h1>
              <input
                onChange={(e) => handleInputnameChange(e.target.value)} className='mr-20 pl-2 bg-transparent border-white border rounded-lg text-neutral-300'></input>
            </div>
            {inputName ? '' : <p className='text-orange-800'>{t('Name.Name')}</p>}
{/* <h1 className='text-xl text-purple-700'>{t('Select a Categorie Class.Select a Categorie Class')}</h1> */}
{/* <select className='form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-lime-200 bg-clip-padding bg-no-repeat
      border border-solid border-orange-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-900 focus:bg-lime-300 focus:border-violet-600 focus:outline-none' onChange={categorieInput} name="" id="">
  {categories.map((el, index) =>
    <option key={index} value={el.name}>{el.name}</option>
  )}
</select> */}
            <div className='flex flex-col border-xl'>
              <h1 className='text-xl text-purple-700'>{t('Description.Description')}</h1>
              <textarea value={inputDescription} placeholder= 'max text length is 200' maxLength = {maxLengthInput} onChange={(e) => handleInputDescription(e.target.value)} className='h-28 mr-20 pl-2 bg-transparent border-white border rounded-lg  text-neutral-300'></textarea>
              {inputDescription && inputDescription.length > 199 ? <p className='text-orange-800'>max text length is 200</p> : ''}
            </div>
            {inputDescription
              ? ''
              : <h2 className='text-orange-800 ' >
              {t('DescriptionRequired.DescriptionRequired')}</h2>}

            { status === 'NFT' &&

              <div className='flex flex-col'>
              <h1 className='text-xl text-purple-700'>{t('Price.Price')}</h1>
              <input type="Number" placeholder='Enter Price' onChange={(e) => handlePriceChange(e.target.value)} className='mr-20 pl-2 bg-transparent border-white border rounded-lg text-neutral-300'></input>
            </div>
            }
            {inputPrice ? '' : <p className='text-orange-800'>{t('PriceRequired.PriceRequired')}</p>}

            <div className='flex flex-col'>
              <h1 className='text-xl text-purple-700'>{t('Upload your NFT image.Upload your NFT image')}</h1>

              {/* { status === 'Collection' &&
                <div>

                <div>
                  <h1 className='text-neutral-300 text-sm'>Photo of Collection Card</h1>
                  <input type='file' className='mr-20 pl-2 w-fit bg-transparent border-white border rounded-lg text-neutral-300'></input>
                </div>

                <div>
                  <h1 className='text-neutral-300 text-sm'>Background of Collection Home</h1>
                  <input type='file' className='mr-20 pl-2 w-fit bg-transparent border-white border rounded-lg text-neutral-300'></input>
                </div>

                <div>
                  <h1 className='text-neutral-300 text-sm'>Thumbnail photo</h1>
                  <input type='file' className='mr-28 pl-2 w-fit bg-transparent border-white border rounded-lg text-neutral-300'></input>
                </div>

              </div>
              }
 */}
                { status === 'NFT' &&
                <div>

                <div>
                  <h1 className='text-neutral-300 text-sm'>Photo of Card</h1>
                  <input onChange={(e) => {
                    setImageSelected(e.target.files[0])
                  }} type='file' className='mr-20 pl-2 w-fit bg-transparent border-white border rounded-lg text-neutral-300'></input>
{isAuthenticated &&
                  <div>
                    <button className={'bg-transparent  hover:bg-blue-500  disabled:cursor-not-allowed  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'} onClick={ () => prechargeNftImg() } >
                      Preview
                      </button>
                  <button disabled={!inputName || !inputDescription /* || !inputCategorie */ || !inputPrice || nftBuyStatus } onClick={() => { enviarNft() }} className={'bg-transparent enabled:hover:bg-lime-500 disabled:cursor-not-allowed  text-blue-700 font-semibold enabled:hover:text-black py-2 px-4 border border-blue-500 enabled:hover:border-transparent rounded'}>{t('send.send')}</button>
                  </div>
}
                </div>

              </div>
              }

            </div>

          </div>

          {status === 'NFT' &&
            <div className='basis-6/12  mt-12 flex flex-col items-center py-8'>
            {/* <h1 className='text-neutral-300 text-4xl'>Create new Item</h1> */}

            <h1 className='text-4xl text-white'>{t('Pre-visualization.Pre-visualization')}</h1>

            <CreateCard title={inputName} image={imageSelected || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_DzzLsV5_lO_AQ7Jfcr0dHkWDO7aq7GcwQ&usqp=CAU?precharge '} price={inputPrice}/>
          </div>
          }

          {/* {status === 'Collection' &&
            <div className='basis-6/12  mt-12 flex flex-col items-center py-8'>
              <h1 className='text-4xl text-white'>Pre-visualization Collection Card</h1>
              <CardExploreCollections mini={'https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif'} name={'Lady Ape Club'} frontPage={'https://openseauserdata.com/files/93bda2fefd4ea0d50bbecbd4b154991c.png'}/>
            </div>
          } */}

        </div>

        {status === 'NFT' &&
          <div className='w-full flex flex-col my-20 '>
            <h1 className='text-4xl text-white text-center'>Pre-visualization NFT Detail</h1>
            <CreateDetailNFT title={inputName} path={imageSelected || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_DzzLsV5_lO_AQ7Jfcr0dHkWDO7aq7GcwQ&usqp=CAU?precharge '} price={inputPrice} description={inputDescription} user={'Juako'} />
          </div>
        }

        {/* {status === 'Collection' &&
          <div className='w-full flex flex-col my-20 '>
            <h1 className='text-4xl text-white text-center'>Pre-visualization Collection</h1>
            <CreateDemoCollection background={'https://openseauserdata.com/files/1db4e44dd52dcc1db78d2b43dd33e751.png'} mini={'https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif'}
            name='Lady Ape Club' userCreator={'LadyApeLabs'} description={descriptionSimulated}/>
          </div>
        } */}

      </div>
    </div>
  )
}
