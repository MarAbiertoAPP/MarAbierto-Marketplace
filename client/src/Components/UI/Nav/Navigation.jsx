import React, { useState } from 'react'
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
import { useSelector } from 'react-redux'

export default function Nav () {
  const [open, setOpen] = useState(false)
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const [openCart, setOpenCart] = useState(false)
  const cart = useSelector(state => state.Cart)

  const showDropdown = () => {
    setOpen(!open)
  }
  const showCart = () => {
    setOpenCart(!openCart)
  }
  return (
    <div>
      <nav className={Classes.nav}>
        <div>
      <img src={Logo} alt="logo" className={Classes.logo} />
      </div>
      <ul className={Classes.navbar_menu}>
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
          <img src={User} alt="user" className={Classes.icons} />
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
                ? <li onClick={() => loginWithRedirect()}> <CgLogIn/>Login</li>
                : <li onClick={() => logout()}><CgLogOut/> Logout</li>
            }

          </div>
                </DropDownTail>
          </li>
      </ul>
      </nav>
    </div>
  )
}
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
