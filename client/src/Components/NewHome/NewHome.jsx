/*eslint-disable*/
import React from 'react'
import Nav from '../UI/Nav/Navigation'
import Carousel from './newHomeResources/Carousel'
import style from './newHome.module.css'
import { Fade } from 'react-slideshow-image';
import photo from '../../assests/newHomePhoto.jpg'
import mini from '../../assests/demo/fotouser.jpeg'
import photo2 from '../../assests/demo/background.webp'
import CarouselLanding from './newHomeResources/CarouselLanding';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const fadeImages = [
  {
  url: 'https://us.123rf.com/450wm/nexusplexus/nexusplexus1303/nexusplexus130301309/18747570-gato-divertido-suave-y-esponjosa-en-un-collage-business-traje.jpg?ver=6',
  caption: 'First Slide'
  },
  {
  url: 'https://www.lalocadelosgatos.com/wp-content/uploads/2013/06/gato-traje.jpg',
  caption: 'Second Slide'
  },
  {
  url: 'https://media.istockphoto.com/photos/scottish-fold-cat-in-a-suit-businessman-picture-id508514140?k=20&m=508514140&s=612x612&w=0&h=j3mFJzzQOl_n8nGe8x_Bnu8Kyo9EMSF06HITSdMK_EA=',
  caption: 'Third Slide'
  },
];

const fadeProperties = {
  autoplay: true,
  duration: 1500,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

export default function NewHome () {
  const [t] = useTranslation('faq')

  return (
    <div className={style.div}>
      <Nav/>

      <div className={'mt-20 w-full max-w-screen-xl flex xl:max-h-limitHnewHome'}>

        <div className='basis-6/12 space-y-8 p-6 flex flex-col justify-center'>
          <h1 className='text-neutral-300 text-5xl'>{t("newHomeTitle.newHomeTitle")}</h1>
          <p className='text-2xl text-neutral-500'>{t("newHomedetailInfo.newHomedetailInfo")}</p>

          <div className='flex w-full space-x-20'>
            <Link to='/collection'>
              <button className='text-white text-3xl p-4 px-6 my-6 bg-purple-700 hover:bg-purple-900 rounded-lg'>{t("explore.explore")}</button>
            </Link>
            <button className='text-white text-3xl p-4 px-6 my-6 bg-purple-700 hover:bg-purple-900 rounded-lg'>{t("create.create")}</button>
          </div>
          
          <div>
            <h1 className='text-lg text-white text-purple-500'>Learn more about MarAbierto</h1>
          </div>

        </div>

        {/* <div className='basis-1/12'>

        </div> */}

        <div className='basis-5/12 flex flex-col items-center justify-center p-8'>

          <div className='shadow-2xl shadow-purple-700 flex flex-col  rounded-lg'>
        
      {/* <Fade {...fadeProperties} className=''>   
      {fadeImages.map((e, index)=> (
            <div className="" key={index}>
             <img className='h-96 w-96 object-cover' src={e.url}/>
             <h1 className='text-white text-xl ml-2'>NOMBRE DE LA COLECCION</h1>       

              </div>           
          ))} 
    
      </Fade> */}
    

            <img className='max-h-limitH max-w-xl m-4 rounded-md' src={photo2}></img>
            <div className='flex m-4 items-center'>              
              <img className='rounded-full h-10 w-10' src={mini}></img>
              <h1 className='text-white text-xl ml-2'>freepik 4k collections</h1>
            </div>
            {/* <CarouselLanding data={fadeImages}/> */}
          </div>
          <div>
            
          


          </div>


        </div>

      </div>


      {/* /------el primer componente esta de aqui para arriba, de aqui para abajo el segundo-------- */}

      <div className='w-full max-w-screen-xl mt-24 space-y-14 flex flex-col justify-center'>
        <h1 className='text-3xl text-center text-neutral-300'> Last Drops</h1>

        <div className='w-full'>
          
          <div className='mb-20'>
           <Carousel/>
          </div>

        </div>
        

      </div>
      {/* /------el segundo componente --> carusel -> esta de aqui para arriba, de aqui para abajo el tercero-------- */}

      <div className='w-full max-w-screen-xl mt-14'>
        <h1 className='text-3xl text-center text-neutral-300 mb-14'> Top Collections</h1>

        <div className='w-full'>
          
          <div className='mb-20'>
           <Carousel/>
           
           <div className='w-full flex justify-center mt-8'>
             <button className='text-white text-3xl p-4 px-6  bg-purple-700 hover:bg-purple-900 rounded-lg'>Go to rankings</button>
           </div>

          </div>

        </div>
        

      </div>

      {/* /------el tercer componente --> carusel TOP -> esta de aqui para arriba, de aqui para abajo el 4to-------- */}
       
       <div className=' bg-white w-full max-w-screen-xl flex'>

        <div className='basis-1/12 bg-black'>

        </div>

        <div className='basis-2/12 bg-cyan-400'>

        </div>
 
       </div>
     
    </div>
    
  )
}
