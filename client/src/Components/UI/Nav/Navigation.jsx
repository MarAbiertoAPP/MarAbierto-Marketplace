import React, { useState, memo } from 'react'
import DropDownTail from '../../Home/Dropdown/Dropdown'
import Classes from './navigation.module.css'
import Logo from '../../../assests/LogoPMA.png'
import User from '../../../assests/user.png'
import { IconContext } from 'react-icons'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { CgLogIn, CgLogOut } from 'react-icons/cg'
import { useAuth0 } from '@auth0/auth0-react'
import { IoIosCart } from 'react-icons/io'
import { Cart } from '../../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { resetFilters } from '../../../Redux/Actions'
import LanguajeButton from '../../LanguajeButton/LanguajeButton'

function Nav () {
  const [open, setOpen] = useState(false)
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const [openCart, setOpenCart] = useState(false)
  const cart = useSelector(state => state.Cart)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const showDropdown = () => {
    setOpen(!open)
  }
  const showCart = () => {
    setOpenCart(!openCart)
  }

  const handleLogout = () => {
    logout()
    window.localStorage.removeItem('User')
  }
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(resetFilters())
    navigate(-1)
  }
  return (

    <div className='w-full max-w-7xl'>
      <nav className={Classes.nav}>
        <div onClick={(e) => handleClick(e)}>
          <img src={Logo} alt="logo" className={`${Classes.logo} cursor-pointer`} />
        </div>

        <ul className={Classes.navbar_menu}>
        <LanguajeButton/>
          {cart.length > 0 && (<li style={{ color: '#8a00ff', fontWeight: 'bolder', fontSize: '1.5em' }}>
            {cart.length}
          </li>)}

          <li onClick={() => showCart()}>
            <IconContext.Provider value={{ className: `${Classes.dots}` }}>

              <IoIosCart />
            </IconContext.Provider>
          </li>

          <li>
            <Cart open={openCart} setOpen={setOpenCart} />
          </li>
          <li>
            {isAuthenticated
              ? <Link to='/user'>
            <img src={User} alt="user" className={Classes.iconsOn} />
            </Link>
              : <img src={User} alt="user" className={Classes.icons} />
            }
          </li>
          <li onClick={() => showDropdown()}>
            <IconContext.Provider value={{ className: `${Classes.dots}` }}>
              <BiDotsHorizontalRounded />
            </IconContext.Provider>
          </li>
          <li>
            <DropDownTail
              open={open}
              setOpen={setOpen}>
              <div className={Classes.menu_items}>
                <li>Home</li>
                <li> FAQ</li>
                {
                  !isAuthenticated
                    ? <li onClick={() => loginWithRedirect()}> <CgLogIn />Login</li>
                    : <li onClick={() => handleLogout()}><CgLogOut /> Logout</li>
                }

              </div>
            </DropDownTail>
          </li>
        </ul>
      </nav>

         <div className= 'w-full mt-20' >
      <iframe className={'w-full h-10'} src={'https://s.tradingview.com/embed-widget/ticker-tape/?locale=en&page-uri=https%3A%2F%2Fwww.tradingview.com%2Fwidget%2Fticker-tape%2F#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22ETH%2FUSD%22%2C%22proName%22%3A%22BITSTAMP%3AETHUSD%22%7D%2C%7B%22description%22%3A%22USD%2FCLP%22%2C%22proName%22%3A%22FX_IDC%3AUSDCLP%22%7D%2C%7B%22description%22%3A%22USD%2FARS%22%2C%22proName%22%3A%22FX_IDC%3AUSDARS%22%7D%2C%7B%22description%22%3A%22USD%2FCOP%22%2C%22proName%22%3A%22FX_IDC%3AUSDCOP%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D'}></iframe>
      </div>

    </div>
  )
}

export default memo(Nav)
/* function Dropdown () {
  const {
    loginWithRedirect, isAuthenticated,
    logout
  } = useAuth0()

  return (
    <div className={`${Classes.dropdown} ${open ? Classes.fadeIn : Classes.fadeOut}`}>
      <div>
          <span className={Classes.icon_button}>
            <IconContext.Provider value={{ className: `${Classes.icon_button}` }}>
              <BiRocket />
            </IconContext.Provider>
          </span>
      </div>
       <span className={Classes.dropdownText}>Explore</span>
       {
          !isAuthenticated
            ? (
            <div>
          <span className={Classes.icon_button}>
            <IconContext.Provider value={{ className: `${Classes.icon_button}` }}>
              <CgLogIn />
            </IconContext.Provider>
          </span>
          <label onClick={() => loginWithRedirect()} className={Classes.dropdownText}>Login</label>
      </div>
              )
            : (
            <div>
          <span className={Classes.icon_button}>
            <IconContext.Provider value={{ className: `${Classes.icon_button}` }}>
              <CgLogOut />
            </IconContext.Provider>
          </span>
          <label onClick={() => logout({ returnTo: window.location.origin })} className={Classes.dropdownText}>Logout</label>
      </div>
              )
       }

      </div>
  )
} */
