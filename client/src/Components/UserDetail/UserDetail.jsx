
import React from 'react'
import style from './UserDetail.module.css'
import Nav from '../UI/Nav/Navigation'
import Footer from '../Footer/Footer'
// import Card from '../UI/Card/Card'
import { useTranslation } from 'react-i18next'

import CardUserDetail from './UseDetailResources/CardUserDetail'

import { AiOutlineTwitter, AiOutlineMore } from 'react-icons/ai'
import { FaShareAlt } from 'react-icons/fa'

// aqui va la data simulada
// import fotouser from '../../assests/demo/fotouser.jpeg'
import background from '../../assests/demo/background.webp'
import { useAuth0 } from '@auth0/auth0-react'

const data = {
  name: 'gatingatito',
  description: 'HERE GOES USER DESCRIPTION',
  joined: '22-Feb-2222',
  userID: ' here goes use ID'

}

const dataFromApiExample = [{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
},
{
  title: 'Waifusion #2541',
  description: "Waifusion is a community-run digital Waifu NFT project with deflationary mechanics. There are 16,384 guaranteed-unique Waifusion NFTs. They're just like you; a beautiful work of art, but 2-D and therefore, superior, Anon-kun. Each Waifu is wholly unique and yours forever... unless you sell them... Baka.",
  price: 1.1,
  img: 'https://lh3.googleusercontent.com/PL0asok_cN4gQ3K1bqlQIlcjvergT9Isv-wQhALcikcwJa_4QiRRhd8iPvafHyGhLlf_ZVlyvWzBS42Jtar7bERnpAXZlKdoM0ZUvro=w600',
  category: 'Sports'
}
]
//
// console.log(data) // te he callado eslint

const UserDetail = (props) => {
  const { user } = useAuth0()
  console.log(user)
  const [t] = useTranslation('faq')
  return (

    <div className={style.div}>

      <Nav/>
       <div className='w-full max-w-screen-xl'>

        <div className='object-contain mt-12 w-full h-96 max-w-screen-xl'>
          <img className='w-full h-full' src={background}></img>
        </div>

        <div className='w-full flex justify-center xl:justify-start'>
          <img className='aspect-auto shadow-2xl shadow-black box -mt-40 xl:ml-20 w-72 h-72 md:w-96 md:h-96 xl:w-48 xl:h-48 rounded-full' src={user?.picture}></img>
        </div>

        <div className='-mt-10 w-full'>

          <div className='w-full mt-10 flex flex-col xl:flex-row'>

            <div className='basis-5/12 space-y-2 text-center xl:text-start'>
              <h1 className='text-white text-6xl capitalize'>{user?.nickname}</h1>
              {/* <h1 className='text-white text-xl'>{data.address}</h1> */}
              <h1 className='text-white'>{`Joined ${user?.updated_at.slice(0, 10)}`}</h1>
              <p className='text-white'>{data.description}</p>
              <p className='text-white'> {data.userID}</p>
            </div>

            <div className='basis-4/12'>

            </div>

            <div className='basis-3/12'>
              <div className='flex place-content-around items-center my-8 xl:my-0'>
                <AiOutlineTwitter className='text-5xl text-white'/>
                <FaShareAlt className='text-4xl text-white'/>
                <AiOutlineMore className='text-5xl text-white'/>
              </div>

            </div>

          </div>

          <div className='w-full p-6 flex space-x-20'>
            <h1 className='text-lg text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>{t('Collected.Collected')}</h1>
            <h1 className='text-lg text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>{t('Created.Created')}</h1>
            <h1 className='text-lg text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>{t('Favorites.Favorites')}</h1>
          </div>

        </div>

        <div className='flex flex-row flex-wrap justify-center'>
          {dataFromApiExample?.map((item, index) => {
            return <CardUserDetail key={index} title={item.title} image={item.img} price={item.price} id={item.id} />
          })}
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default UserDetail
