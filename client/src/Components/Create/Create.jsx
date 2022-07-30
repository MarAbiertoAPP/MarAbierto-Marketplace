import React, { useState } from 'react'
import CardExploreCollections from '../ExploreCollections/ExploreCollectionsResources/CardExploreCollections'
import Nav from '../UI/Nav/Navigation'
import style from './Create.module.css'
import CreateCard from './CreateCard/CreateCard'
import CreateDemoCollection from './CreateDemoCollection/CreateDemoCollecion'
import CreateDetailNFT from './CreateDetailNFT/CreateDetailNFT'

const simulatedData = {
  title: 'Meebit #6786',
  image: 'https://img.seadn.io/files/17f19ea26495e6367c15233344b0d1ad.jpg?fit=max&w=600',
  price: '5.7',
  id: ''
}

const descriptionSimulated = 'The Meebits are 20,000 unique 3D voxel characters, created by a custom generative algorithm, then registered on the Ethereum blockchain.'
const collection = 'Meebits'

export default function Create () {
  const [status, setStatus] = useState('NFT')
  return (
    <div className={style.div}>
      <div className='w-full max-w-screen-xl flex flex-col'>
        <Nav/>

        <div className='w-full flex'>

          <div className='basis-6/12 mt-12 space-y-4 py-8'>
            <h1 className='text-purple-700 text-4xl'>Create new Item</h1>

            <div className='flex space-x-8'>
              <h1 className='text-xl text-neutral-200' onClick={() => setStatus('Collection')}>Collection</h1>
              <h1 className='text-xl text-neutral-200'onClick={() => setStatus('NFT')}>NFT</h1>
            </div>

            <div className='flex flex-col'>
              <h1 className='text-xl text-purple-700'>Name</h1>
              <input className='mr-20 pl-2 bg-transparent border-white border rounded-lg text-neutral-300'></input>
            </div>

            <div className='flex flex-col border-xl'>
              <h1 className='text-xl text-purple-700'>Description</h1>
              <textarea className='h-28 mr-20 pl-2 bg-transparent border-white border rounded-lg  text-neutral-300'></textarea>
            </div>

            { status === 'NFT' &&

              <div className='flex flex-col border-xl'>
              <h1 className='text-xl text-purple-700'>Collection</h1>
              <select className='text-xl text-neutral-300 bg-transparent border border-white rounded-lg mr-20 pl-2'>
                <option>None</option>
                <option>la 1 que tiene el usuario</option>
                <option>la 2 que tiene el usuario</option>
              </select>
            </div>
            }

            { status === 'NFT' &&

              <div className='flex flex-col'>
              <h1 className='text-xl text-purple-700'>Price</h1>
              <input className='mr-20 pl-2 bg-transparent border-white border rounded-lg text-neutral-300'></input>
            </div>
            }

            <div className='flex flex-col'>
              <h1 className='text-xl text-purple-700'>Upload files</h1>

              { status === 'Collection' &&
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

                { status === 'NFT' &&
                <div>

                <div>
                  <h1 className='text-neutral-300 text-sm'>Photo of Card</h1>
                  <input type='file' className='mr-20 pl-2 w-fit bg-transparent border-white border rounded-lg text-neutral-300'></input>
                </div>

              </div>
              }

            </div>

          </div>

          {status === 'NFT' &&
            <div className='basis-6/12  mt-12 flex flex-col items-center py-8'>
            {/* <h1 className='text-neutral-300 text-4xl'>Create new Item</h1> */}

            <h1 className='text-4xl text-white'>Pre-visualization Card</h1>

            <CreateCard title={simulatedData.title} image={simulatedData.image} price={simulatedData.price}/>
          </div>
          }

          {status === 'Collection' &&
            <div className='basis-6/12  mt-12 flex flex-col items-center py-8'>
              <h1 className='text-4xl text-white'>Pre-visualization Collection Card</h1>
              <CardExploreCollections mini={'https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif'} name={'Lady Ape Club'} frontPage={'https://openseauserdata.com/files/93bda2fefd4ea0d50bbecbd4b154991c.png'}/>
            </div>
          }

        </div>

        {status === 'NFT' &&
          <div className='w-full flex flex-col my-20 '>
            <h1 className='text-4xl text-white text-center'>Pre-visualization NFT Detail</h1>
            <CreateDetailNFT title={simulatedData.title} path={simulatedData.image} price={simulatedData.price} description={descriptionSimulated} user={'Juako'} collection={collection}/>
          </div>
        }

        {status === 'Collection' &&
          <div className='w-full flex flex-col my-20 '>
            <h1 className='text-4xl text-white text-center'>Pre-visualization Collection</h1>
            <CreateDemoCollection background={'https://openseauserdata.com/files/1db4e44dd52dcc1db78d2b43dd33e751.png'} mini={'https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif'}
            name='Lady Ape Club' userCreator={'LadyApeLabs'} description={descriptionSimulated}/>
          </div>
        }

      </div>
    </div>
  )
}
