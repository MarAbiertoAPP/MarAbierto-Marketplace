/*eslint-disable*/

import Nav from '../UI/Nav/Navigation'
import Carousel from './newHomeResources/Carousel'
import Footer from '../Footer/Footer'
import style from './newHome.module.css'
import { Fade } from 'react-slideshow-image';
import photo from '../../assests/newHomePhoto.jpg'
import mini from '../../assests/demo/fotouser.jpeg'
import photo2 from '../../assests/demo/background.webp'
import CarouselLanding from './newHomeResources/CarouselLanding';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCollection } from '../../Redux/Actions';
import { useEffect } from 'react';
import ChatbotMar from '../Chatbox/ChatBot'




export default function NewHome () {
  const [t] = useTranslation('faq')
  const dispatch = useDispatch()
  const Collection = useSelector(state => state.Collection)
  const navigate = useNavigate()




  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getAllCollection())
  }, [])

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

            <Link to='/create'>
              <button className='text-white text-3xl p-4 px-6 my-6 bg-purple-700 hover:bg-purple-900 rounded-lg'>{t("create.create")}</button> 
            </Link>
          </div>
          <div className=" z-10 md:z-50 fixed bottom-10 right-0"> 
          <ChatbotMar  />
          </div>
          
          <div>
            <h1 className='text-lg text-white text-purple-500'>Learn more about MarAbierto</h1>
          </div>

        </div>

        {/* <div className='basis-1/12'>

        </div> */}

        <div className='basis-5/12 flex flex-col items-center justify-center p-8'>

          <div onClick={()=> navigate('/collection/waifusion')} className='shadow-2xl shadow-purple-700 flex flex-col  rounded-lg hover:shadow-white'>
        
      {/* <Fade {...fadeProperties} className=''>   
      {fadeImages.map((e, index)=> (
            <div className="" key={index}>
             <img className='h-96 w-96 object-cover' src={e.url}/>
             <h1 className='text-white text-xl ml-2'>NOMBRE DE LA COLECCION</h1>       

              </div>           
          ))} 
    
      </Fade> */}
    

            <img className='max-h-limitH max-w-xl m-4 rounded-2xl' src={'https://lh3.googleusercontent.com/N9PAvOmcM6aKvnO4lthhz_cNvs1uGykOdHqL4FSFRB97jGqWCeoK0tG8-IwI7TVY7-CK5F60mB7cxK-vl70IrMoDfpG_12QQBKSY9mc=w600'}></img>
            <div className='flex m-4 items-center'>              
              <img className='rounded-full h-10 w-10' src={'https://lh3.googleusercontent.com/TrltscwBLgNJMM_jgHDU9f1GMR5xEfvC2SNwyqest2_3yN6icrtWQIvQTJRTA1WyGKP3qkOskrHMGyKDiXclLC0BWTB77mD0BWQ5xg=s168'}></img>
              <h1 className='text-white text-xl ml-2'>Waifusion</h1>
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
          
          <div className='mb-20 capitalize'>
           <Carousel data={Collection.collections}/>
          </div>

        </div>
        

      </div>
      {/* /------el segundo componente --> carusel -> esta de aqui para arriba, de aqui para abajo el tercero-------- */}

      <div className='w-full max-w-screen-xl mt-14'>
        <h1 className='text-3xl text-center text-neutral-300 mb-14'> Top Collections</h1>

        <div className='w-full'>
          
          <div className='mb-20'>
           <Carousel data={Collection.collections}/>
           
           {/* <div className='w-full flex justify-center mt-8'>
             <button className='text-white text-3xl p-4 px-6  bg-purple-700 hover:bg-purple-900 rounded-lg'>Go to rankings</button>
           </div> */}

          </div>

        </div>
        

      </div>

      {/* /------el tercer componente --> carusel TOP -> esta de aqui para arriba, de aqui para abajo el 4to-------- */}
       
      <Footer/>
     
    </div>
    
  )
}
