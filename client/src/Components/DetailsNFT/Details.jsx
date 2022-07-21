/*eslint-disable*/ 
import React from 'react'
import { Link } from 'react-router-dom'
import style from './Details.module.css'
import TitleDetails from './Title/TitleDetails'
import { FaEthereum, FaHeart} from "react-icons/fa";

const img= 'https://img.seadn.io/files/fc1b697662d7b7ae34e4c9ca23b34938.png?fit=max&w=600'
const img2='https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://dweb.link/ipfs/QmTFo9jVdLui8X1L2idY9VnmGWUg1AqyD31vKf5urE73cz/406.png'
const img3 = 'https://img.seadn.io/files/f8a1f33e49300033d97bc83dd3d1f25f.png?fit=max&w=600'
const img4 = 'https://lh3.googleusercontent.com/hUzApSoOBg9QkFerj_WGuci7OhMhu5voVlo-seJWneYsAIesfTl9auPuyz4us8kTSUhrqhaCVmoJ7XhZHpU1brPHyPWnR0F3nmB8zA=w600'
const img5 ='https://lh3.googleusercontent.com/j58qyL7FLDSvvr8xwjE4OT0VSQ2ToAKx6dzz4Pptyi-uSGK1W2942fWTj_y4wMLaJyHYimiBXJxQZWI_CxG086CI-orSpOg6nNYsvw=w600'

const example = {
    title: 'Waifusion #2541',
    description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
    price: 1.1,
    img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
    category: 'Sports'
  }

const Details = () => {
  return (
    <div className={style.div}>

      <div className={' flex flex-col items-center w-screen max-w-screen-xl'} >
        <TitleDetails/>

        <div className='flex xl:hidden w-full justify-center space-x-20'>
            <h1 className='mt-6 text-xl md:text-3xl tracking-wider text-amber-600'>{example.title}</h1>
            <div className='flex items-center mt-6 place-content-end'>
                <FaHeart className='text-neutral-400 text-3xl hover:text-red-500'/>
                <p className='ml-4 text-md self-auto text-neutral-400 tracking-wider'>444 likes</p>
            </div>
        </div>

        <div className={`my-6 flex flex-col xl:flex-row w-full min-h-screen xl:${style.limitH}`}>

          <div className={`basis-5/12 flex justify-center h-fit`}>
            <img className={`${style.limitH} object-contain h-full border-transparent border-solid border-2 hover:border-cyan-500`}
             src={img5}></img>

          </div>  

          <div className='flex flex-col basis-8/12 '>

            <div className='hidden xl:flex w-full'>
              <h1 className='mt-6 text-3xl tracking-wider text-amber-600 mx-8 '>{example.title}</h1>
              <div className='flex items-center mt-6 place-content-end ml-64'>
                  <FaHeart className='text-neutral-400 text-3xl hover:text-red-500'/>
                  <p className='ml-4 text-md self-auto text-neutral-400 tracking-wider'>444 likes</p>
              </div>

            </div>
            

            <div className='w-full px-4 md:px-14 xl:px-8 py-6 '>
                <p className='text-md self-auto text-white tracking-wider'>About Waifu Collection blablabla</p>
               <p className='text-md self-auto text-neutral-400 tracking-wider'>{example.description}</p>
            </div>




            <div className='w-full p-4 md:px-14 xl:p-8 '>

              <div>
                <p className='text-md self-auto text-neutral-400 tracking-wider'>Current price:</p>

                <div className='flex my-2'>
                  <FaEthereum className='text-white text-xl'/> 
                  <p className=' ml-2 text-xl self-auto text-white tracking-wider'>{`${example.price} MONEDA`}</p>
                </div>
              </div>

              <div className='flex my-6'>
                <p className='text-md self-auto text-neutral-400 tracking-wider'>Owned by:</p>
                <Link className='ml-4' to='/user/juakodegenereke3000'>
                  <p className='text-lg self-auto text-cyan-600 tracking-wider 
                  decoration-transparent underline hover:underline-offset-4 hover:decoration-current'> JUAKO DEGENEREKE 3000</p>
                </Link>
              </div>

                







              <div className='flex flex-col md:flex-row space-around mt-20 space-y-4 md:space-y-0'>
                <button className='basis-4/12 bg-amber-600 mx-8 text-2xl py-4'>Buy Now</button>
                <button className='basis-4/12 bg-amber-600 mx-8 text-2xl py-4'>Make offer</button>
                <button className='basis-4/12 bg-amber-600 mx-8 text-2xl py-4'>Add to cart</button>
              </div>

              <div className='w-full flex justify-center'>
                <p className='mt-4 text-md self-auto text-neutral-400 tracking-wider'>By clicking "Buy now" or "Make an offer", you agree to the Terms of Service</p>
              </div>

            </div>


          </div>  

        </div>

      </div>
    </div>

  )
}

export default Details
