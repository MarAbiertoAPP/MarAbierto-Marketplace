import React, { useState } from 'react'
import Classes from './navigation.module.css'
import Logo from '../../../assests/LogoPMA.png'
import User from '../../../assests/user.png'
import { IconContext } from 'react-icons'
import { BiDotsHorizontalRounded, BiRocket } from 'react-icons/bi'
import { CgLogIn, CgLogOut } from 'react-icons/cg'
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav () {
  const [open, setOpen] = useState(false)

  const showDropdown = () => {
    setOpen(!open)
  }
  return (
    <div>
      <nav className={Classes.nav}>
        <div>
      <img src={Logo} alt="logo" className={Classes.logo} />
      </div>
      <ul className={Classes.navbar_menu}>
        <li>
          <img src={User} alt="user" className={Classes.icons} />
        </li>
        <li onClick={() => showDropdown()}>
          <IconContext.Provider value={{ className: `${Classes.dots}` }}>
            <BiDotsHorizontalRounded />
          </IconContext.Provider>
        </li>
        {
          open
            ? <li>
                <Dropdown />
          </li>
            : null}
      </ul>
      </nav>
    </div>
  )
}
function Dropdown () {
  const {
    loginWithRedirect, isAuthenticated,
    logout
  } = useAuth0()

  /* function DropdownItem (props) {
    Dropdown.propTypes = {
      Icon: PropTypes.function,
      children: PropTypes.string
    }
    return (
      <a href="#" className={Classes.menu_item}>
        <span className={Classes.icon_button}>
          <IconContext.Provider value={{ className: `${Classes.icon_button}` }}>
            {props.Icon}
          </IconContext.Provider>
        </span>
        {props.children}
      </a>
    )
  } */

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
}
